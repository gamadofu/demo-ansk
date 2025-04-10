/**
 * Cloudflare Pages用のBasic認証ミドルウェア
 * @see https://developers.cloudflare.com/pages/platform/functions/
 */

// 認証情報の設定
const BASIC_USER = 'admin'
const BASIC_PASS = 'admin'

// デバッグ用ログ関数
function logDebug(message, obj = {}) {
  console.log(`[DEBUG] ${message}`, JSON.stringify(obj))
}

// エラーハンドリング関数
async function errorHandling(context) {
  logDebug('ミドルウェアが実行されました - errorHandling', { url: context.request.url })
  try {
    return await context.next()
  } catch (err) {
    logDebug('エラーが発生しました', { error: err.message })
    return new Response(`${err.message}\n${err.stack}`, { status: 500 })
  }
}

// リクエスト処理関数
async function handleRequest(context) {
  const { request, next } = context
  logDebug('リクエストを受信しました', { 
    url: request.url,
    method: request.method,
    headers: Object.fromEntries([...request.headers.entries()])
  })
  
  // Authorizationヘッダーの確認
  if (request.headers.has("Authorization")) {
    logDebug('Authorizationヘッダーが見つかりました')
    const Authorization = request.headers.get('Authorization')

    const [scheme, encoded] = Authorization.split(' ')
    logDebug('認証スキーム', { scheme })

    // Basic認証形式の確認
    if (!encoded || scheme !== 'Basic') {
      logDebug('無効な認証スキーム', { scheme })
      return new Response(`認証ヘッダーは Basic で始まる必要があります`, {
        status: 400,
      })
    }

    try {
      // Base64デコードとUnicode正規化
      const buffer = Uint8Array.from(atob(encoded), (character) =>
        character.charCodeAt(0)
      )
      const decoded = new TextDecoder().decode(buffer).normalize()
      logDebug('認証情報をデコードしました')

      // ユーザー名とパスワードの分割
      const index = decoded.indexOf(':')

      // 無効な形式のチェック
      if (index === -1 || /[\0-\x1F\x7F]/.test(decoded)) {
        logDebug('無効な認証形式')
        return new Response('無効な認証情報です。', { status: 400 })
      }

      const user = decoded.substring(0, index);
      const pass = decoded.substring(index + 1);
      logDebug('認証情報を取得しました', { user })

      // ユーザー名とパスワードの検証
      if (BASIC_USER !== user) {
        logDebug('ユーザー名が一致しません', { user, expected: BASIC_USER })
        return new Response('認証情報が無効です。', { status: 401 })
      }

      if (BASIC_PASS !== pass) {
        logDebug('パスワードが一致しません')
        return new Response('認証情報が無効です。', { status: 401 })
      }

      logDebug('認証成功')
      // 認証成功時は次のミドルウェアやページに進む
      return await next()
    } catch (err) {
      logDebug('認証処理中にエラーが発生しました', { error: err.message })
      return new Response('認証処理中にエラーが発生しました。', { status: 500 })
    }
  }

  logDebug('Authorizationヘッダーが見つかりません。認証ダイアログを表示します。')
  // 認証情報がない場合は認証ダイアログを表示
  return new Response('ログインが必要です。', {
    status: 401,
    headers: {
      // 認証ダイアログを表示するヘッダー
      'WWW-Authenticate': 'Basic realm="セキュアエリア", charset="UTF-8"',
    },
  })
}

// Cloudflare Pages Functionsのエクスポート形式
export const onRequest = [errorHandling, handleRequest]

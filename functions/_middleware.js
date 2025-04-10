/**
 * Cloudflare Pages用のBasic認証ミドルウェア
 * @see https://developers.cloudflare.com/pages/platform/functions/
 */

// 認証情報の設定
const BASIC_USER = 'admin'
const BASIC_PASS = 'admin'

// エラーハンドリング関数
async function errorHandling(context) {
  try {
    return await context.next()
  } catch (err) {
    return new Response(`${err.message}\n${err.stack}`, { status: 500 })
  }
}

// リクエスト処理関数
async function handleRequest({ next, request }) {
  // Authorizationヘッダーの確認
  if (request.headers.has("Authorization")) {
    const Authorization = request.headers.get('Authorization')

    const [scheme, encoded] = Authorization.split(' ')

    // Basic認証形式の確認
    if (!encoded || scheme !== 'Basic') {
      return new Response(`認証ヘッダーは Basic で始まる必要があります`, {
        status: 400,
      })
    }

    // Base64デコードとUnicode正規化
    const buffer = Uint8Array.from(atob(encoded), (character) =>
      character.charCodeAt(0)
    )
    const decoded = new TextDecoder().decode(buffer).normalize()

    // ユーザー名とパスワードの分割
    const index = decoded.indexOf(':')

    // 無効な形式のチェック
    if (index === -1 || /[\0-\x1F\x7F]/.test(decoded)) {
      return new Response('無効な認証情報です。', { status: 400 })
    }

    const user = decoded.substring(0, index);
    const pass = decoded.substring(index + 1);

    // ユーザー名とパスワードの検証
    if (BASIC_USER !== user) {
      return new Response('認証情報が無効です。', { status: 401 })
    }

    if (BASIC_PASS !== pass) {
      return new Response('認証情報が無効です。', { status: 401 })
    }

    // 認証成功時は次のミドルウェアやページに進む
    return await next()
  }

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

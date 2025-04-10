// Cloudflare Pages用のBasic認証
export async function onRequest(context) {
  const authHeader = context.request.headers.get('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return new Response('認証が必要です', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="セキュアエリア", charset="UTF-8"'
      }
    });
  }
  
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = atob(base64Credentials);
  const [username, password] = credentials.split(':');
  
  // 認証情報の検証
  if (username !== 'admin' || password !== 'admin') {
    return new Response('認証情報が無効です', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="セキュアエリア", charset="UTF-8"'
      }
    });
  }
  
  // 認証成功
  return context.next();
}

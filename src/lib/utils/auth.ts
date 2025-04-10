// 認証情報（実際のアプリケーションでは環境変数などで安全に管理すべき）
const AUTH_USERNAME = 'admin';
const AUTH_PASSWORD = 'password123';

/**
 * ユーザー名とパスワードを検証する関数
 * @param username ユーザー名
 * @param password パスワード
 * @returns 認証が成功したかどうか
 */
export function validateCredentials(username: string, password: string): boolean {
  return username === AUTH_USERNAME && password === AUTH_PASSWORD;
}

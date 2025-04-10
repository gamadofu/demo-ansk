// Basic認証のミドルウェア
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

const username = "youruser"
const password = "yourpass"

async function handleRequest(request) {
  const authHeader = request.headers.get("Authorization")
  const expected = `Basic ${btoa(username + ":" + password)}`

  if (authHeader !== expected) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"'
      }
    })
  }

  // 認証成功：本来のページへリダイレクト
  const url = new URL(request.url)
  // 実際のサイトURLに変更してください
  return fetch(`https://demo-ansk.pages.dev${url.pathname}${url.search}`)
}

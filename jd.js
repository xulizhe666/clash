/**
 * @supported 9E1BBA07
 */

const url = $request.url

if (url.indexOf('https://mars.jd.com/log/sdk') != -1) {
  const cookie = $request.headers['Cookie']
  const pt_key = cookie.match(/pt_key=([^;]+)/)[1]
  const pt_pin = cookie.match(/pt_pin=([^;]+)/)[1]
  const newCookie = `pt_key=${pt_key};pt_pin=${pt_pin};`
  $notify('成功获取到Cookie', '新的京东Cookie已生成', `Cookie: ${newCookie}`)
  $done({ headers: { 'Cookie': newCookie } })
} else {
  $done({})
}

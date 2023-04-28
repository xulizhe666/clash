const http = require('http');
const https = require('https');
const { URL } = require('url');

const url = new URL('https://api.m.jd.com/client.action?functionId=newUserInfo');

const options = {
  hostname: url.hostname,
  path: url.pathname + url.search,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    'Referer': 'https://m.jd.com/',
    'Cookie': '这里替换为您的Cookie'
  }
};

const req = https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const cookie = res.headers['set-cookie'][0];
    const matches = cookie.match(/pt_key=(.*?);.*pt_pin=(.*?);/);
    const pt_key = matches[1];
    const pt_pin = matches[2];
    console.log(`pt_key: ${pt_key}, pt_pin: ${pt_pin}`);
    // 在此处替换为您的通知代码
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.end();

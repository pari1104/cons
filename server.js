const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('Yangi mijoz ulandi');

  ws.on('message', function incoming(message) {
    console.log('Qabul qilingan xabar:', message);

    // Mijozga xabar qaytarish
    ws.send(`Server javobi: Siz yubordingiz -> ${message}`);
  });

  ws.send('Salom! Siz serverga ulandingiz.');
});

console.log('WebSocket server 8080-portda ishga tushdi');

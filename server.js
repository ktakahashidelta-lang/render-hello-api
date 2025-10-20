const express = require('express');
const app = express();

// どのURLが来たかを必ずログに出す
app.use((req, _res, next) => {
  console.log('[REQ]', req.method, req.url);
  next();
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Render!' });
});

// ベースURLも確認用に追加
app.get('/', (_req, res) => res.send('OK /'));

app.get('/healthz', (_req, res) => res.send('ok'));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));

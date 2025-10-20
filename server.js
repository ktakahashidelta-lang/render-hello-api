const express = require('express');
const app = express();

// 確認用API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Render!' });
});

// ヘルスチェック（Renderの監視向け・任意）
app.get('/healthz', (_, res) => res.send('ok'));

// RenderがPORTを環境変数で渡すので必ず使う
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));

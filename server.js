const express = require('express');
const app = express();

// 変更点が分かるようにメッセージを少し変える
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Render v2!' });
});

// 起動・ビルドの識別用
const startedAt = new Date().toISOString();
app.get('/api/info', (_req, res) => {
  res.json({
    startedAt,
    commit: process.env.RENDER_GIT_COMMIT || 'unknown', // Renderが入れてくれることが多い
    serviceId: process.env.RENDER_SERVICE_ID || 'n/a'
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server running on port', port);
  console.log('Commit:', process.env.RENDER_GIT_COMMIT);
  console.log('StartedAt:', startedAt);
});

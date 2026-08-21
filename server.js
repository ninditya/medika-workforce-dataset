import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static assets from deploy/ directory (which contains index.html, data/, etc.)
app.use(express.static(path.join(__dirname, 'deploy')));

// Also serve static files from root (for dataset JSON/CSV files)
app.use(express.static(__dirname));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Root fallback to deploy/index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'deploy', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Medika Workforce Intelligence app running on http://0.0.0.0:${PORT}`);
});

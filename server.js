import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.set('trust proxy', true);

// Health check (Coolify/Traefik)
app.get('/health', (_req, res) => res.json({ ok: true, ts: Date.now() }));

// Static dist do Astro
const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir, { maxAge: '1h', etag: true }));

// Fallback → index (landing de página única)
app.get('*', (_req, res) => res.sendFile(path.join(distDir, 'index.html')));

const port = parseInt(process.env.PORT || '3000', 10);
app.listen(port, '0.0.0.0', () => {
  console.log(`vendedoria-landing listening on :${port}`);
});

// api/auth.js
export default async function handler(req, res) {
  // Permitimos que tu GitHub Pages se conecte de forma segura
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
  const { code } = req.query;

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (!code) {
    return res.status(400).json({ error: 'Falta el código de autorización' });
  }

  try {
    // Intercambiamos el código temporal por el token real usando tus llaves en el servidor
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.VITE_GITHUB_CLIENT_ID,
        client_secret: process.env.VITE_GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const data = await response.json();

    // Enviamos el script que le inyecta el token al CMS y cierra la ventana emergente automáticamente
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(`
      <script>
        const receiveMessage = (e) => {
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify(data)}',
            e.origin
          );
          window.removeEventListener('message', receiveMessage, false);
          window.close();
        };
        window.addEventListener('message', receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      </script>
    `);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
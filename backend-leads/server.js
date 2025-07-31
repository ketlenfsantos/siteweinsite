const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); // mysql2 no lugar de mysql
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: '*',
}));
app.use(bodyParser.json());

// Cria o pool de conexões
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.post('/api/leads', (req, res) => {
  const { orcamento, data_envio } = req.body;

  console.log('Orçamento recebido:', JSON.stringify(orcamento, null, 2));
  console.log('Data de envio:', data_envio);

  const { contato, servico } = orcamento;

  const sql = `
    INSERT INTO leads (
      nome, email, whatsapp, negocio, tempo_negocio,
      categoria, categoria_raw,
      objetivo_site, objetivo_site_traduzido,
      possui_identidade, esta_iniciando, quer_assinatura,
      social_count, social_options,
      papelaria, outros,
      data_envio
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    contato?.nome || '',
    contato?.email || '',
    contato?.whatsapp || '',
    contato?.negocio || '',
    contato?.tempoNegocio || '',
    servico?.categoria || '',
    servico?.categoriaRaw || '',
    JSON.stringify(servico?.objetivoSiteRaw || []),
    JSON.stringify(servico?.objetivoSiteTraduzido || []),
    servico?.socialIdentidade || '',
    servico?.inicioDigital || '',
    servico?.copywrite || '',
    servico?.socialCount || '',
    JSON.stringify(servico?.socialOptions || []),
    JSON.stringify(servico?.papelaria || []),
    JSON.stringify(servico?.outros || []),
    data_envio
  ];

  pool.query(sql, values, (error, results) => {
    if (error) {
      console.error('Erro ao salvar lead:', error);
      return res.status(500).json({ error: 'Erro ao salvar lead' });
    }
    res.status(200).json({ message: 'Lead salvo com sucesso' });
  });
});

app.get('/', (req, res) => {
  res.send('Backend rodando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
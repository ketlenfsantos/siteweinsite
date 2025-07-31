  const express = require('express');
  const cors = require('cors');
  const mysql = require('mysql');
  const bodyParser = require('body-parser');

  const app = express();
  const port = 3001;

  app.use(cors());
  app.use(bodyParser.json());

  const db = mysql.createConnection({
    host: 'br1020.hostgator.com.br', // pegue no cPanel
    user: 'ketlen80_weinsite_user', // nome COMPLETO do usuário
    password: '96864437Ket!',
    database: 'ketlen80_weinsite_leads' // nome COMPLETO do banco
  });

  db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco:', err);
    } else {
      console.log('Conectado ao MySQL!');
    }
  });

  app.post('/api/leads', (req, res) => {
    const { orcamento, data_envio } = req.body;

    const {
      contato,
      servico
    } = orcamento;

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
    servico?.socialIdentidade || '', // CORRIGIDO: usa o nome da propriedade que vem do front-end
    servico?.inicioDigital || '',     // CORRIGIDO: usa o nome da propriedade que vem do front-end
    servico?.copywrite || '',         // CORRIGIDO: usa o nome da propriedade que vem do front-end
    servico?.socialCount || '', // (Mantenha este se você realmente tiver 'socialCount' no front-end, o log não o mostra explicitamente)
    JSON.stringify(servico?.socialOptions || []), // (Mantenha este se você realmente tiver 'socialOptions' no front-end, o log não o mostra explicitamente)
    JSON.stringify(servico?.papelaria || []),
    JSON.stringify(servico?.outros || []),
    data_envio
  ];

    console.log('Recebido no backend:', req.body);

    db.query(sql, values, (error, results) => {   
      if (error) {
        console.error('Erro ao salvar lead:', error);
        return res.status(500).json({ error: 'Erro ao salvar lead' });
      }
      res.status(200).json({ message: 'Lead salvo com sucesso' });
    });
  });

  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });

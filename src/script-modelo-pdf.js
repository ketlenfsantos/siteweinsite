  // Inicializa os ícones do Lucide Icons, se estiverem sendo usados
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      } else {
        console.warn(
          'Lucide Icons não está disponível ou createIcons não é uma função.',
        );
      }

      function popularDados() {
        const orcamentoJSON = localStorage.getItem('orcamento');
        if (!orcamentoJSON) {
          console.error('Dados do orçamento não encontrados no localStorage.');
          // Opcional: Redirecionar de volta para o formulário se não houver dados
          // window.location.href = 'index.html';
          return;
        }

        let orcamento;
        try {
          orcamento = JSON.parse(orcamentoJSON);
          console.log('Dados do orçamento carregados:', orcamento);
        } catch (e) {
          console.error('Erro ao fazer parse do orçamento do localStorage:', e);
          return;
        }

        // Função auxiliar para transformar array em string ou retornar valor direto
        function valorParaTexto(valor) {
          if (Array.isArray(valor)) {
            const filteredValores = valor.filter(
              (item) => item !== null && item !== undefined && item !== '',
            );
            return filteredValores.join(', ') || 'Não informado';
          }
          return valor || 'Não informado';
        }

        // --- PREENCHENDO DETALHES DA SOLICITAÇÃO ---
        document.getElementById('nomeCliente').textContent = valorParaTexto(
          orcamento.contato?.nome,
        );
        document.getElementById('emailCliente').textContent = valorParaTexto(
          orcamento.contato?.email,
        );
        document.getElementById('whatsappCliente').textContent = valorParaTexto(
          orcamento.contato?.whatsapp,
        );
        document.getElementById('empresaCliente').textContent = valorParaTexto(
          orcamento.contato?.negocio,
        );
        document.getElementById('tempoNegocio').textContent = valorParaTexto(
          orcamento.contato?.tempoNegocio,
        );

        // "Começando no digital?"
        const inicioDigitalStatus = orcamento.servico?.inicioDigital;
        document.getElementById('inicioDigital').textContent =
          inicioDigitalStatus === 'sim'
            ? 'Sim, está começando agora no digital'
            : inicioDigitalStatus === 'nao'
            ? 'Não, já possuo presença digital'
            : 'Não informado';

        // Categoria Selecionada
        document.getElementById('categoriaSelecionada').textContent =
          valorParaTexto(orcamento.servico?.categoria);

        // Opção Escolhida - Lógica para exibir/esconder/customizar
        const categoriaServiceRaw = orcamento.servico?.categoriaRaw;
        const opcaoSelecionadaElement =
          document.getElementById('opcaoSelecionada');
        const opcaoSelecionadaContainer = document.getElementById(
          'opcaoSelecionadaContainer',
        ); // Novo ID para a div/p que contém o label e o valor

        if (categoriaServiceRaw === 'logo') {
          // Se a categoria for 'logo', esconde o container inteiro da "Opção Escolhida"
          if (opcaoSelecionadaContainer) {
            opcaoSelecionadaContainer.style.display = 'none';
          }
        } else {
          // Para outras categorias, exibe e preenche normalmente
          if (opcaoSelecionadaContainer) {
            opcaoSelecionadaContainer.style.display = ''; // Garante que esteja visível
          }
          let opcoesDisplay =
            'Nenhuma opção específica selecionada para esta categoria.';

          if (
            categoriaServiceRaw === 'site' &&
            orcamento.servico.objetivoSiteTraduzido?.length > 0
          ) {
            opcoesDisplay = valorParaTexto(
              orcamento.servico.objetivoSiteTraduzido,
            );
          } else if (
            categoriaServiceRaw === 'social' &&
            orcamento.servico.socialNecessidadeTraduzida?.length > 0
          ) {
            opcoesDisplay = valorParaTexto(
              orcamento.servico.socialNecessidadeTraduzida,
            );
          } else if (
            categoriaServiceRaw === 'stationery' &&
            orcamento.servico.papelariaTraduzida
          ) {
            opcoesDisplay = valorParaTexto(
              orcamento.servico.papelariaTraduzida,
            );
          }
          opcaoSelecionadaElement.textContent = opcoesDisplay;
        }

        // Informações adicionais (Identidade Visual e Copywrite)
        document.getElementById('infoAdicionalIdentidade').textContent =
          valorParaTexto(orcamento.servico?.socialIdentidade);
        document.getElementById('infoAdicionalCopywrite').textContent =
          valorParaTexto(orcamento.servico?.copywrite);

        // --- PREENCHENDO A SOLUÇÃO DIGITAL IDEAL ---
        const nomeProdutoElement = document.getElementById('nomeProduto');
        const descricaoProdutoDetalheElement = document.getElementById(
          'descricaoProdutoDetalhe',
        );

        let tituloSolucao = 'Produto não encontrado';
        let descricaoSolucao =
          'Não encontramos uma solução ideal específica para esta categoria. Entre em contato para mais detalhes!';

        let solucaoEspecifica = null;

        switch (categoriaServiceRaw) {
          case 'site':
            solucaoEspecifica = orcamento.servico?.solucaoIdealSite;
            break;
          case 'logo':
            solucaoEspecifica = orcamento.servico?.solucaoIdealLogo;
            break;
          case 'social':
            solucaoEspecifica = orcamento.servico?.solucaoIdealSocial;
            break;
          case 'stationery':
            solucaoEspecifica = orcamento.servico?.solucaoIdealStationery;
            break;
        }

        if (
          solucaoEspecifica &&
          solucaoEspecifica.titulo &&
          solucaoEspecifica.explicacao
        ) {
          tituloSolucao = solucaoEspecifica.titulo;
          // Substitui quebras de linha duplas por <br><br> para formatar HTML
          descricaoSolucao = solucaoEspecifica.explicacao.replace(
            /\n\n/g,
            '<br><br>',
          );
        }

        nomeProdutoElement.textContent = tituloSolucao;
        // Usar innerHTML para que as tags <br><br> sejam interpretadas
        descricaoProdutoDetalheElement.innerHTML = descricaoSolucao;

        // --- Link Whatsapp personalizado ---
        const nomeClienteWa = valorParaTexto(orcamento.contato?.nome);
        const categoriaDisplayWa = valorParaTexto(orcamento.servico?.categoria);
        

        let opcoesForWhatsapp = '';
        if (
          categoriaServiceRaw === 'site' &&
          orcamento.servico.objetivoSiteTraduzido?.length > 0
        ) {
          opcoesForWhatsapp = valorParaTexto(
            orcamento.servico.objetivoSiteTraduzido,
          );
        } else if (
          categoriaServiceRaw === 'social' &&
          orcamento.servico.socialNecessidadeTraduzida?.length > 0
        ) {
          opcoesForWhatsapp = valorParaTexto(
            orcamento.servico.socialNecessidadeTraduzida,
          );
        } else if (
          categoriaServiceRaw === 'stationery' &&
          orcamento.servico.papelariaTraduzida
        ) {
          opcoesForWhatsapp = valorParaTexto(
            orcamento.servico.papelariaTraduzida,
          );
        } else if (categoriaServiceRaw === 'logo') {
          opcoesForWhatsapp = valorParaTexto(
            orcamento.servico.logoInspTraduzido,
          );
        }

        const textoWhatsApp = `
Olá, me chamo ${nomeClienteWa}, e preenchi o formulário no site.
Categoria: ${categoriaDisplayWa}
Opções escolhidas: ${opcoesForWhatsapp}

Gostaria de receber o orçamento completo. Obrigada!`;

        const textoCodificado = encodeURIComponent(textoWhatsApp);
        const linkWhatsApp = `https://wa.me/5551984520582?text=${textoCodificado}`;
        document.querySelectorAll('.linkWhatsappProdutoIdeal').forEach((el) => {
          el.href = linkWhatsApp;
        });
      }

      window.addEventListener('DOMContentLoaded', () => {
           // Animação com Intersection Observer
  const items = document.querySelectorAll("[data-anime]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("anime");
      } else {
        entry.target.classList.remove("anime");
      }
    });
  }, {
    threshold: 0.2
  });
  items.forEach(item => observer.observe(item));
        popularDados();
      });
   
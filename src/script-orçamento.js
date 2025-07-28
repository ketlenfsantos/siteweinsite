
      // --- MAPEAMENTOS GLOBAIS ---
      const sitePagesMap = {
        1: '🏢 Apresentar minha empresa ou marca',
        2: '🛒 Vender um Produto ou Serviço',
        3: '📢 Divulgar um Produto Específico',
        4: '🚀 Lançar um Produto ou Serviço',
        5: '🎨 Expor meu trabalho ou projetos',
        6: '✍️ Criar um Blog de Conteúdos',
        7: '✍️ Quero expor meu trabalho no Google com uma página simples',
        8: '✍️ Quero captar leads',
      };

      const siteSolutionsMap = {
        '🏢 Apresentar minha empresa ou marca': {
          titulo: 'Site Institucional ou One Page',
          explicacao:
            'Um Site é a base da sua presença online. É onde sua marca ganha autoridade, apresenta seus produtos ou serviços com clareza e transmite confiança ao público. Uma ferramenta poderosa para criar confiança e aparecer nos mecanismos de buscas de potenciais clientes.',
        },
        '🛒 Vender um Produto ou Serviço': {
          titulo: 'Landing Page - Página de Vendas',
          explicacao:
            'A landing page é uma página única e altamente focada em uma ação específica. Um página de vendas é feita para transformar visitantes em clientes. Com foco total em destacar seu produto, remover objeções e conduzir à compra com alta conversão !',
        },
        '📢 Divulgar um Produto Específico': {
          titulo: 'Landing Page - Página de Lançamento ou Vendas',
          explicacao:
            'A landing page é uma página única e altamente focada em uma ação específica. É o palco perfeito para divulgar um novo produto ou serviço. Cria urgência, desejo e engajamento com timers, bônus e gatilhos de escassez, com total em destacar seu produto, remover objeções e conduzir à compra com alta conversão',
        },
        '🚀 Lançar um Produto ou Serviço': {
          titulo: 'Landing Page - Página de Lançamento',
          explicacao:
            'A landing page é uma página única e altamente focada em uma ação específica. Esse tipo de página visa gerar expectativa, apresentar a novidade e, muitas vezes, coletar e-mails de interessados para nutrir leads antes, durante e após o lançamento oficial, construindo uma audiência engajada.',
        },
        '🎨 Expor meu trabalho ou projetos': {
          titulo: 'Site Portfólio',
          explicacao:
            'Um site portfólio é uma ferramenta essencial para profissionais de diversas áreas, como designers, fotógrafos, escritores, desenvolvedores e artistas, que desejam exibir seus melhores trabalhos de forma organizada e acessível. Mais do que uma simples galeria de projetos, ele funciona como um cartão de visitas digital, permitindo que potenciais clientes, empregadores ou colaboradores conheçam suas habilidades, estilo e experiência.',
        },
        '✍️ Criar um Blog de Conteúdos': {
          titulo: 'Blog Integrado ao Site',
          explicacao:
            'Se o foco é marketing de conteúdo e SEO, um Blog Integrado ao Site é a solução. Permite publicar artigos, guias e notícias relevantes para seu público, aumentando o tráfego orgânico e posicionando sua marca como referência.',
        },
        '✍️ Quero expor meu trabalho no Google com uma página simples': {
          titulo: 'Site One-Page (Site de Página Única)',
          explicacao:
            'Um Site é a base da sua presença online. É onde sua marca ganha autoridade, apresenta seus produtos ou serviços com clareza e transmite confiança ao público. A One Page é uma solução compacta e eficiente para apresentar informações de forma direta e concisa. Ao invés de múltiplas páginas com links de navegação internos, todo o conteúdo é organizado em uma única página longa, que o usuário pode rolar para baixo e acessar as principais informações. Serviço ideal para quem está iniciando.',
        },
        '✍️ Quero captar Leads': {
          titulo: 'Landing Page - Página de Captura de Leads',
          explicacao:
            'A landing page é uma página única e altamente focada em uma ação específica. Empresas e profissionais que querem que o visitante realize uma ação específica e mensurável, que vai além da venda direta ou da captura de e-mails. Pode ser o download de um material, o preenchimento de um formulário de orçamento, a solicitação de uma demonstração, a inscrição em um evento gratuito ou qualquer outra ação que represente um passo adiante no funil de vendas',
        },
      };

      const redesSociaisMap = {
        1: '📱 Preciso de posts personalizados para o meu feed do instagram',
        2: '🖼️ Quero criar capas para meus stories e reels',
        3: '✍️ Preciso de ajuda para ajustar meu perfil',
        4: '📅 Quero ajuda para planejar meu conteúdo e legendas',
        5: '📢Preciso de posts e que alguem poste para mim',
        6: '📦 Tenho interesse em um pacote mensal de artes digitais',
        7: '💻 Preciso de uma página personalizada de links para o instagram',
        8: '✍️ Todas opções',
      };

      const socialSolutionsMap = {
        '📱 Preciso de posts personalizados para o meu feed do instagram': {
          titulo: 'Design Digital Personalizado para Instagram',
          explicacao:
            'Criamos pra você, de acordo com a sua identidade visual, posts personalizados e exclusivos de acordo com o seu nicho. Você traz a ideia e nós criamos. O foco em gerar engajamento e criar autoridade nas redes. Possuímos diversas opções atrativas que com certeza irão te ajudar !',
        },
        '🖼️ Quero criar capas para meus stories e reels': {
          titulo: 'Design Digital Personalizado para Instagram',
          explicacao:
            'Criamos pra você, de acordo com a sua identidade visual, posts personalizados e exclusivos de acordo com o seu nicho. Você traz a ideia e nós criamos. O foco em gerar engajamento e criar autoridade nas redes. Possuímos diversas opções atrativas que vão te ajudar !',
        },
        '✍️ Preciso de ajuda para ajustar meu perfil': {
          titulo: 'Otimização de Perfil de Redes Sociais',
          explicacao:
            'Análise e otimização completa do seu perfil, incluindo bio, destaques e organização, para atrair mais seguidores e clientes.',
        },
        '📅 Quero ajuda para planejar meu conteúdo e legendas': {
          titulo: 'Planejamento Estratégico de Conteúdo',
          explicacao:
            'A opção perfeita para ti que não consegue ter ideias ou ser criativo. Te ajudamos a destravar no planejamento mensal de conteúdo, ou seja, te ajudamos a pensar em uma estratégia de acordo com seus objetivos e com o seu nicho. Criamos um calendário de posts e postamos pra você.',
        },
        '📢Preciso de posts e que alguem poste para mim': {
          titulo: 'Gestão de Conteúdo e Publicação',
          explicacao:
            'Nesse pacote, criamos um conteúdo mensal básico para suas redes. O diferencial é que realizamos pra você a postagem nas suas redes, te auxiliamos na escolha de horários e você não se preocupa. Além disso, te ajudamos a estruturar o copywrite de suas postagens, de acordo com seu nicho e objetivos.',
        },
        '📦 Tenho interesse em um pacote mensal de artes digitais': {
          titulo: 'Pacote Mensal de Artes Digitais',
          explicacao:
            'Criamos pra você, de acordo com a sua identidade visual, posts personalizados e exclusivos de acordo com o seu nicho. Você traz a ideia e nós criamos. O foco em gerar engajamento e criar autoridade nas redes. Possuímos diversas opções atrativas que vão te ajudar !',
        },
        '💻 Preciso de uma página personalizada de links para o instagram': {
          titulo: 'Página de Links Bio para o Instagram',
          explicacao:
            'A nova sensação do momento. Criamos pra você uma página totalmente personalizada e interativa, com imagens, cores que tenham a ver com o seu negócio. A porta de entrada do usuário a todos os serviços que você oferece de maneira interativa e facilitada.',
        },
        '✍️ Todas opções': {
          titulo: 'Pacote Weinsite Start',
          explicacao:
            'Um pacote perfeito com absolutamente TUDO que você precisa para criar autoridade no Digital, desde o alinhamento do seu perfil, ao planejamento do seu conteúdo. Envie o resultado deste formulário que te enviaremos maiores detalhes',
        },
      };

      const stationeryMap = {
        cards: 'Cartões de visita',
        flyers: 'Flyers e panfletos',
        invitations: 'Convites digitais',
      };

      const stationerySolutionsMap = {
        'Cartões de visita': {
          titulo: 'Design digital de Cartões de Visita',
          explicacao:
            'Mesmo na era digital, o cartão de visita permanece como uma ferramenta de networking e marketing extremamente relevante e, em muitos casos, ideal. Ele transcende a tela do celular e oferece uma experiência tátil e pessoal, importante para seu uso no dia a dia. Criamos para você o arquivo digital pronto para impressão ou para uso no Online.',
        },
        'Flyers e panfletos': {
          titulo: 'Design Digital de Flyers e Panfletos',
          explicacao:
            'Esses materiais impressos oferecem uma forma tangível de engajar o público, seja com uma mensagem rápida e direta (flyer) ou com informações mais aprofundadas e organizadas (folder). Eles complementam a estratégia digital e são ótimos para gerar leads e fortalecer o reconhecimento da marca no mundo físico. São ferramentas de uso tanto no digital como no presencial',
        },
        'Convites digitais': {
          titulo: 'Design de Convites Digitais',
          explicacao:
            'Simplifique a organização do seu evento e impressione seus convidados com convites digitais totalmente personalizados. Possuímos opções desde Convite Virtuais estáticos e dinâmicos, além de Save the Dates e kits digitais para o seu evento. Saiba mais enviando esta resposta ! ',
        },
      };

      const logoMap = {
        basic: 'Ideias e inspirações já possuo',
        intermediate: 'Preciso de inspirações e ideias',
      };

      const logoSolutionsMap = {
        'Ideias e inspirações já possuo': {
          titulo: 'Identidade Visual Basic',
          explicacao:
            'Fazer uma identidade visual é muito mais do que ter um logotipo bonito. É uma estratégia fundamental para o reconhecimento, diferenciação no mercado e construção de confiança e credibilidade do seu negócio. Aqui na Weinsite, nosso foco é proporcionar a quem está começando no digital uma identidade visual completa, com tudo que você precisa. Clique no botão a baixo que te enviamos as informações completas !',
        },
        'Preciso de inspirações e ideias': {
          titulo: 'Identidade Visual Basic',
          explicacao:
            'Fazer uma identidade visual é muito mais do que ter um logotipo bonito. É uma estratégia fundamental para o reconhecimento, diferenciação no mercado e construção de confiança e credibilidade do seu negócio. Aqui na Weinsite, nosso foco é proporcionar a quem está começando no digital uma identidade visual completa, com tudo que você precisa. Clique no botão a baixo que te enviamos as informações completas ! ',
        },
      };

      const categoriasTexto = {
        site: 'Apresentar minha empresa no digital',
        logo: 'Criar uma identidade visual',
        social: 'Quero crescer nas redes sociais',
        stationery: 'Quero itens de papelaria digital',
      };

      // --- FUNÇÃO AUXILIAR para traduzir opções ---
      function traduzirOpcoesParaArmazenar(categoria, valores) {
        if (!valores) return [];
        if (!Array.isArray(valores)) valores = [valores];

        let map = {};
        switch (categoria) {
          case 'site':
            map = sitePagesMap;
            break;
          case 'social':
            map = redesSociaisMap;
            break;
          case 'stationery':
            map = stationeryMap;
            break;
          case 'logo':
            map = logoMap;
            break;
          default:
            map = {};
        }
        return valores.map((v) => map[v] || v);
      }

      // --- LÓGICA DO DOM E EVENT LISTENERS ---
      document.addEventListener('DOMContentLoaded', () => {

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

  
        const welcome = document.getElementById('welcome-screen');
        const formContainer = document.getElementById('form-container');
        const startBtn = document.getElementById('start-btn');

        // Inicialização dos elementos do formulário
        const steps = Array.from(document.querySelectorAll('.form-step'));
        const form = document.getElementById('quote-form');
        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('prev-btn');
        const submitBtn = document.getElementById('submit-btn');
        const progressBar = document.getElementById('progress-bar');
        const stepTitle = document.getElementById('step-title');
        const stepDescription = document.getElementById('step-description');

        // Mapeamento de títulos e descrições para cada passo
        const titles = {
          'step-1': {
            title: 'Vamos nos conhecer?',
            desc: 'Preencha suas informações de contato',
          },
          'step-inicio': {
            title: 'Você está começando agora?',
            desc: 'Entender isso nos ajuda a montar a proposta ideal para você.',
          },
          'step-2': {
            title: 'Qual serviço você precisa?',
            desc: 'Selecione a área que melhor representa sua necessidade. A partir disso, vamos personalizar as próximas perguntas',
          },
          'step-site': {
            title: 'Qual seu objetivo?',
            desc: 'A partir dessa informação consigo identificar o serviço ideal pra você',
          },
          'step-logo': {
            title: 'Sobre a sua Identidade Visual',
            desc: 'Que vai promover a autoridade e marca registrada do seu negócio',
          },
          'step-stationery': {
            title: 'Produtos Digitais para Papelaria',
            desc: 'Transformamos sua ideia em realidade no digital, confeccionamos produtos que podem ser impressos ou usados no digital',
          },
          'step-social': {
            title: 'Produtos Digitais para Redes Sociais',
            desc: 'Invista seu tempo no que realmente importa, deixe o processo criativo pra gente',
          },
          'step-social2': {
            title: 'Identidade Visual e Design',
            desc: 'Para estruturar o design do seu produto escolhido é preciso ter uma identidade visual como logotipo, cores, tipografia',
          },
          'copy-write': {
            title: 'Conteúdo da Página',
            desc: 'Para um site dar os resultados esperados, é preciso ter um conteúdo estratégico, desde a parte visual (banners, imagens) como a parte escrita(Copywrite)',
          },
        };

        // Define o caminho padrão inicial.
        let stepPath = ['step-1', 'step-inicio', 'step-2'];
        let currentStepIndex = 0; // Sempre começa em 0

        // Função para atualizar a interface do usuário (exibir/esconder passos, botões, progresso)
        const updateUI = () => {
          console.log('--- updateUI chamado ---');
          console.log('currentStepIndex DENTRO DO updateUI:', currentStepIndex);
          console.log('stepPath DENTRO DO updateUI:', stepPath);
          console.log('stepPath.length DENTRO DO updateUI:', stepPath.length); // Adicione esta linha!

          const stepId = stepPath[currentStepIndex];
          steps.forEach((s) => s.classList.toggle('active', s.id === stepId)); // Ativa o passo atual

          const { title, desc } = titles[stepId] || {};
          stepTitle.textContent = title || '';
          stepDescription.textContent = desc || '';

          prevBtn.disabled = currentStepIndex === 0; // Desabilita "Anterior" no primeiro passo
          // A LÓGICA CRÍTICA DOS BOTÕES: Corrigida para garantir o comportamento no step-2.

          // Calculamos se é o último passo no caminho atual.

          const isLastStepCalculated = currentStepIndex === stepPath.length - 1;

          let shouldShowNextBtn = true; // Por padrão, mostra "Próximo"

          let shouldShowSubmitBtn = false; // Por padrão, esconde "Gerar Orçamento"

          if (stepId === 'step-2') {
            // No step-2, o "Próximo" DEVE SEMPRE APARECER, e o "Gerar Orçamento" DEVE ESTAR ESCONDIDO.

            // Isso ignora o 'isLastStepCalculated' para este passo específico.

            shouldShowNextBtn = true; // Força "Próximo" a ser visível

            shouldShowSubmitBtn = false; // Força "Gerar Orçamento" a ser escondido

            console.log(
              'Lógica de botão OVERRIDE para step-2: Próximo visível, Gerar Orçamento escondido.',
            );
          } else {
            // Para todos os outros passos, a lógica normal de último passo se aplica.

            shouldShowNextBtn = !isLastStepCalculated;

            shouldShowSubmitBtn = isLastStepCalculated;

            console.log(
              `Lógica de botão NORMAL para ${stepId}: isLastStepCalculated = ${isLastStepCalculated}`,
            );
          }

          nextBtn.classList.toggle('hidden', !shouldShowNextBtn);

          submitBtn.classList.toggle('hidden', !shouldShowSubmitBtn);

          const progress = ((currentStepIndex + 1) / stepPath.length) * 100;
          progressBar.style.width = `${progress}%`;

          console.log(
            'Botão Próximo escondido:',
            nextBtn.classList.contains('hidden'),
          );
          console.log(
            'Botão Gerar Orçamento escondido:',
            submitBtn.classList.contains('hidden'),
          );
          console.log('isLastStepCalculated:', isLastStepCalculated);
          console.log('Tamanho do stepPath:', stepPath.length);
          console.log('ID do passo atual:', stepId);
        };

        // Função de validação dos campos obrigatórios do passo atual
        const validateStep = () => {
          const currentStepId = stepPath[currentStepIndex];
          const currentStepElement = document.getElementById(currentStepId);
          if (!currentStepElement) {
            console.error(
              `Passo atual com ID "${currentStepId}" não encontrado.`,
            );
            return false;
          }
          const requiredFields = currentStepElement.querySelectorAll(
            'input[required], select[required], textarea[required]',
          );

          for (let field of requiredFields) {
            if (field.type === 'radio') {
              const radios = currentStepElement.querySelectorAll(
                `input[name="${field.name}"][required]`,
              );
              if (![...radios].some((r) => r.checked)) {
                alert('Selecione uma opção para continuar.');
                console.log(`Validação falhou para rádio: ${field.name}`);
                return false;
              }
            } else if (field.type === 'checkbox') {
              const checkboxes = currentStepElement.querySelectorAll(
                `input[name="${field.name}"][required]`,
              );
              if (![...checkboxes].some((cb) => cb.checked)) {
                alert('Selecione pelo menos uma opção para continuar.');
                console.log(`Validação falhou para checkbox: ${field.name}`);
                return false;
              }
            } else if (!field.value.trim()) {
              alert('Preencha todos os campos obrigatórios.');
              console.log(
                `Validação falhou para campo vazio: ${field.id || field.name}`,
              );
              return false;
            }
          }
          console.log('Validação bem-sucedida para o passo:', currentStepId);
          return true;
        };

        // --- EVENT LISTENERS ---

        // Botão "Começar" na tela de boas-vindas
        if (startBtn && welcome && formContainer) {
          startBtn.addEventListener('click', () => {
            const acceptTerms = document.getElementById('accept-terms');
            if (acceptTerms && !acceptTerms.checked) {
              alert(
                'Por favor, aceite os Termos de Serviço e a Política de Privacidade antes de continuar.',
              );
              return;
            }
            welcome.classList.add('hidden');
            formContainer.classList.remove('hidden');
            // Ao iniciar o formulário, GARANTIMOS que estamos no primeiro passo do caminho padrão
            currentStepIndex = 0;
            stepPath = ['step-1', 'step-inicio', 'step-2']; // Garante o path inicial
            updateUI(); // Exibe o primeiro passo
            console.log(
              'Formulário iniciado. Passo atual:',
              stepPath[currentStepIndex],
            );
          });
        } else {
          console.error('Elementos da tela de boas-vindas não encontrados.');
        }

        // Botão "Próximo"
        nextBtn.addEventListener('click', () => {
          console.log(
            'Clique em Próximo. currentStepIndex ANTES:',
            currentStepIndex,
          );
          console.log('stepPath ANTES:', stepPath);

          if (!validateStep()) {
            console.log('Validação falhou, não avança.');
            return;
          }

          const currentStepId = stepPath[currentStepIndex];

          // LÓGICA CRÍTICA: Se estamos no 'step-2' (seleção da categoria), reconstruímos o stepPath E AVANÇAMOS
          if (currentStepId === 'step-2') {
            const selectedService = form.querySelector(
              'input[name="service"]:checked',
            )?.value;
            console.log('*** NOVO stepPath APÓS SELEÇÃO DE SERVIÇO:', stepPath);
            console.log(
              '*** currentStepIndex APÓS AVANÇAR NO DYN_PATH:',
              currentStepIndex,
            );

            if (!selectedService) {
              // Validação extra para garantir que algo foi selecionado
              alert(
                'Por favor, selecione uma categoria de serviço para continuar.',
              );
              return;
            }

            let newStepPath = ['step-1', 'step-inicio', 'step-2']; // Base do caminho

            // Adiciona os passos específicos da categoria selecionada ao caminho
            if (selectedService === 'site') {
              newStepPath.push('step-site', 'step-social2', 'copy-write');
            } else if (selectedService === 'social') {
              newStepPath.push('step-social', 'step-social2', 'copy-write');
            } else if (selectedService === 'stationery') {
              newStepPath.push('step-stationery', 'step-social2', 'copy-write');
            } else if (selectedService === 'logo') {
              newStepPath.push('step-logo', 'copy-write'); // Logo não tem 'step-social2'
            }

            stepPath = newStepPath; // Atualiza o stepPath GLOBAL aqui
            console.log(
              '*** ATUALIZAÇÃO CRÍTICA DO stepPath PARA FLUXO ESPECÍFICO (APÓS SELEÇÃO NO STEP-2) ***',
            );
            console.log('stepPath AGORA É:', stepPath);

            // AGORA QUE O stepPath ESTÁ COMPLETO, PODEMOS AVANÇAR O ÍNDICE E CHAMAR updateUI
            currentStepIndex++;
            console.log(
              'currentStepIndex DEPOIS DE AVANÇAR NO FLUXO ESPECÍFICO:',
              currentStepIndex,
            );
            updateUI(); // Chama updateUI para renderizar o NOVO passo com o stepPath correto
            return; // Retorna para evitar que o código continue e chame updateUI novamente
          }

          if (currentStepIndex < stepPath.length - 1) {
            currentStepIndex++;
            console.log(
              'currentStepIndex APÓS AVANÇAR NO GENERIC_PATH:',
              currentStepIndex,
            );
            updateUI(); // Chama updateUI normalmente para atualizar o progresso e a UI
          } else {
            // Lógica para o último passo (provavelmente onde o botão vira "Gerar Orçamento" ou similar)
            console.log(
              'Último passo atingido. Próximo clique deve ser para submeter.',
            );
          }
        });

        // Botão "Anterior"
        prevBtn.addEventListener('click', () => {
          console.log(
            'Clique em Anterior. currentStepIndex ANTES:',
            currentStepIndex,
          );
          console.log('stepPath ANTES:', stepPath);

          if (currentStepIndex > 0) {
            currentStepIndex--;
            // Se ao voltar, chegarmos no 'step-2', resetamos o stepPath para o estado inicial
            // Isso é crucial para que, ao avançar novamente do step-2, o caminho seja recalculado.
            if (stepPath[currentStepIndex] === 'step-2') {
              stepPath = ['step-1', 'step-inicio', 'step-2'];
              console.log('Retornou ao step-2, stepPath resetado:', stepPath);
            }
            console.log('currentStepIndex DEPOIS:', currentStepIndex);
            updateUI();
          }
        });

        // Adiciona classe 'active' para visualização da seleção de rádio/checkbox
        document
          .querySelectorAll(
            'input[name="inicioDigital"], input[name="service"]',
          )
          .forEach((input) => {
            input.addEventListener('change', () => {
              const inputName = input.name;
              document
                .querySelectorAll(`input[name="${inputName}"]`)
                .forEach((i) => {
                  if (i.parentElement) {
                    i.parentElement.classList.remove('active');
                  }
                });
              if (input.checked && input.parentElement) {
                input.parentElement.classList.add('active');
              }
            });
          });

        // --- SUBMISSÃO DO FORMULÁRIO (Botão "Gerar Orçamento") ---
        form.addEventListener('submit', (e) => {
          e.preventDefault(); // impede o envio imediato
          console.log('Formulário submetido.');

          // Última validação, embora o botão só apareça se o passo atual já foi validado
          if (!validateStep()) {
            console.error('Submissão bloqueada: validação final falhou.');
            return;
          }

          const formData = new FormData(form);
          const data = {};

          formData.forEach((value, key) => {
            if (key.endsWith('[]')) {
              const cleanKey = key.slice(0, -2);
              if (!data[cleanKey]) {
                data[cleanKey] = [];
              }
              data[cleanKey].push(value);
            } else {
              data[key] = value;
            }
          });

          // --- Processamento de Variáveis para o Objeto 'orcamento' ---
          const categoriaRaw = data.service;
          const categoriaTraduzida =
            categoriasTexto[categoriaRaw] || categoriaRaw || '-';

          let solucaoIdealObj = { titulo: '', explicacao: '' };

          if (categoriaRaw === 'site') {
            const siteObjectivesRaw = data.site_pages || [];
            const objectivesToProcess = Array.isArray(siteObjectivesRaw)
              ? siteObjectivesRaw
              : [siteObjectivesRaw];

            if (objectivesToProcess.length > 0) {
              const selectedSiteObjectives = objectivesToProcess.map(
                (value) => sitePagesMap[value],
              );

              if (selectedSiteObjectives.includes(sitePagesMap[8])) {
                solucaoIdealObj = siteSolutionsMap[sitePagesMap[8]];
              } else if (selectedSiteObjectives.length === 1) {
                solucaoIdealObj = siteSolutionsMap[selectedSiteObjectives[0]];
              } else {
                let titulosCombinados = [];
                let explicacoesCombinadas = [];
                selectedSiteObjectives.forEach((objective) => {
                  const solution = siteSolutionsMap[objective];
                  if (solution) {
                    titulosCombinados.push(solution.titulo);
                    explicacoesCombinadas.push(solution.explicacao);
                  }
                });
                solucaoIdealObj.titulo =
                  'Soluções Combinadas: ' + titulosCombinados.join(', ');
                solucaoIdealObj.explicacao = explicacoesCombinadas.join('\n\n');
              }
            }
          } else if (categoriaRaw === 'social') {
            const socialOptionsRaw = data.social_options || [];
            const optionsToProcess = Array.isArray(socialOptionsRaw)
              ? socialOptionsRaw
              : [socialOptionsRaw];

            if (optionsToProcess.length > 0) {
              const selectedSocialOptions = optionsToProcess.map(
                (value) => redesSociaisMap[value],
              );
              if (selectedSocialOptions.includes(redesSociaisMap[8])) {
                solucaoIdealObj = socialSolutionsMap[redesSociaisMap[8]];
              } else if (selectedSocialOptions.length === 1) {
                solucaoIdealObj = socialSolutionsMap[selectedSocialOptions[0]];
              } else {
                let titulosCombinados = [];
                let explicacoesCombinadas = [];
                selectedSocialOptions.forEach((option) => {
                  const solution = socialSolutionsMap[option];
                  if (solution) {
                    titulosCombinados.push(solution.titulo);
                    explicacoesCombinadas.push(solution.explicacao);
                  }
                });
                solucaoIdealObj.titulo =
                  'Soluções de Redes Sociais Combinadas: ' +
                  titulosCombinados.join(', ');
                solucaoIdealObj.explicacao = explicacoesCombinadas.join('\n\n');
              }
            }
          } else if (categoriaRaw === 'stationery') {
            const stationeryOptionRaw = data.stationery_options;
            if (stationeryOptionRaw) {
              const selectedStationeryOption =
                stationeryMap[stationeryOptionRaw];
              if (
                selectedStationeryOption &&
                stationerySolutionsMap[selectedStationeryOption]
              ) {
                solucaoIdealObj =
                  stationerySolutionsMap[selectedStationeryOption];
              }
            }
          } else if (categoriaRaw === 'logo') {
            const logoPackageRaw = data.logo_package;
            if (logoPackageRaw) {
              const selectedLogoOption = logoMap[logoPackageRaw];
              if (selectedLogoOption && logoSolutionsMap[selectedLogoOption]) {
                solucaoIdealObj = logoSolutionsMap[selectedLogoOption];
              }
            }
          }

          const orcamento = {
            contato: {
              nome: data.name || '',
              email: data.email || '',
              whatsapp: data.whatsapp || '',
              negocio: data.negocio || '',
              tempoNegocio: data.tempoNegocio || '',
            },
            servico: {
              categoria: categoriaTraduzida,
              categoriaRaw: categoriaRaw,

              objetivoSiteRaw: data.site_pages || [],
              objetivoSiteTraduzido:
                categoriaRaw === 'site'
                  ? traduzirOpcoesParaArmazenar('site', data.site_pages)
                  : [],
              solucaoIdealSite:
                categoriaRaw === 'site' ? solucaoIdealObj : null,

              logoInsp: data.logo_package || '',
              logoInspTraduzido:
                categoriaRaw === 'logo'
                  ? traduzirOpcoesParaArmazenar('logo', data.logo_package)[0]
                  : '',
              solucaoIdealLogo:
                categoriaRaw === 'logo' ? solucaoIdealObj : null,

              socialNecessidadeRaw: data.social_options || [],
              socialNecessidadeTraduzida:
                categoriaRaw === 'social'
                  ? traduzirOpcoesParaArmazenar('social', data.social_options)
                  : [],
              socialIdentidade:
                data.has_identity === 'yes'
                  ? 'Sim, já possuo Identidade Visual'
                  : data.has_identity === 'no'
                  ? 'Não, precisarei de ajuda para criar uma Identidade Visual'
                  : 'Não informado',
              solucaoIdealSocial:
                categoriaRaw === 'social' ? solucaoIdealObj : null,

              papelariaRaw: data.stationery_options || '',
              papelariaTraduzida:
                categoriaRaw === 'stationery'
                  ? traduzirOpcoesParaArmazenar(
                      'stationery',
                      data.stationery_options,
                    )[0]
                  : '',
              solucaoIdealStationery:
                categoriaRaw === 'stationery' ? solucaoIdealObj : null,

              copywrite:
                data.has_identity_copywrite === 'yes'
                  ? 'Sim, já possuo Copywrite'
                  : data.has_identity_copywrite === 'no'
                  ? 'Não, precisarei de ajuda para criar toda escrita e conteúdo.'
                  : 'Não informado',
              inicioDigital: data.inicioDigital || 'nao_informado',
            },
          };

          // Exibe o loader com o GIF
          document.getElementById('loader').classList.remove('hidden');
          setTimeout(() => {
            window.location.href = 'modelo-pdf.html'; // ou a página final
          }, 1500);

          localStorage.setItem('orcamento', JSON.stringify(orcamento));

          fetch('http://localhost:3001/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orcamento,
              data_envio: new Date().toISOString(),
            }),
          })
            .then(() => {
              window.location.href = 'modelo-pdf.html';
            })
            .catch((err) => {
              console.error('Erro ao enviar lead:', err);
              window.location.href = 'modelo-pdf.html'; // redireciona mesmo assim
            });
        });
      });
    
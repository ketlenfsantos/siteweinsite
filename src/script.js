// Este script deve ser carregado DEPOIS dos elementos HTML que ele manipula,
// ou use 'defer' no <script> para garantir que o DOM esteja pronto.

// Função global do acordeão
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("i");

  const isOpen = content.classList.contains("open");

  if (isOpen) {
    content.style.maxHeight = content.scrollHeight + "px";
    requestAnimationFrame(() => {
      content.style.maxHeight = "0px";
      content.classList.remove("open", "opacity-100");
      content.classList.add("opacity-0");
    });
  } else {
    content.classList.add("open", "opacity-100");
    content.classList.remove("opacity-0");
    content.style.maxHeight = content.scrollHeight + "px";
  }

  if (icon) {
    icon.classList.toggle("rotate-180");
  }
}

document.addEventListener("DOMContentLoaded", () => {
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

  // Texto rotativo
  const textos = [
    "Aumente a visibilidade do seu negócio com a internet: Criamos produtos personalizados e com estratégia para você",
    "Transforme a experiência do usuário em vendas: Mostre todos benefícios do seu produto ou serviço",
    "Crie conexão e conquiste seus clientes",
  ];
  let index = 0;
  const carousel = document.getElementById('text-carousel');
  function mostrarTexto() {
    if (carousel) {
      carousel.style.opacity = 0;
      setTimeout(() => {
        carousel.textContent = textos[index];
        carousel.style.opacity = 1;
        index = (index + 1) % textos.length;
      }, 500);
    }
  }
  mostrarTexto();
  setInterval(mostrarTexto, 2000);

  // Sliders Splide
  if (document.querySelector('.slider-principal')) {
    new Splide('.slider-principal', {
      type: 'loop',
      perPage: 2,
      focus: 'center',
      gap: '1rem',
      direction: 'rtl',
      autoplay: true,
      interval: 2000,
      pauseOnHover: true,
      arrows: false,
      pagination: true,
      lazyLoad: 'nearby',
      keyboard: 'global',
      speed: 600,
      rewind: true,
      drag: 'free',
      breakpoints: {
        640: { perPage: 1 },
        768: { perPage: 2 },
        1024: { perPage: 4 },
      },
    }).mount();
  }

  if (document.querySelector('.slider-secundario')) {
    new Splide('.slider-secundario', {
      type: 'loop',
      perPage: 1,
      gap: '1rem',
      direction: 'ltr',
      interval: 1500,
      autoplay: true,
      arrows: false,
      pagination: false,
      keyboard: true,
      rewind: true,
      breakpoints: {
        640: { perPage: 1 },
        768: { perPage: 1 },
        1024: { perPage: 2 },
      },
    }).mount();
  }

  
 const toggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
  mobileMenu.classList.remove("hidden", "max-h-0");
  mobileMenu.classList.add("max-h-[500px]", "p-6");
}

function closeMenu() {
  mobileMenu.classList.add("max-h-0");
  mobileMenu.classList.remove("max-h-[900px]", "p-6");
  // espera a transição terminar
}

if (toggle && mobileMenu) {
  let isOpen = false;

  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // impede que o clique propague para o document
    isOpen = !isOpen;

    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && !toggle.contains(event.target)) {
      if (isOpen) {
        closeMenu();
        isOpen = false;
      }
    }
  });

  // Fecha ao rolar a página
  window.addEventListener("scroll", () => {
    if (isOpen) {
      closeMenu();
      isOpen = false;
    }
  });

  // Fecha ao clicar em link (exceto o que tem ID   )
  const menuLinks = mobileMenu.querySelectorAll("li a");
  menuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      if (event.target.id !== "menuMobs") {
        closeMenu();
        isOpen = false;
      }
    });
  });
} 
  
const item1 = document.getElementById("teste");
const hover1 = document.getElementById("hoverDiv");



if (item1 && hover1) {
  item1.addEventListener("mouseenter", () => {
    const rect = item1.getBoundingClientRect();
    hover1.style.top = `${rect.bottom + window.scrollY}px`;
    hover1.style.left = `${rect.left + window.scrollX}px`;
    hover1.classList.remove("hidden");
  });
  item1.addEventListener("mouseleave", () => {
    hover1.classList.add("hidden");
  });
  hover1.addEventListener("mouseleave", () => {
    hover1.classList.add("hidden");
  });
}

const item2 = document.getElementById("teste2");
const hover2 = document.getElementById("hoverDiv2");

let timeout;

// Exibir a div
item2.addEventListener("mouseenter", () => {
  clearTimeout(timeout);
  hover2.classList.remove("hidden");

  const rect = item2.getBoundingClientRect();
  hover2.style.top = `${rect.bottom + window.scrollY + 10}px`;
  hover2.style.left = `${rect.left + window.scrollX}px`;
});

// Esconder com atraso (caso mouse vá para hoverDiv2)
item2.addEventListener("mouseleave", () => {
  timeout = setTimeout(() => {
    hover2.classList.add("hidden");
  }, 200);
});

// Se entrar na div, cancela esconder
hover2.addEventListener("mouseenter", () => {
  clearTimeout(timeout);
});

// Se sair da div, esconde
hover2.addEventListener("mouseleave", () => {
  hover2.classList.add("hidden");
});
const menuTeste = document.getElementById("menuMobs");
const hoverDiv = document.getElementById("hoverDiv4");

let isVisible = false;

if (menuTeste && hoverDiv) {
  menuTeste.addEventListener("click", () => {
    isVisible = !isVisible;
    hoverDiv.classList.toggle("hidden", !isVisible);

    const rect = menuTeste.getBoundingClientRect();
    hoverDiv.style.top = `${rect.bottom + window.scrollY + 10}px`; // posicionado abaixo
    hoverDiv.style.left = `${rect.left + window.scrollX}px`; // ou centralize se quiser
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!hoverDiv.contains(e.target) && !menuTeste.contains(e.target)) {
      hoverDiv.classList.add("hidden");
      isVisible = false;
    }
  });
}







});



// Este script deve ser carregado DEPOIS dos elementos HTML que ele manipula,
// ou use 'defer' no <script> para garantir que o DOM esteja pronto.

// Função global do acordeão
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("i");

  const isOpen = content.classList.contains("open");

  if (isOpen) {
    content.style.maxHeight = content.scrollHeight + "px";
    requestAnimationFrame(() => {
      content.style.maxHeight = "0px";
      content.classList.remove("open", "opacity-100");
      content.classList.add("opacity-0");
    });
  } else {
    content.classList.add("open", "opacity-100");
    content.classList.remove("opacity-0");
    content.style.maxHeight = content.scrollHeight + "px";
  }

  if (icon) {
    icon.classList.toggle("rotate-180");
  }
}

document.addEventListener("DOMContentLoaded", () => {
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

  // Texto rotativo
  const textos = [
    "Aumente a visibilidade do seu negócio com a internet: Criamos produtos personalizados e com estratégia para você",
    "Transforme a experiência do usuário em vendas: Mostre todos benefícios do seu produto ou serviço",
    "Crie conexão e conquiste seus clientes",
  ];
  let index = 0;
  const carousel = document.getElementById('text-carousel');
  function mostrarTexto() {
    if (carousel) {
      carousel.style.opacity = 0;
      setTimeout(() => {
        carousel.textContent = textos[index];
        carousel.style.opacity = 1;
        index = (index + 1) % textos.length;
      }, 500);
    }
  }
  mostrarTexto();
  setInterval(mostrarTexto, 2000);

  // Sliders Splide
  if (document.querySelector('.slider-principal')) {
    new Splide('.slider-principal', {
      type: 'loop',
      perPage: 2,
      focus: 'center',
      gap: '1rem',
      direction: 'rtl',
      autoplay: true,
      interval: 2000,
      pauseOnHover: true,
      arrows: false,
      pagination: false,
      lazyLoad: 'nearby',
      keyboard: 'global',
      speed: 600,
      rewind: true,
      drag: 'free',
      breakpoints: {
        640: { perPage: 1 },
        768: { perPage: 2 },
        1024: { perPage: 4 },
      },
    }).mount();
  }

  if (document.querySelector('.slider-secundario')) {
    new Splide('.slider-secundario', {
      type: 'loop',
      perPage: 1,
      gap: '1rem',
      direction: 'ltr',
      interval: 1500,
      autoplay: true,
      arrows: false,
      pagination: false,
      keyboard: true,
      rewind: true,
      breakpoints: {
        640: { perPage: 1 },
        768: { perPage: 1 },
        1024: { perPage: 2 },
      },
    }).mount();
  }

  // ✅ Menu mobile toggle
const toggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (toggle && mobileMenu) {
  toggle.addEventListener("click", () => {
    
    const isOpen = !mobileMenu.classList.contains("max-h-0");

    if (isOpen) {
      // fechar menu
        mobileMenu.classList.remove("max-h-[500px]", "p-6");
      mobileMenu.classList.add("max-h-0");
    } else {
      // abrir menu
       mobileMenu.classList.remove("max-h-0");
      mobileMenu.classList.add("max-h-[500px]", "p-6");
    }
  });

  // Fecha o menu ao rolar a tela
  window.addEventListener("scroll", () => {
     mobileMenu.classList.remove("max-h-[500px]", "p-6");
    mobileMenu.classList.add("max-h-0");
  });

  // Fecha o menu ao clicar fora dele e fora do botão toggle
  document.addEventListener("click", (event) => {
  if (!mobileMenu.contains(event.target) && !toggle.contains(event.target)) {
      mobileMenu.classList.remove("max-h-[500px]", "p-6");
      mobileMenu.classList.add("max-h-0");
    }
  });

  // Opcional: fecha o menu ao clicar em algum link dentro dele
  const menuLinks = mobileMenu.querySelectorAll("li, a");
menuLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    // Não fecha se for "Faça o teste"
if (event.target.id === "menuMobs") return;
      mobileMenu.classList.remove("max-h-[500px]", "p-6");
      mobileMenu.classList.add("max-h-0");
    });
  });
  }

  
  
const item1 = document.getElementById("teste");
const hover1 = document.getElementById("hoverDiv");



if (item1 && hover1) {
  item1.addEventListener("mouseenter", () => {
    const rect = item1.getBoundingClientRect();
    hover1.style.top = `${rect.bottom + window.scrollY}px`;
    hover1.style.left = `${rect.left + window.scrollX}px`;
    hover1.classList.remove("hidden");
  });
  item1.addEventListener("mouseleave", () => {
    hover1.classList.add("hidden");
  });
  hover1.addEventListener("mouseleave", () => {
    hover1.classList.add("hidden");
  });
}

const item2 = document.getElementById("teste2");
const hover2 = document.getElementById("hoverDiv2");



if (item2 && hover2) {
  item2.addEventListener("mouseenter", () => {
    const rect = item2.getBoundingClientRect();
    hover2.style.top = `${rect.bottom + window.scrollY}px`;
    hover2.style.left = `${rect.left + window.scrollX}px`;
    hover2.classList.remove("hidden");
  });
  item2.addEventListener("mouseleave", () => {
    hover2.classList.add("hidden");
  });
  hover2.addEventListener("mouseleave", () => {
    hover2.classList.add("hidden");
  });

}

const menuTeste = document.getElementById("menuMobs");
const hoverDiv = document.getElementById("hoverDiv4");

let isVisible = false;

if (menuTeste && hoverDiv) {
  menuTeste.addEventListener("click", () => {
    isVisible = !isVisible;
    hoverDiv.classList.toggle("hidden", !isVisible);

    const rect = menuTeste.getBoundingClientRect();
    hoverDiv.style.top = `${rect.bottom + window.scrollY + 10}px`; // posicionado abaixo
    hoverDiv.style.left = `${rect.left + window.scrollX}px`; // ou centralize se quiser
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!hoverDiv.contains(e.target) && !menuTeste.contains(e.target)) {
      hoverDiv.classList.add("hidden");
      isVisible = false;
    }
  });
}







});

function openModal(id) {
        const modal = document.getElementById(id);
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.classList.add('overflow-hidden');
      }

      function closeModal(id) {
        const modal = document.getElementById(id);
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          const modaisAbertos = document.querySelectorAll('.fixed.flex');
          modaisAbertos.forEach((modal) => {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
          });
          document.body.classList.remove('overflow-hidden');
        }
      });

      // Lógica para o filtro de categorias
      document.addEventListener('DOMContentLoaded', () => {
        const filterButtons = document.querySelectorAll('.filter-button');
        const projectSections = document.querySelectorAll('.project-section');

        // Função para mostrar a seção selecionada e esconder as outras
        function showCategory(category) {
          projectSections.forEach((section) => {
            if (section.id === category) {
              section.classList.remove('hidden');
            } else {
              section.classList.add('hidden');
            }
          });
        }

        // Adiciona evento de clique a cada botão de filtro
        filterButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const categoryToShow = button.dataset.category;
            showCategory(categoryToShow);
          });
        });

        // Mostra a primeira categoria por padrão ao carregar a página
        if (projectSections.length > 0) {
          showCategory(projectSections[0].id);
        }
      });

      function toggleItem(button) {
        const content = button.nextElementSibling;
        const isOpen = !content.classList.contains('hidden');
        const icon = button.querySelector('span');

        // Fecha todos os outros
        document
          .querySelectorAll('ul li div')
          .forEach((div) => div.classList.add('hidden'));
        document
          .querySelectorAll('ul li button span')
          .forEach((span) => (span.textContent = '+'));

        if (!isOpen) {
          content.classList.remove('hidden');
          icon.textContent = '−';
        }
      }

      var swiper = new Swiper('.mySwiper', {
        slidesPerView: 2,
        spaceBetween: 40,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        
        },
        navigation: {
          nextEl: '#customNext',
          prevEl: '#customPrev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        },
      });
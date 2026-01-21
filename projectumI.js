// 1. Dados dos Projetos (Textos relacionados à Esfera Construção)
const dadosProjetos = [
    {
        titulo: "PROJETO 1",
        descricao:
            "A Esfera Construção consolidou neste projeto residencial de alto luxo toda a sua expertise em engenharia de precisão e acabamentos de altíssimo padrão. Localizada em uma área nobre, a obra foi executada com um cronograma rigoroso, priorizando a utilização de materiais sustentáveis e tecnologias de automação residencial de última geração. Nossa equipe de mestres de obras e engenheiros trabalhou em total sinergia para garantir que cada detalhe do design arquitetônico fosse materializado com perfeição técnica. Desde a fundação profunda, calculada para oferecer máxima estabilidade, até a escolha dos revestimentos térmicos, cada etapa reflete nosso compromisso com a durabilidade e o bem-estar dos moradores, elevando o conceito de morar bem a um novo patamar de excelência e sofisticação.",
    },
    {
        titulo: "PROJETO 2",
        descricao:
            "Este empreendimento corporativo representa um marco na arquitetura comercial moderna, onde a Esfera Construção aplicou soluções inovadoras de logística urbana e gestão de resíduos. O projeto exigiu uma estrutura metálica robusta aliada a grandes vãos de vidro temperado, permitindo uma iluminação natural abundante que reduz significativamente o consumo energético do edifício. Durante todo o processo construtivo, mantivemos um controle de qualidade rigoroso, assegurando que as normas de segurança do trabalho fossem superadas. O resultado final é um edifício icônico que não apenas embeleza a paisagem da cidade, mas também oferece um ambiente funcional, seguro e altamente produtivo para as empresas que nele operam, reafirmando nossa posição como líderes em construções de grande porte e infraestruturas complexas.",
    },
    {
        titulo: "PROJETO 3",
        descricao:
            "Na revitalização deste complexo industrial, a Esfera Construção demonstrou sua capacidade técnica em lidar com desafios de reforma e reforço estrutural em larga escala. O objetivo foi transformar um espaço fabril antigo em um centro logístico de alta performance, adaptando toda a malha elétrica e hidráulica para suportar maquinários modernos e pesados. Nossa intervenção técnica incluiu o tratamento especializado de pisos industriais de alta resistência e a instalação de sistemas avançados de prevenção contra incêndio. A entrega deste projeto dentro do prazo estabelecido permitiu que o cliente iniciasse suas operações sem interrupções, comprovando que a solidez e o planejamento estratégico da nossa empresa são diferenciais decisivos para o sucesso de investimentos industriais que demandam confiança e rigor técnico absoluto.",
    },
    {
        titulo: "PROJETO 4",
        descricao:
            "O Projeto 4 é um exemplo notável de como a Esfera Construção integra responsabilidade social e engenharia civil para criar espaços comunitários de impacto positivo. Este complexo educacional foi projetado para ser um ambiente seguro e acolhedor, utilizando técnicas de construção modular que aceleraram a entrega sem comprometer a integridade estrutural. Focamos na criação de áreas de convivência amplas, ventilação cruzada para conforto térmico natural e acessibilidade plena em todos os pavimentos. Cada detalhe, desde a pintura durável até as instalações sanitárias eficientes, foi pensado para resistir ao alto fluxo de usuários diários. Este projeto não é apenas uma construção de alvenaria e concreto; é um legado de qualidade e dedicação que servirá à comunidade por décadas, refletindo os valores éticos e o cuidado humano da Esfera Construção.",
    },
];

// 2. Captura o parâmetro da URL
const urlParams = new URLSearchParams(window.location.search);
const slideDaURL = urlParams.get("slide");

let slideIndex = slideDaURL ? parseInt(slideDaURL) : 0;
let autoSlideTimeout;

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    startAutoSlide();

    // Lógica de Scroll Suave original
    if (window.location.hash) {
        window.scrollTo(0, 0);
        setTimeout(() => {
            document.body.classList.add("loaded");
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 96;
                window.scrollTo({ top: targetPosition, behavior: "smooth" });
            }
        }, 50);
    } else {
        document.body.classList.add("loaded");
    }
});

// 3. Função para mostrar os slides e atualizar Título e Texto
function showSlides(n) {
    const wrapper = document.getElementById("wrapper");
    const slides = document.querySelectorAll(".slides-wrapper img");
    const tituloH1 = document.querySelector("#header h1");
    const paragrafoDesc = document.querySelector("#corpo p"); // Seleciona o parágrafo

    if (!wrapper || slides.length === 0) return;

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    // Move o carrossel
    const offset = -slideIndex * 100;
    wrapper.style.transform = `translateX(${offset}%)`;

    // Atualiza o Título e o Texto com base no array "dadosProjetos"
    if (dadosProjetos[slideIndex]) {
        if (tituloH1) tituloH1.innerText = dadosProjetos[slideIndex].titulo;
        if (paragrafoDesc)
            paragrafoDesc.innerText = dadosProjetos[slideIndex].descricao;
    }
}

function plusSlides(n) {
    clearTimeout(autoSlideTimeout);
    showSlides(slideIndex + n);
    startAutoSlide();
}

function startAutoSlide() {
    autoSlideTimeout = setTimeout(() => {
        showSlides(slideIndex + 1);
        startAutoSlide();
    }, 6000); // Aumentei para 5 segundos para dar tempo de ler o texto
}

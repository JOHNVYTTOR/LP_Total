import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import fundoHero from './assets/fundoHeader.jpg';
import logo from './assets/logo.png';
import logoPisoclean from './assets/logoPisoclean.png';
import heroImg from './assets/hero-img.jpg';

import imgMarmore from './assets/marmore.jpg';
import imgPiscina from './assets/piscina.jpg';
import imgPorcelanato from './assets/porcelanato.jpg';
import imgImpermeabilizacao from './assets/impermeabilizacao.jpg';
import imgRoberto from './assets/roberto.jpg';


function App() {
  const whatsappNumber = "5515997454234";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20restauração.`;

  const location = useLocation();

  const pageConfig = {
    '/': {
      title: "A melhor solução para o seu piso.",
      text: <>A TOTAL faz com que você <b>não precise trocar o seu piso</b>. Nós <b>recuperamos o brilho original</b> de mármores, granitos e pedras ornamentais com <b>profissionalismo e qualidade</b>.</>,
      heroImage: heroImg,
      heroBackground: fundoHero
    },
    '/porcelanatos': {
      title: "A melhor solução para o seu porcelanato.",
      text: <>Especialistas em <b>limpeza técnica e restauração de porcelanatos</b>. Removemos manchas, riscos superficiais e a película protetora pós-obra com tecnologia que não agride o piso.</>,
      heroImage: imgPorcelanato,
      heroBackground: fundoHero 
    },
    '/pedrasdepiscina': {
      title: "Sua Piscina Livre de Limo e Manchas.",
      text: <>Tratamento completo para <b>Pedra Mineira, Goiás e São Tomé</b>. Removemos o encardido profundo e aplicamos tratamento antiderrapante para segurança da sua família.</>,
      heroImage: imgPiscina,
      heroBackground: fundoHero 
    },
    '/pedrasornamentais': {
      title: "A melhor solução para Mármores e Granitos.",
      text: <>Polimento técnico (Levigamento) para <b>restauração total</b> de pedras ornamentais. Eliminamos riscos e fechamos os poros da pedra para um brilho espelhado duradouro.</>,
      heroImage: imgMarmore,
      heroBackground: fundoHero 
    }
  };

  const currentPath = location.pathname.endsWith('/') && location.pathname !== '/' 
    ? location.pathname.slice(0, -1) 
    : location.pathname;
    
  const content = pageConfig[currentPath.toLowerCase()] || pageConfig['/'];

  return (
    <div className="App">
      
      <header className="header-top">
        <div className="container nav-flex">
          <div className="logo-container">
            <img src={logo} alt="Total Restauração" className="logo-img" />
            <div className="logo-divider"></div>
            <span className="logo-sub">Restauração de Pisos e Pedras</span>
          </div>
          
          <nav className="nav-menu">
            {/* NOVO LOCAL DO SELO (PEQUENO) */}
            <div className="header-cert">
               <img src={logoPisoclean} alt="Selo PisoClean" />
               <span>Certificada</span>
            </div>

            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Empresa</a>
            
            <div className="header-phone">
              (15) 99745-4234
            </div>

            <a href={whatsappLink} className="btn-header-cta">
              Orçamento Rápido
            </a>
          </nav>
        </div>
      </header>

      <section 
        className="hero" 
        id="inicio" 
        style={{ backgroundImage: `url(${content.heroBackground})` }}
      >
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>{content.title}</h1>
            <p>{content.text}</p>
            
            <div className="cta-group">
              <a href={whatsappLink} className="btn-large pulse-btn">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Quero um Orçamento
              </a>
            </div>
          </div>

          <div className="hero-img">
            <img src={content.heroImage} alt="Restauração de Pisos" className="main-img" />
            
            {/* O SELO ANTIGO FOI REMOVIDO DAQUI */}
          </div>
        </div>
      </section>

      {/* ... (Resto do código permanece igual) ... */}
      <section className="services-section" id="servicos">
        <div className="container">
          <div className="section-header">
            <h2>Nossas Soluções</h2>
            <p>Tratamento técnico para cada tipo de superfície</p>
          </div>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{paddingBottom: '50px'}}
          >
            <SwiperSlide>
              <div className="service-card">
                <img src={imgMarmore} alt="Mármore" />
                <div className="card-content">
                  <h3>Mármore e Granito</h3>
                  <p>Polimento técnico (levigamento) para remover riscos e devolver o brilho espelhado natural.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service-card">
                <img src={imgPiscina} alt="Piscina" />
                <div className="card-content">
                  <h3>Pedras de Piscina</h3>
                  <p>Limpeza profunda de Pedra Mineira e Goiás. Removemos o limo e aplicamos antiderrapante.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service-card">
                <img src={imgPorcelanato} alt="Porcelanato" />
                <div className="card-content">
                  <h3>Porcelanatos</h3>
                  <p>Seu porcelanato está fosco ou manchado? Realizamos a limpeza técnica pós-obra.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service-card">
                <img src={imgImpermeabilizacao} alt="Impermeabilização" />
                <div className="card-content">
                  <h3>Impermeabilização</h3>
                  <p>Proteja seu piso contra manchas de vinho, óleo e café com nossa blindagem química.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div className="container about-grid">
          <div className="about-text">
            <h2>15 Anos de Excelência</h2>
            <p>Localizada em Sorocaba-SP, a <strong>Total Restauração</strong> se consolidou como referência técnica no tratamento de pisos e pedras ornamentais. Diferente de empresas de limpeza comum, nós entendemos a mineralogia da pedra e os riscos que "produtos caseiros" causam ao seu piso.</p>
            <p>Somos uma empresa certificada pela <strong>PISOCLEAN & PEK</strong>, garantindo que os produtos utilizados não agredirão o seu patrimônio.</p>
            <p>Já restauramos <strong>mais de 10.000m²</strong> de pisos que estavam condenados à troca, gerando economia e valorização para o imóvel.</p>
          </div>
          
          <div className="about-card-photo">
            <img src={imgRoberto} alt="Roberto R. Silva" className="roberto-img" />
            <h3>Roberto R. Silva</h3>
            <span>Técnico Responsável</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-col">
              <h4>CONTATO</h4>
              <p>Tem alguma dúvida?</p>
              <strong>(15) 99745-4234</strong>
              <p>totalrestauracao@gmail.com</p>
            </div>
            
            <div className="footer-col">
              <h4>ENDEREÇO</h4>
              <p>Atendemos em Domicílio</p>
              <p>Sorocaba e Região</p>
              <p>São Paulo Capital e Região</p>
            </div>

            <div className="footer-col">
              <h4>REDES SOCIAIS</h4>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                <a href="https://www.instagram.com/totalrestauracao/" target="_blank" rel="noopener noreferrer" style={{color:'white', textDecoration:'none', display:'flex', alignItems:'center', gap:'8px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                  Instagram
                </a>
                <a href="https://www.facebook.com/totalrestauracao" target="_blank" rel="noopener noreferrer" style={{color:'white', textDecoration:'none', display:'flex', alignItems:'center', gap:'8px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div style={{textAlign:'center', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'20px'}}>
             <p>© 2026 Total Restauração. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.601 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
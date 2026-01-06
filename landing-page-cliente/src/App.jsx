import { useEffect } from 'react'
import './App.css'

// Importando Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import fundoHero from './assets/fundoHeader.jpg';
import logo from './assets/logo.png';
import logoPisoclean from './assets/logoPisoclean.png';
import heroImg from './assets/hero-img.jpg';

function App() {
  const whatsappNumber = "5515997454234";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20restauração.`;

  return (
    <div className="App">
      
      {/* --- HEADER --- */}
      <header className="header-top">
        <div className="container nav-flex">
          {/* Logo e Texto Lado a Lado */}
          <div className="logo-container">
            <img src={logo} alt="Total Restauração" className="logo-img" />
            <div className="logo-divider"></div>
            <span className="logo-sub">Restauração de Pisos e Pedras</span>
          </div>
          
          <nav className="nav-menu">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Empresa</a>
            
            {/* Telefone Adicionado */}
            <div className="header-phone">
              <span style={{marginRight:'5px'}}></span> 
              (15) 99745-4234
            </div>

            <a href={whatsappLink} className="btn-header-cta">
              Orçamento Rápido
            </a>
          </nav>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section 
        className="hero" 
        id="inicio" 
        style={{ backgroundImage: `url(${fundoHero})` }}
      >
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>A melhor solução para o seu piso.</h1>
            <p>A TOTAL faz com que você <b>não precise trocar o seu piso</b>. Nós <b>recuperamos o brilho original</b> de mármores, granitos e pedras naturais com <b>profissionalismo e qualidade</b>.</p>
            
            <div className="cta-group">
              <a href={whatsappLink} className="btn-large">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Quero um Orçamento
              </a>
            </div>
            {/* O trust-badge foi removido daqui */}
          </div>

          <div className="hero-img">
            <img src={heroImg} alt="Sala com Piso de Mármore Restaurado" className="main-img" />
            
            {/* O trust-badge foi movido para cá */}
            <div className="trust-badge">
              {/* O texto foi substituído pela imagem */}
              <img src={logoPisoclean} alt="Logo PisoClean" className="badge-logo" />
              <span className="badge-text">Empresa certificada PISOCLEAN</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CARROSSEL DE SERVIÇOS --- */}
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
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" alt="Mármore" />
                <div className="card-content">
                  <h3>Mármore e Granito</h3>
                  <p>Polimento técnico (levigamento) para remover riscos e devolver o brilho espelhado natural.</p>
                  <a href={whatsappLink} className="card-link">Solicitar Avaliação &rarr;</a>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1574621100236-d25a64a43474?q=80&w=800" alt="Piscina" />
                <div className="card-content">
                  <h3>Pedras de Piscina</h3>
                  <p>Limpeza profunda de Pedra Mineira e Goiás. Removemos o limo e aplicamos antiderrapante.</p>
                  <a href={whatsappLink} className="card-link">Ver Antes e Depois &rarr;</a>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="service-card">
                <img src="https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=800" alt="Porcelanato" />
                <div className="card-content">
                  <h3>Porcelanatos</h3>
                  <p>Seu porcelanato está fosco ou manchado? Realizamos a limpeza técnica pós-obra.</p>
                  <a href={whatsappLink} className="card-link">Falar com Técnico &rarr;</a>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800" alt="Impermeabilização" />
                <div className="card-content">
                  <h3>Impermeabilização</h3>
                  <p>Proteja seu piso contra manchas de vinho, óleo e café com nossa blindagem química.</p>
                  <a href={whatsappLink} className="card-link">Saber mais &rarr;</a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* --- QUEM SOMOS --- */}
      <section className="about-section" id="sobre">
        <div className="container about-grid">
          <div className="about-text">
            <h2>15 Anos de Excelência</h2>
            <p>Localizada em Sorocaba-SP, a <strong>Total Restauração</strong> se consolidou como referência técnica no tratamento de pedras naturais. Diferente de empresas de limpeza comum, nós entendemos a mineralogia da pedra.</p>
            <p>Somos a única empresa da região certificada pela <strong>PISOCLEAN & PEK</strong>, garantindo que os produtos utilizados não agredirão o seu patrimônio.</p>
            <p>Já restauramos mais de 10.000m² de pisos que estavam condenados à troca, gerando economia e valorização para o imóvel.</p>
          </div>
          
          <div className="about-card-photo">
            {/* Foto Ilustrativa - Troque pela foto real do Roberto depois */}
            <img src="https://img.freepik.com/free-photo/handsome-worker-suit-helmet_144627-26058.jpg" alt="Roberto R. Silva" className="roberto-img" />
            <h3>Roberto R. Silva</h3>
            <span>Técnico Responsável</span>
            <div style={{color: '#f1c40f', marginTop:'5px'}}>★★★★★</div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
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
              <p>Sorocaba e Região (Votorantim, Itu, Salto)</p>
              <p>São Paulo Capital (Grandes metragens)</p>
            </div>

            <div className="footer-col">
              <h4>HORÁRIO</h4>
              <p>Segunda a Sexta: 08h às 18h</p>
              <p>Sábado: 08h às 12h</p>
            </div>
          </div>

          <div style={{textAlign:'center', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'20px'}}>
             <p>© 2026 Total Restauração. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante (Logo Oficial) */}
      <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noreferrer">
        {/* SVG Oficial do WhatsApp (Bootstrap Icons) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.601 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
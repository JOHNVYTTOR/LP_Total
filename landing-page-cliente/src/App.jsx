import { useEffect } from 'react'
import './App.css'

// Importando Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const whatsappNumber = "5515997454234";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20restauração.`;

  return (
    <div className="App">
      
      {/* --- HEADER --- */}
      <header className="header-top">
        <div className="container nav-flex">
          <div className="logo-container">
            <span className="logo-text">Total</span>
            <span className="logo-sub">Restauração de Pisos</span>
          </div>
          
          <nav className="nav-menu">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Empresa</a>
            {/* Botão de Destaque no Menu */}
            <a href={whatsappLink} className="btn-header-cta">
              Orçamento Rápido
            </a>
          </nav>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="hero-tag">✨ Especialistas em Alto Padrão</span>
            <h1>Seu piso de Mármore novo de novo.</h1>
            <p>Não troque seu piso. Nós recuperamos o brilho original de mármores, granitos e pedras naturais com tecnologia italiana sem poeira.</p>
            
            <div className="cta-group">
              <a href={whatsappLink} className="btn-large">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Quero um Orçamento
              </a>
            </div>

            <div className="trust-badge">
              <div className="badge-icon">PisoClean</div>
              <span className="badge-text">Única certificada em Sorocaba</span>
            </div>
          </div>

          <div className="hero-img">
            {/* Imagem de alta qualidade de um ambiente luxuoso restaurado */}
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" alt="Sala com Piso de Mármore Restaurado" />
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

      {/* Botão Flutuante (Pulsante) */}
      <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.574 2.146.89 3.32.89 2.66 0 4.814-1.722 5.567-4.225.267-.9.378-1.84.228-2.766-.46-2.614-2.812-4.577-5.553-4.836-.263-.024-.518-.013-.756-.013zm0-2c3.048 0 5.897 1.185 8.049 3.338 2.152 2.153 3.337 5.002 3.337 8.05 0 2.271-.659 4.385-1.815 6.19l1.417 5.176-5.297-1.39c-1.745 1.026-3.791 1.624-5.969 1.624-6.273 0-11.378-5.105-11.378-11.378 0-3.049 1.185-5.898 3.337-8.051 2.153-2.152 5.002-3.337 8.05-3.337z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
import { Container, Row, Col } from 'react-bootstrap';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const AboutScreen = () => {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <FaBirthdayCake className="about-hero-icon" />
          <h1 className="about-hero-title">Naša priča</h1>
          <p className="about-hero-subtitle">
            Pravimo slatke trenutke od 2016. godine
          </p>
        </div>
      </section>

      <Container className="about-section">

        {/* Prica */}
        <Row className="about-story-row align-items-center g-5 mb-5">
          <Col md={6}>
            <div className="about-story-img-wrapper">
              <img
                src="https://thumbs.dreamstime.com/b/indulge-visual-feast-pastry-shop-s-showcase-adorned-array-exquisite-cakes-each-cake-masterpiece-310957318.jpg"
                alt="Poslasticarnica Sweet Shop"
                className="about-story-img"
              />
            </div>
          </Col>
          <Col md={6}>
            <span className="badge-category mb-3 d-inline-block">O nama</span>
            <h2 className="about-story-title">Sweet Shop — Novi Sad</h2>
            <p className="about-story-text">
              Sweet Shop je porodična poslastičarnica smeštena u srcu Novog Sada,
              osnovana 2016. godine sa jednom jedinom misijom — da svaki zalogaj
              bude poseban.
            </p>
            <p className="about-story-text">
              Sve počelo u maloj kuhinji, gde je naša osnivačica Nina počela da
              priprema torte za prijatelje i porodicu. Ono što je počelo kao
              ljubav prema kuvanju, brzo je preraslo u nešto mnogo veće. Danas,
              deset godina kasnije, Sweet Shop je omiljeno mesto Novosađana
              koji znaju da cene pravi ukus.
            </p>
            <p className="about-story-text">
              Koristimo isključivo domaće, sveže sastojke — od mlevenih oraha
              sa Fruške gore do jagoda sa vojvođanskih njiva. Svaka torta se
              pravi po porudžbini, sa puno pažnje i još više ljubavi.
            </p>
          </Col>
        </Row>

        {/* Vrednosti */}
        <div className="about-values-wrapper mb-5">
          <h2 className="section-title text-center mb-4" style={{ textAlign: 'center' }}>
            Zašto Sweet Shop?
          </h2>
          <Row className="g-4">
            {[
              {
                icon: '🍰',
                title: 'Uvek sveže',
                text: 'Nijedan proizvod ne stoji danima — pečemo sveže, svakog dana za tebe.',
              },
              {
                icon: '🌾',
                title: 'Domaći sastojci',
                text: 'Sarađujemo sa lokalnim dobavljačima iz Vojvodine.',
              },
              {
                icon: '💜',
                title: 'Sa ljubavlju',
                text: 'Svaki detalj, svaki ukras, svaki krem - ručni rad.',
              },
              {
                icon: '🚚',
                title: 'Dostava po Novom Sadu',
                text: 'Dostavljamo na adresu — vaša torta stiže savršena.',
              },
            ].map((val, i) => (
              <Col xs={6} md={3} key={i}>
                <div className="about-value-card">
                  <span className="about-value-icon">{val.icon}</span>
                  <h5 className="about-value-title">{val.title}</h5>
                  <p className="about-value-text">{val.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Kontakt */}
        <div className="about-contact-wrapper">
          <h2 className="section-title mb-4">Posetite nas</h2>
          <Row className="g-4">
            <Col md={6}>
              <div className="about-contact-card">
                <div className="about-contact-item">
                  <FaMapMarkerAlt className="about-contact-icon" />
                  <div>
                    <strong>Adresa</strong>
                    <p>Zmaj Jovina 12, Novi Sad</p>
                  </div>
                </div>
                <div className="about-contact-item">
                  <FaClock className="about-contact-icon" />
                  <div>
                    <strong>Radno vreme</strong>
                    <p>Pon – Pet: 08:00 – 20:00</p>
                    <p>Sub – Ned: 09:00 – 18:00</p>
                  </div>
                </div>
                <div className="about-contact-item">
                  <FaPhone className="about-contact-icon" />
                  <div>
                    <strong>Telefon</strong>
                    <p>+381 21 123 456</p>
                  </div>
                </div>
                <div className="about-contact-item">
                  <FaEnvelope className="about-contact-icon" />
                  <div>
                    <strong>Email</strong>
                    <p>sweet.shop@gmail.com</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="about-map-wrapper">
                <iframe
                  title="Sweet Shop lokacija"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.5!2d19.8444!3d45.2671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1000000000%3A0x0!2sZmaj+Jovina%2C+Novi+Sad!5e0!3m2!1ssr!2srs!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: '14px' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        </div>

      </Container>
    </div>
  );
};

export default AboutScreen;
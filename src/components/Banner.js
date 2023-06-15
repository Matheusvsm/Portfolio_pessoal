import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Dev FullStack", "Dev Mobile", "Dev Front-end" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bem vindo(a) ao meu Portfólio</span>
                <h1>{`Matheus V. Moura`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Dev FullStack", "Dev Mobile" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Eu sou o Matheus, um desenvolvedor full-stack apaixonado por criar soluções inovadoras. Com experiência em diversas tecnologias, estou preparado para enfrentar qualquer desafio.

Tenho conhecimento avançado em React.js (incluindo React Native), Python (Flask e Pandas) e .NET (ASP.NET Core). Além disso, possuo experiência com bancos de dados como PostgreSQL, MongoDB e MySQL, bem como com Docker e serviços em nuvem como Azure e Google Cloud.

Meu objetivo é desenvolver soluções de alta qualidade, escaláveis e eficientes. Convido você a explorar meu portfólio para conhecer meu trabalho e os projetos em que estive envolvido.

Estou sempre em busca de novas oportunidades para aplicar meu conhecimento e contribuir para projetos inovadores. Se você estiver interessado em colaborar comigo, entre em contato!</p>
                  <button onClick={() => console.log('connect')}>Contate-me <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
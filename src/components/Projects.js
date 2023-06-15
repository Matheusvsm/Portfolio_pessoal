import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "CyberCamp-Fitbank",
            description: "Desenvolvimento Mobile",
            imgUrl: projImg1,
        },
        {
            title: "Soft-it",
            description: "Desenvolvimento Frontend",
            imgUrl: projImg2,
        },
        {
            title: "Soft-it",
            description: "Desenvolvimento Backend",
            imgUrl: projImg3,
        },
        {
            title: "Moditech",
            description: "Desenvolvimento Frontend",
            imgUrl: projImg1,
        },
        {
            title: "CyberCamp-Fitbank",
            description: "Desenvolvimento Backend",
            imgUrl: projImg2,
        },
        {
            title: "Moditech",
            description: "Desenvolvimento Mobile",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projetos</h2>
                                    <p >Desde 2021, participei de projetos de desenvolvimento de sites, APIs, aplicativos bancários móveis, 
                                       sistemas web de pagamento e integrações com APIs de pagamento. Estou em constante aprendizado e ansioso 
                                       por novos desafios.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Empresas</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Case 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Case 2</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Projeto de desenvolvimento de App Mobile, integrado ao Chat-Gpt, utilizei React Native para a 
                                                   interface do usuario e Python(flask) no Backend. Nesse projeto utilizei uma conversão de audio 
                                                   para receber e enviar respostas por audio, utilizei o reconhecimento de voz da Openai para o reconhecimento.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>CyberCamp-Fitbank, foi um projeto de 8 meses, na qual tinha como objetivo o desenvolvimento de um produto bancario 
                                                    e um aplicativo mobile para esse produto.Eu e meu squad desenvolvemos o App mobile utilizando React Native na interface 
                                                    e .Net no backend, também utilizamos PostgresSQL na qual modelamos atravás de migrations e realizamos testes com Nunit e 
                                                    documentamos com Swagger.No final recebemos uma premiação de 5° melhor produto.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
//import projImg1 from "../assets/img/project-img1.png";
//import projImg2 from "../assets/img/project-img2.png";
//import projImg3 from "../assets/img/project-img3.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const handleClick = event => {
    console.log('Anchor element clicked');
    console.log(event.currentTarget);
  }

  const projects = [
    {
      
      
      title: "Restuarant Startup",
      description: "Landing Page Design",
      imgUrl: projImg2,
      
      
      

    },
    {
      title: "Business Startup",
      description: "Design & Development",
      //imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      //imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      //imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      //imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      //imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The projects which i have developed and worked upon in a individual and group basis.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content  id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <a
                        onClick={handleClick} 
                        href="https://sensational-pudding-c8c38d.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                        color="white"
                        >Demo</a>
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
                      <p>In development works.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>In development works.</p>
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

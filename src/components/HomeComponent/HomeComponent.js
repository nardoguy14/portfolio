import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import "./Home.css"
function HomeComponent() {

    return (
        <Container style={{  paddingTop: "15px", paddingBottom: "15px"}}>
            <Row >
                <Col style={{textAlign: "left"}} xs={12} md={6}>
                    Hey there!
                    <br/> <br/>
                    My name's Nardo. I've been a fullstack engineer the last 10 years. I've primarily focused a lot of
                    my effort in back end engineering. I have experience building out applications from all sides. From
                    setting up repos, creating CICD pipelines, implementing backend services both RESTful and
                    event-driven, creating front ends, and using cloud resources with AWS to deploy all these services
                    out, I've definitely done my fair share of touching all parts of the stack. I've worked in
                    healthcare for these last 10 years and would love to continue to do so. I believe in making a strong
                    impact in peoples lives and know that healthcare is an area we can make great improvements for
                    patients to live healthier lives.

                    <br/> <br/>

                    Feel free to look at tsome of the projects I've worked on lately.
                    <br/> <br/>
                    Thanks for dropping by!
                    <br/> <br/>
                    Nardo
                </Col>
                <Col style={{ overflow: "hidden" }} xs={12} md={6}>
                    <img src="/71569802_1041643106185599_2979183550032621069_n.jpg" alt="" height="400" title="Image Title" />
                </Col>
            </Row>
        </Container>
    )
}

export default HomeComponent;
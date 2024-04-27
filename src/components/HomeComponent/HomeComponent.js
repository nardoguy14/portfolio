import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import "./Home.css"
function HomeComponent() {

    return (
        <Container style={{ height: "100vh", paddingTop: "15px"}}>
            <Row>
                <Col style={{textAlign: "left"}}>
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
                <Col>
                        <iframe style={{width:"100%", height:"100%"}} title="Littlest Tokyo Sunset - 3D Editor Challenge" frameBorder="0" allowFullScreen
                                mozallowfullscreen="true" webkitallowfullscreen="true"
                                allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                                execution-while-out-of-viewport execution-while-not-rendered web-share
                                src="https://sketchfab.com/models/6fb1409c2459463ea8a5781dbf31a0a2/embed?autospin=1&autostart=1&transparent=1&ui_infos=0&ui_watermark_link=0&ui_watermark=0"></iframe>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeComponent;
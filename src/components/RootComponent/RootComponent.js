import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {createBrowserRouter, Link, Outlet, RouterProvider} from "react-router-dom";
import ThebeComponent from "../ThebeComponent/ThebeComponent";
import React from "react";
import HomeComponent from "../HomeComponent/HomeComponent";
import FooterComponent from "../FooterComponent/FooterComponent"


function RootComponent() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <div>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand>Bernardo Arevalo</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link>
                                        <Link to={"home"}>
                                            Home
                                        </Link>
                                    </Nav.Link>

                                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                                        <NavDropdown.Item>
                                            <Link to={"simple_network"}>Simple NN</Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item>
                                            <Link to={"creating_embeddings"}>Creating OpenAI Embeddings</Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item>
                                            <Link to={"using_embeddings"}>Using OpenAI Embeddings</Link>
                                        </NavDropdown.Item>



                                    </NavDropdown>


                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Outlet/>
                    <FooterComponent />
                </div>
            ),
            children: [
                {
                    path: "simple_network",
                    element: <ThebeComponent  key={"simpleNetwork"} thebeUrl='https://raw.githubusercontent.com/nardoguy14/jupyter_notebooks/main/notebooks/iris_notebook.ipynb'/>
                },
                {
                    path: "creating_embeddings",
                    element: <ThebeComponent key={"createEmbeddings"} thebeUrl="https://raw.githubusercontent.com/nardoguy14/jupyter_notebooks/main/notebooks/openai_embeddings/create_insurance_embeddings_notebook.ipynb" />
                },
                {
                    path: "using_embeddings",
                    element: <ThebeComponent  key={"usingEmbeddings"} thebeUrl="https://raw.githubusercontent.com/nardoguy14/jupyter_notebooks/main/notebooks/openai_embeddings/insurance_notebook_openai.ipynb" />
                },
                {
                    path: "home",
                    element: <HomeComponent/>
                }
            ]
        }

    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default RootComponent;
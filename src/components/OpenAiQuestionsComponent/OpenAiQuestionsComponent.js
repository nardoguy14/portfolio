import React, {useEffect, useState} from "react";

import {getEmbeddingTypes, postOpenAIQuestion} from "../../util/open_ai_service_requestor";
import {Button, Form} from "react-bootstrap";
import { Dropdown } from 'react-bootstrap';


function OpenAiQuestionsComponent() {
    const [data, setData] = useState({"embedding_types":[]})
    const [selectedItem, setSelectedItem] = useState("Choose Embedding");
    const [text, setText] = useState("");
    const [questionResponse, setQuestionResponse] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    };

    useEffect( () => {
        const fetchStatus = async () => {
            const response = await getEmbeddingTypes()
            setData(response.data)
        }
        fetchStatus()
    }, [])

    const handleSelect = (eventKey) => {
        setSelectedItem(eventKey);
    };

    const askQuestion = async (e) => {
        const response = await postOpenAIQuestion(text, selectedItem,
            "Answer the following question given the following info: \n", '\n')
        setQuestionResponse(JSON.stringify(response.data))
    }

    return (
        <div style={{paddingLeft: "120px", paddingRight: "120px"}}>
            <h1>Embeddings Saved</h1>

            <h3>Embeddings Type</h3>
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {selectedItem}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        data["embedding_types"].map((typ, index) => {
                            return (
                                <Dropdown.Item eventKey={typ}>{typ}</Dropdown.Item>
                            )
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>

            <h3>Question</h3>
            <div>
                <Form>
                    <Form.Group controlId="exampleTextarea">
                        <Form.Control
                            as="textarea"
                            rows={5}
                            value={text}
                            onChange={handleChange}
                            placeholder="Type something here..."
                        />
                    </Form.Group>
                </Form>
                <p><Button  onClick={ async (e) => {await askQuestion(e)}}>Ask the Question </Button></p>
            </div>
            {questionResponse}
        </div>
    )

}

export default OpenAiQuestionsComponent;
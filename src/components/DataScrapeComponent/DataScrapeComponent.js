import {Button, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {useState} from "react";

import {sendDataScrapeRequest, getDataScrapeByEmbeddingsType} from "../../util/open_ai_service_requestor"
import {delay} from "../../util/helpers";

function DataScrapeComponent({setDataScrapeId, setEmbeddingsType}) {

    const [formValues, setFormValues] = useState({
        url: '',
        embeddings_type: '',
        max_depth: 1
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    async function handleDataScrapeSubmit(e) {
        e.preventDefault()
        setEmbeddingsType(formValues['embeddings_type'])
        await sendDataScrapeRequest(formValues)
        await delay(3000)
        const response2 = await getDataScrapeByEmbeddingsType(formValues['embeddings_type'])
        console.log(response2)
        setDataScrapeId(response2.data[0]['__values__'].id)
    }



    return (
    <Container>
        <h2>Data Scrape & Generate Embeddings</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Data Scrape Url</Form.Label>
                <Form.Control onChange={handleInputChange} name={"url"} value={formValues['url']} type="input" placeholder="http://example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Embeddings Type</Form.Label>
                <Form.Control onChange={handleInputChange} name={"embeddings_type"} value={formValues['embeddings_type']} type="input" placeholder="example_embeddings_type" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Depth of Levels</Form.Label>
                <Form.Control onChange={handleInputChange} name={"max_depth"} type="input" value={formValues['max_depth']} />
            </Form.Group>


            <Button variant="primary" type="submit" onClick={ async (e) => await handleDataScrapeSubmit(e)}>
                Submit
            </Button>
        </Form>
    </Container>)
}

export default DataScrapeComponent
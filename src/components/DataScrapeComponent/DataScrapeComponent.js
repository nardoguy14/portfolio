import {Button, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import axios from "axios";
import {useState} from "react";


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

    const handleDataScrapeSubmit = (e) => {
        e.preventDefault()
        var data = {
            url: formValues['url'],
            embeddings_type: formValues['embeddings_type'],
            max_depth: formValues['max_depth']
        }
        setEmbeddingsType(formValues['embeddings_type'])
        console.log(data)
        axios.post("http://localhost:8009/job/data_scrape", data).then(response =>{
            console.log(response)
            setTimeout(()=> {
                axios.get("http://localhost:8009/job/data_scrape?embeddings_type="+data.embeddings_type).then(response2 => {
                    console.log(response2)
                    setDataScrapeId(response2.data[0]['__values__'].id)
                })
            }, 3000);
        })

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


            <Button variant="primary" type="submit" onClick={e => handleDataScrapeSubmit(e)}>
                Submit
            </Button>
        </Form>
    </Container>)
}

export default DataScrapeComponent
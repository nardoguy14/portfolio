import axios from "axios";
import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";

function DataScrapeEmbeddingCostComponent({embeddings_type}) {
    const [data, setData] = useState(null)

    axios.get("http://localhost:8009/data_scrape/token-count?embeddings_type="+embeddings_type).then(response2 => {
        console.log("it happened here")
        console.log(response2)
        setData(response2.data)
    })

    const handleCreateEmbeddings = (e) => {
        e.preventDefault()

        alert('call it')
    }


    return (
        <Container>
            {data &&
                <div>
                    <h2>Cost to Embed (cents)</h2>
                    <div>{data.cost_to_generate_embeddings}</div>

                    <h2>Token Count</h2>
                    <div>{data.token_count}</div>

                    <Button variant="primary" type="submit" onClick={e => handleCreateEmbeddings(e)}>
                        Submit
                    </Button>
                </div>
            }
        </Container>
    )
}

export default DataScrapeEmbeddingCostComponent;
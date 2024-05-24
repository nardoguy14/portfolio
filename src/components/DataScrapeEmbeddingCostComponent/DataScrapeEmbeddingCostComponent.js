import axios from "axios";
import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";

function DataScrapeEmbeddingCostComponent({embeddings_type}) {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8009/data_scrape/token-count?embeddings_type="+embeddings_type).then(response2 => {
            console.log("it happened here")
            console.log(response2)
            setData(response2.data)
        })
    }, [])



    const handleCreateEmbeddings = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8009/openapi/embeddings/"+embeddings_type).then(response =>{
            console.log(response)

        })
    }


    return (
        <Container>
            {data &&
                <div>
                    <h2>Embeddings</h2>

                    <h3>Embeddings Cost (cents)</h3>
                    <div>{data.cost_to_generate_embeddings}</div>

                    <h3>Token Count</h3>
                    <div>{data.token_count}</div>

                    <Button variant="primary" type="submit" onClick={e => handleCreateEmbeddings(e)}>
                        Create Embeddings
                    </Button>
                </div>
            }
        </Container>
    )
}

export default DataScrapeEmbeddingCostComponent;
import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import {createEmbeddings, getTokenCount} from "../../util/open_ai_service_requestor";

function DataScrapeEmbeddingCostComponent({embeddings_type}) {
    const [data, setData] = useState(null)

    useEffect( () => {
        const fetchStatus = async () => {
            const response = await getTokenCount(embeddings_type)
            setData(response.data)
        }
        fetchStatus()
    }, [])



    const handleCreateEmbeddings = async (e) => {
        e.preventDefault()
        await createEmbeddings(embeddings_type)
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

                    <Button variant="primary" type="submit" onClick={async (e) => await handleCreateEmbeddings(e)}>
                        Create Embeddings
                    </Button>
                </div>
            }
        </Container>
    )
}

export default DataScrapeEmbeddingCostComponent;
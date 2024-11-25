import React, {useEffect, useState} from "react";

import {getEmbeddingTypes} from "../../util/open_ai_service_requestor";
import {Button} from "react-bootstrap";

function OpenAiEmbeddingsComponent() {
    const [data, setData] = useState({"embedding_types":[]})

    useEffect( () => {
        const fetchStatus = async () => {
            const response = await getEmbeddingTypes()
            setData(response.data)
        }
        fetchStatus()
    }, [])

    return (
        <div style={{paddingLeft:"120px", paddingRight:"120px"}}>
            <h1>Embeddings Saved</h1>
            {
                data["embedding_types"].map((typ, index) => {
                        return (
                            <div data-executable="true" data-language="python" style={{marginTop:"20px"}}>
                                <Button variant="primary"  value={typ}> {typ} </Button>
                            </div>
                        )

                })
            }
        </div>
    )

}

export default OpenAiEmbeddingsComponent;
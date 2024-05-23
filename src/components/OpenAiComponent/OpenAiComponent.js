import React, {useState} from "react";
import DataScrapeComponent from "../DataScrapeComponent/DataScrapeComponent";
import DataScrapeStatusComponent from "../DataScrapeStatusComponent/DataScrapeStatusComponent";
import DataScrapeEmbeddingCostComponent from "../DataScrapeEmbeddingCostComponent/DataScrapeEmbeddingCostComponent"

function OpenAiComponent() {
    const [dataScrapeId, setDataScrapeId] = useState(null);
    const [stateTimeoutId, setTimeoutId] = useState(null);
    const [dataScrapeFinished, setDataScrapeFinished] = useState(false)
    const [embeddingsType, setEmbeddingsType] = useState(null)

    return (
        <div>
            <DataScrapeComponent setDataScrapeId={setDataScrapeId} setEmbeddingsType={setEmbeddingsType}/>
            {dataScrapeId && <DataScrapeStatusComponent dataScrapeId={dataScrapeId} stateTimeoutId={stateTimeoutId}
            setTimeoutId={setTimeoutId} setDataScrapeFinished={setDataScrapeFinished}/>}
            {dataScrapeFinished && <DataScrapeEmbeddingCostComponent embeddings_type={embeddingsType} />}
        </div>
    )

}

export default OpenAiComponent;
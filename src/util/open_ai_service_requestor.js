import axios from "axios";


async function sendDataScrapeRequest(formValues) {
    var data = {
        url: formValues['url'],
        embeddings_type: formValues['embeddings_type'],
        max_depth: formValues['max_depth']
    }

    const response = await axios.post("http://localhost:8009/job/data_scrape", data)

    console.log(response)
    return response
}

async function getDataScrapeByEmbeddingsType(embeddings_type) {
    const response = await axios.get("http://localhost:8009/job/data_scrape?embeddings_type="+data.embeddings_type)
    console.log(response)
    return response
}


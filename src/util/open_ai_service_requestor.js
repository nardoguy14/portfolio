import axios from "axios";


export async function sendDataScrapeRequest(formValues) {
    var data = {
        url: formValues['url'],
        embeddings_type: formValues['embeddings_type'],
        max_depth: formValues['max_depth']
    }
    const response = await axios.post("http://localhost:8009/job/data_scrape", data)
    console.log(response)
    return response
}

export async function getDataScrapeByEmbeddingsType(embeddings_type) {
    const response = await axios.get("http://localhost:8009/job/data_scrape?embeddings_type="+embeddings_type)
    console.log(response)
    return response
}

export async function getDataScrapeById(id) {
    const response2 = await axios.get(`http://localhost:8009/job/data_scrape/${id}`)
    console.log(response2)
    return response2
}

export async function getTokenCount(embeddings_type) {
    const response2 = await axios.get("http://localhost:8009/data_scrape/token-count?embeddings_type="+embeddings_type)
    console.log("it happened here")
    console.log(response2)
    return response2
}

export async function createEmbeddings(embeddings_type){
    const response = await axios.post("http://localhost:8009/openapi/embeddings/"+embeddings_type)
    console.log(response)
    return response
}

export async function getEmbeddingTypes(){
    const response = await axios.get("http://localhost:8009/embedding_types")
    console.log(response)
    return response
}

export async function postOpenAIQuestion(query, embeddings_type, intro, seperator){
    var data = {
        query: query,
        embeddings_type: embeddings_type,
        intro: intro,
        seperator: seperator
    }
    const response = await axios.post("http://localhost:8009/openapi/questions/response", data)
    console.log(response)
    return response
}


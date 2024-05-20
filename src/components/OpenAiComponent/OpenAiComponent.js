import React, {useState} from "react";
import DataScrapeComponent from "../DataScrapeComponent/DataScrapeComponent";
import axios from "axios";
import Container from "react-bootstrap/Container";

function OpenAiComponent() {
    let FINISHED_STATUS = "FINISHED SCRAPING"
    const [dataScrapeId, setDataScrapeId] = useState(null);
    const [job_status, setDataScrapeStatus] = useState({seen: 0, queue: 0, status: null})

    if(dataScrapeId != null){
        if(job_status.status !== FINISHED_STATUS) {
            const timeoutId = setTimeout(() => {
                axios.get(`http://localhost:8009/job/data_scrape/${dataScrapeId}`).then(response2 => {
                    console.log(response2)
                    const values = response2.data['__values__']
                    if (job_status.seen !== values.sites_seen || job_status.queue !== values.queue_size || values.status === FINISHED_STATUS) {
                        console.log("the current timeout id is " + timeoutId)
                        clearTimeout(timeoutId)
                        setDataScrapeStatus({seen: values.sites_seen, queue: values.queue_size, status: values.status})
                    }
                })
            }, 3000)
        }
    }

    return (
        <div>
        <DataScrapeComponent setDataScrapeId={setDataScrapeId} />
            {job_status.status &&
                <Container>
                    <h2>Data Scrape Job Status {job_status.status !== FINISHED_STATUS && <img src={"/loading-gif-png-5.gif"} height="30vh" alt=""/> } </h2>
                    <h3>Queue Size</h3>
                    <label>{job_status.queue}</label>
                    <h3>Seen Size</h3>
                    <label>{job_status.seen}</label> <br/>
                </Container>}
        </div>
    )

}

export default OpenAiComponent;
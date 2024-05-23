import Container from "react-bootstrap/Container";
import React, {useState} from "react";
import axios from "axios";


function DataScrapeStatusComponent({dataScrapeId, stateTimeoutId, setTimeoutId, setDataScrapeFinished}) {
    let FINISHED_STATUS = "FINISHED SCRAPING"
    const [job_status, setDataScrapeStatus] = useState({seen: 0, queue: 0, status: null})
    if(job_status.status === FINISHED_STATUS){
        setDataScrapeFinished(true)
    }
    if(job_status.status !== FINISHED_STATUS && stateTimeoutId === null) {
        const intervalId = setInterval(() => {
            axios.get(`http://localhost:8009/job/data_scrape/${dataScrapeId}`).then(response2 => {
                console.log(response2)
                const values = response2.data['__values__']

                if(values.status === FINISHED_STATUS){
                    clearInterval(intervalId)
                    setTimeoutId(null)
                }
                if (job_status.seen !== values.sites_seen || job_status.queue !== values.queue_size) {
                    console.log("the current timeout id is " + intervalId)
                    setDataScrapeStatus({seen: values.sites_seen, queue: values.queue_size, status: values.status})
                }
            })
        }, 1500)
        setTimeoutId(intervalId)
    }

    return (
        <Container>
            <h2>Data Scrape Job Status {job_status.status !== FINISHED_STATUS && <img src={"/loading-gif-png-5.gif"} height="30vh" alt=""/> } </h2>
            <h3>Queue Size</h3>
            <label>{job_status.queue}</label>
            <h3>Seen Size</h3>
            <label>{job_status.seen}</label> <br/>
        </Container>
    )
}

export default DataScrapeStatusComponent;
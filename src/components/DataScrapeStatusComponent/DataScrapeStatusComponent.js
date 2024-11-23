import Container from "react-bootstrap/Container";
import React, {useState, useEffect} from "react";
import {getDataScrapeById} from "../../util/open_ai_service_requestor";
import {delay} from "../../util/helpers";


function DataScrapeStatusComponent({dataScrapeId, setDataScrapeFinished}) {
    let FINISHED_STATUS = "FINISHED SCRAPING"
    const [job_status, setDataScrapeStatus] = useState({seen: 0, queue: 0, status: null})
    if(job_status.status === FINISHED_STATUS){
        setDataScrapeFinished(true)
    }

    useEffect(() => {
        const fetchStatus = async () => {
            if(job_status.status !== FINISHED_STATUS) {
                while(true){
                    delay(1500)
                    const response2 = await getDataScrapeById(dataScrapeId)
                    console.log(response2)
                    const values = response2.data['__values__']
                    if (job_status.seen !== values.sites_seen || job_status.queue !== values.queue_size) {
                        setDataScrapeStatus({seen: values.sites_seen, queue: values.queue_size, status: values.status})
                    }
                    if(values.status === FINISHED_STATUS){
                        break
                    }

                }
            }
        };

        fetchStatus();
    }, []);


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
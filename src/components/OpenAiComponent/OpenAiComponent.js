import {useState} from "react";
import DataScrapeComponent from "../DataScrapeComponent/DataScrapeComponent";
import axios from "axios";

function OpenAiComponent() {
    let FINISHED_STATUS = "FINISHED SCRAPING"
    const [dataScrapeId, setDataScrapeId] = useState(null);
    const [job_status, setDataScrapeStatus] = useState({seen: 0, queue: 0, status: null})

    if(dataScrapeId != null){
        if(job_status.status !== FINISHED_STATUS) {
            axios.get(`http://localhost:8009/job/data_scrape/${dataScrapeId}`).then(response2 => {
                console.log(response2)
                const values = response2.data['__values__']
                setDataScrapeStatus({seen: values.sites_seen, queue: values.queue_size, status: values.status})
            })
        }
    }

    return (
        <div>
        <DataScrapeComponent setDataScrapeId={setDataScrapeId} />
            {job_status.status && <div>
                Queue size: {job_status.queue} / Seen size: {job_status.seen}
            </div>}
        </div>
    )

}

export default OpenAiComponent;
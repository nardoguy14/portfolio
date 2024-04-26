
import React from 'react';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";


import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


import '../../css/dracula.css'
import '../../css/lesser-dark.css'
import './ThebeComponent.scss';
import Container from "react-bootstrap/Container";

function ThebeComponent({thebeUrl}) {
    const [data, setData] = useState({cells: []});      // To store fetched data


    if(data.cells.length === 0) {
        fetch(thebeUrl).then(resp => {
            let text = resp.text()
            return text
        }).then(text => {
            const jsonData = JSON.parse(text);
            setData(jsonData)
        })
    }
    else {
        const REACT_APP_JUPYTER_SERVER_HOST = process.env.REACT_APP_JUPYTER_SERVER_HOST;
        const REACT_APP_JUPYTER_SERVER_TOKEN = process.env.REACT_APP_JUPYTER_SERVER_TOKEN

        console.log("loadinggg")
        window.thebe.bootstrap({
            url: `http://${REACT_APP_JUPYTER_SERVER_HOST}:8888/?token=${REACT_APP_JUPYTER_SERVER_TOKEN}`,
            selector: '[data-executable]',
            requestKernel: true,
            predefinedOutput: true,
            codeMirrorConfig: {
                theme: "lesser-dark",
            },
            kernelOptions: {
                kernelName: "python",
            },

        })
        let restartElements  = document.getElementsByClassName('thebe-restart-button');
        let restartAllElements  = document.getElementsByClassName('thebe-restartall-button');
        for(var i = 0; i < restartElements.length; i++) {
            if(i > 0){
                restartElements[i].style.display = 'none';
                restartAllElements[i].style.display = 'none';

            }
        }
    }

    // const codeCells = data.cells.filter(cell => cell.cell_type === 'code');
    return (
        <Container>
            {data.cells.map((cell, index) => {
                if(cell.cell_type ==="code"){
                    return (
                    <div data-executable="true" data-language="python">
                        {cell.source.join('')}
                    </div>
                    )
                }
                else{
                    return (<div dangerouslySetInnerHTML={{__html: marked.parse(cell.source.join(''))}}></div>)
                }

            }
            )}
        </Container>
    );
}

export default ThebeComponent;
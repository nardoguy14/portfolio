
import React from 'react';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";


import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {getRandomNumber} from '../../util/numbers'

import '../../css/dracula.css'
import '../../css/lesser-dark.css'
import './ThebeComponent.scss';
import Container from "react-bootstrap/Container";

function ThebeComponent({thebeUrl}) {
    const [data, setData] = useState({cells: []});
    const [useContent, setUseContent] = useState(false);



    if(data.cells.length === 0) {
        fetch(thebeUrl).then(resp => {
            let text = resp.text()
            return text
        }).then(text => {
            const jsonData = JSON.parse(text);
            setData(jsonData)
        })
        alert("hi")
    }
    else {
        alert("yo")
        const REACT_APP_JUPYTER_SERVER_HOST = process.env.REACT_APP_JUPYTER_SERVER_HOST;
        const REACT_APP_JUPYTER_SERVER_TOKEN = process.env.REACT_APP_JUPYTER_SERVER_TOKEN
        alert(REACT_APP_JUPYTER_SERVER_HOST)
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

    let content = data.cells.map((cell, index) => {
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
    )

    const setIt = () => {
        setUseContent(true)
    }

    setTimeout(setIt, getRandomNumber(1000, 3000));

    return (
        <Container>
            {useContent && content}
            {!useContent && <div style={{height: "80vh", justifyContent: "center",
                alignItems: "center",
                display: "flex"
            }}>
                <img src={"/loading-gif-png-5.gif"} height="100vh" alt="" />
            </div>}
        </Container>
    )
}

export default ThebeComponent;
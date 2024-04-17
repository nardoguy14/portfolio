
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


import '../../css/dracula.css'
import '../../css/lesser-dark.css'
import './ThebeComponent.scss';
function ThebeComponent() {
    const [data, setData] = useState({cells: []});      // To store fetched data

    if(data.cells.length === 0) {
        fetch('https://raw.githubusercontent.com/nardoguy14/jupyter_notebooks/main/notebooks/iris_notebook.ipynb').then(resp => {
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
        window.thebe.bootstrap({
            url: `http://${REACT_APP_JUPYTER_SERVER_HOST}:8889?token=${REACT_APP_JUPYTER_SERVER_TOKEN}`,
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
        console.log('Waited for 2 seconds');

        let restartElements  = document.getElementsByClassName('thebe-restart-button');
        let restartAllElements  = document.getElementsByClassName('thebe-restartall-button');
        for(var i = 0; i < restartElements.length; i++) {
            if(i > 0){
                restartElements[i].style.display = 'none';
                restartAllElements[i].style.display = 'none';

            }
        }
    }

    const codeCells = data.cells.filter(cell => cell.cell_type === 'code');
    console.log(codeCells)
    return (
        <div>
            {codeCells.map((cell, index) => (
                <div data-executable="true" data-language="python">
                    {cell.source.join('')}
                </div>
            ))}
        </div>
    );
}

export default ThebeComponent;
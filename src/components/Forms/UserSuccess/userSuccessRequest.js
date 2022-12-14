import axios from 'axios'
import {saveAs} from 'file-saver'

const sendDataAndCreateFile = async (value) => {
    console.log(value);
    try {
        const res = await axios({
            method: 'POST',
            url: 'https://mk-resume-builder.herokuapp.com/api/v1/resume/create-pdf',
            data: {
                message: 'data containing the resume fields',
                data: value
            }
        });

        console.log(res);
        return res
    } catch (error) {
        console.log(error);
    }
}

const downloadCreatedFile = async (value) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'https://mk-resume-builder.herokuapp.com/api/v1/resume/download-pdf',
            responseType: 'blob',
            data: {
                message: 'require file that has been created',
                  data : value 
            }
        });
        console.log(res);

        const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
        saveAs(pdfBlob, 'newResume')

        return res;
    } catch (error) {

        console.log(error);
    }
}


export {
    sendDataAndCreateFile,
    downloadCreatedFile
}
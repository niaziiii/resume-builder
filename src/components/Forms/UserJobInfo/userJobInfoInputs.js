import * as yup from 'yup'

const inputs = {
    firstJob: "",
    firstJobAboutUs: "",
    secondJob: "",
    secondJobAboutUs: "",
}

const validationObject = {
    firstJob: yup.string()
        .required('must be required '),
    secondJob: yup.string()
        .required('must be required '),
    firstJobAboutUs: yup.string()
        .required('must be required '),
    secondJobAboutUs: yup.string()
        .required('must be required '),
}

// eslint-disable-next-line
export default {
    inputs,
    validationObject
}


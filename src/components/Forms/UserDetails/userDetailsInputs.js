
import * as yup from 'yup'

const inputs = {
    highScool: "",
    university: "",
    homeAddress: "",
    status: "",
    githubLink: "",
    sex: "",
    aboutYourself: "",

}

const validationObject = {
    highScool: yup.string()
        .required('must be required '),

    university: yup.string()
        .required('must be required '),

    homeAddress: yup.string()
        .required('must be required '),

    status: yup.string()
        .required('must be required '),
    githubLink: yup.string()
        .required('must be required '),
    sex: yup.string()
        .required('must be required '),
    aboutYourself: yup.string()
        .required('must be required '),
}

// eslint-disable-next-line
export default {
    inputs,
    validationObject
}


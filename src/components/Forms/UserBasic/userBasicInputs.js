import * as yup from 'yup'

const inputs = {
    firstName : "",
    lastName : "",
    fatherName:"",
    date : "",
    email: "",
    phoneNumber: "",
}

const validationObject = {
    firstName : yup.string()
    .max(15,'must be less than 15 character')
    .min(5,'must be grater than 3 character')
    .required('must be required'),

    lastName : yup.string()
    .max(15,'must be less than 15 character')
    .min(3,'must be grater than 3 character')
    .required('must be required'),

    fatherName : yup.string()
    .max(15,'must be less than 15 character')
    .min(3,'must be grater than 3 character')
    .required('must be required'),

    date : yup.string()
    .required('must be required date of birth'),

    email : yup.string()
    .required('email is required'),
    phoneNumber : yup.string()
    .max(15,'must be equal to 11 character')
    .required('must be required phone number'),

}
// eslint-disable-next-line
export default {
    inputs,
    validationObject
}

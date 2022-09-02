import React from 'react'

const FormssDev = (prop) => {
    const formIk = prop.prop;
  return (
    <form onSubmit={formIk.handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column'
    }}>
        <label htmlFor="firstName" style={styleLabel}>Your First Name kindly</label>
        <input
            placeholder='Enter your First name'
            id="firstName"
            name="firstName"
            type="text"
            onChange={formIk.handleChange}
            onBlur={formIk.handleBlur}
            value={formIk.values.firstName}
        />
        {formIk.touched.firstName && formIk.errors.firstName ? <div>{formIk.errors.firstName}</div> : null}

        <label htmlFor="lastName" style={styleLabel}>Your First Name kindly</label>
        <input
            placeholder='Enter your Last name'
            id="lastName"
            name="lastName"
            type="text"
            onChange={formIk.handleChange}
            onBlur={formIk.handleBlur}
            value={formIk.values.lastName}
        />
        {formIk.touched.lastName && formIk.errors.lastName ? <div>{formIk.errors.lastName}</div> : null}

        <label htmlFor="email" style={styleLabel}>Email Address</label>
        <input
            placeholder='Enter your email addres'
            id="emailAddress"
            name="email"
            type="email"
            onChange={formIk.handleChange}
            onBlur={formIk.handleBlur}
            value={formIk.values.email}
        />
        {formIk.touched.email && formIk.errors.email ? <div>{formIk.errors.email}</div> : null}

        <button type="submit" style={styleLabel}>Submit</button>
    </form>
  )
}

export default FormssDev


const styleLabel = {
    margin: '1rem 0'
}
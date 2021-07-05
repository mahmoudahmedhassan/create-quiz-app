import React from 'react'

function ErrorMessage() {
    const styles ={
        textAlign: 'center',
        background: 'red',
        color:' #fff',
        padding:' 6px',
        border: '1px solid red',
        borderRadius: '5px',
        marginBottom:'20px',
        fontSize: '1.2vw'

    }
    return (
        <div style={styles}>
            <p> Please Fill All The Feilds </p>
        </div>
    )
}

export default ErrorMessage

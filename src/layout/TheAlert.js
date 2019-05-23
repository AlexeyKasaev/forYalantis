import React from 'react';

import Alert from 'react-bootstrap/Alert';


function TheAlert(props) {
    const variants = [
        'primary', //0
        'secondary', //1
        'success', //2
        'danger', //3
        'warning', //4
        'info', //5
        'light', //6
        'dark', //7
      ]
    return (
        <Alert variant= {variants[props.variant]}>
            {props.text}
        </Alert>
    );
}

export default TheAlert;
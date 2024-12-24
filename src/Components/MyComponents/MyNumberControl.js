import{ __experimentalNumberControl as NumberControl } from '@wordpress/components';

import React from 'react';
import {useState} from "react"

const MyNumberControl = () => {
    const [ value, setValue ] = useState( 10 );
    // console.log(value);
    
    return (
        <NumberControl
            __next40pxDefaultSize
            isShiftStepEnabled={ true }
            onChange={ setValue }
            shiftStep={ 10 }
            value={ value }
        />
    );
};

export default MyNumberControl;
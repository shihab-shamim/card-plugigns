import React from 'react';
import { useState } from 'react';
import { __experimentalUnitControl as UnitControl } from '@wordpress/components';


const MyUnitControl = () => {
    const [ value, setValue ] = useState( '10em' );
    console.log(value);
    
    return (
        <UnitControl __next40pxDefaultSize onChange={ setValue } value={ value } />
        
    );
};

export default MyUnitControl;
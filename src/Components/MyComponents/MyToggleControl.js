import { useState } from 'react';
import { ToggleControl } from '@wordpress/components';

const MyToggleControl = () => {
    const [ hasFixedBackground, setHasFixedBackground ] = useState( false );

    return (
        <ToggleControl
            __nextHasNoMarginBottom
            label="Fixed Background"
            help={
                hasFixedBackground
                    ? 'Has fixed background.'
                    : 'No fixed background.'
            }
            checked={ hasFixedBackground }
            onChange={ (newValue) => {
                setHasFixedBackground( newValue );
            } }
        />
    );
};
export default MyToggleControl ; 
import { useState } from 'react';
import { SelectControl } from '@wordpress/components';

const MySelectControl = () => {
    const [ size, setSize ] = useState( '50%' );

    return (
        <SelectControl
            label="Size"
            value={ size }
            options={ [
                { label: 'Big', value: '100%' },
                { label: 'Medium', value: '50%' },
                { label: 'Small', value: '25%' },
            ] }
            onChange={ ( newSize ) => setSize( newSize ) }
            __nextHasNoMarginBottom
        />
    );
};

export default MySelectControl;
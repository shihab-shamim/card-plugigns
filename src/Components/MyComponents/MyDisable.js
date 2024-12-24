import React, { useState } from 'react'; // Correctly import React and useState
import { Button, Disabled, TextControl } from '@wordpress/components';

const MyDisable = () => {
    const [isDisabled, setIsDisabled] = useState(true);

    let input = (
        <TextControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            label="Input"
            onChange={() => {}}
        />
    );
    if (isDisabled) {
        input = <Disabled>{input}</Disabled>;
    }

    const toggleDisabled = () => {
        setIsDisabled((state) => !state);
    };

    return (
        <div>
            {input}
            <Button variant="primary" onClick={toggleDisabled}>
               { isDisabled?'Toggle Disabled':'Toggle Not Disabled'}
            </Button>
        </div>
    );
};

export default MyDisable;

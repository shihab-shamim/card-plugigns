import { RadioControl } from '@wordpress/components';
import { useState } from 'react';

/**
 * MyRadioControl Component
 * Allows the user to select between different user types (Author, Editor) using radio buttons.
 */
const MyRadioControl = () => {
    // State to keep track of the selected option, defaulting to 'a' (Author)
    const [option, setOption] = useState('a');

    return (
        <RadioControl
            label="User type" // Label for the control
            help="The type of the current user" // Help text providing more context about the control
            selected={option} // The selected value, which is controlled by the state
            options={[ // List of radio options with labels and values
                { label: 'Author', value: 'a' },
                { label: 'Editor', value: 'e' },
            ]}
            onChange={(value) => setOption(value)} // Update the selected option when a user selects a different radio button
        />
    );
};

export default MyRadioControl;

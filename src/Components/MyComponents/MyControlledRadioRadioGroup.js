import { useState } from 'react';
import {
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
} from '@wordpress/components';

/**
 * MyControlledRadioRadioGroup Component
 * A controlled radio group component where the user can select a width percentage (25%, 50%, 75%, 100%).
 */
const MyControlledRadioRadioGroup = () => {
    // State to store the selected value, defaulting to '25'
    const [checked, setChecked] = useState('25');

    return (
        <RadioGroup
            label="Width" // Label for the radio group
            onChange={(value) => setChecked(value)} // Update the checked value when an option is selected
            checked={checked} // Bind the selected value to state
        >
            {/* Radio options for width selection */}
            <Radio value="25">25%</Radio>
            <Radio value="50">50%</Radio>
            <Radio value="75">75%</Radio>
            <Radio value="100">100%</Radio>
        </RadioGroup>
    );
};

export default MyControlledRadioRadioGroup;

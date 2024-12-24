import { useState } from 'react';
import { RangeControl } from '@wordpress/components';

/**
 * MyRangeControl Component
 * A component that uses the RangeControl to select the number of columns between 2 and 10.
 */
const MyRangeControl = () => {
    // State to store the selected number of columns, defaulting to 2
    const [columns, setColumns] = useState(2);

    return (
        <RangeControl
            label="Columns" // Label for the range control
            value={columns} // Value bound to the columns state
            onChange={(value) => setColumns(value)} // Update state when value changes
            min={2} // Minimum value for columns
            max={10} // Maximum value for columns
        />
    );
};

export default MyRangeControl;

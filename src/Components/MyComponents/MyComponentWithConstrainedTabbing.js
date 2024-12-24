import { useState } from 'react';
import {
    withConstrainedTabbing,
    TextControl,
    Button,
} from '@wordpress/components';

// Wrap the form with `withConstrainedTabbing` to constrain tabbing when enabled.
const ConstrainedTabbing = withConstrainedTabbing(
    ({ children }) => children
);

const MyComponentWithConstrainedTabbing = () => {
    const [isConstrainedTabbing, setIsConstrainedTabbing] = useState(false);

    let form = (
        <form>
            <TextControl
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                label="Input 1"
                onChange={(e) => console.log(e)}
            />
            <TextControl
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                label="Input 2"
                onChange={(e) => console.log(e)}
            />
        </form>
    );

    // Wrap form with ConstrainedTabbing if the state is true
    if (isConstrainedTabbing) {
        form = <ConstrainedTabbing>{form}</ConstrainedTabbing>;
    }

    const toggleConstrain = () => {
        setIsConstrainedTabbing((state) => !state); // Toggle the state
    };

    return (
        <div>
            {form}
            <Button variant="secondary" onClick={toggleConstrain}>
                {isConstrainedTabbing ? 'Disable' : 'Enable'} constrain tabbing
            </Button>
        </div>
    );
};

export default MyComponentWithConstrainedTabbing;

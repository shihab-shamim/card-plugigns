import { useState } from 'react';
import { ScrollLock, Button } from '@wordpress/components';

/**
 * MyScrollLock Component
 * A component that allows toggling scroll lock on and off.
 */
const MyScrollLock = () => {
    const [ isScrollLocked, setIsScrollLocked ] = useState( false );

    // Toggle the scroll lock state
    const toggleLock = () => {
        setIsScrollLocked( (locked) => !locked );
    };

    return (
        <div>
            <Button variant="secondary" onClick={toggleLock}>
                Toggle scroll lock
            </Button>
            {/* Only show ScrollLock component when scroll is locked */}
            {isScrollLocked && <ScrollLock />}
            <p>
                Scroll locked:
                <strong>{isScrollLocked ? 'Yes' : 'No'}</strong>
            </p>
        </div>
    );
};

export default MyScrollLock;

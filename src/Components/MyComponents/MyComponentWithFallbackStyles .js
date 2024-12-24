import { useEffect, useState } from 'react';
import { Button } from '@wordpress/components';

const MyComponentWithFallbackStyles = () => {
    const [styles, setStyles] = useState({
        fallbackTextColor: '',
        fallbackBackgroundColor: ''
    });

    useEffect(() => {
        // Access the button after the component has mounted
        const buttonNode = document.querySelector('button');
        if (buttonNode) {
            const backgroundColor = getComputedStyle(buttonNode).backgroundColor;
            const textColor = getComputedStyle(buttonNode).color;
            setStyles({
                fallbackTextColor: textColor,
                fallbackBackgroundColor: backgroundColor
            });
        }
    }, []);  // Empty dependency array makes sure this runs only once after the component mounts

    return (
        <div>
            <Button variant="primary">My button</Button>
            <div>Text color: {styles.fallbackTextColor}</div>
            <div>Background color: {styles.fallbackBackgroundColor}</div>
        </div>
    );
};

export default MyComponentWithFallbackStyles;

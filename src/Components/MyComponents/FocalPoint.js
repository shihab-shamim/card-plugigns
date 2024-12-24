import { useState } from 'react';
import { FocalPointPicker } from '@wordpress/components';
const FocalPoint = () => {
    const [ focalPoint, setFocalPoint ] = useState( {
        x: 0.5,
        y: 0.5,
    } );

    const url = 'https://i.ibb.co.com/4RBL613/1714662976645-2.jpg';

    /* Example function to render the CSS styles based on Focal Point Picker value */
    const style = {
        maxWidth: '500px', // Added max-width of 500px
        // backgroundImage: `url(${url})`,
        // backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
        backgroundColor: 'red', // Added red background color
    };
    
    return (
        <>
        <FocalPointPicker
              __nextHasNoMarginBottom
                // url={ url }
                value={ focalPoint }
                onDragStart={ setFocalPoint }
                onDrag={ setFocalPoint }
                onChange={ setFocalPoint }
            />
            <div style={ style } />
            
        </>
    );
};

export default FocalPoint;
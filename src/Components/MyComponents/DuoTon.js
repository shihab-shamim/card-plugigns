import { useState } from 'react';
import { DuotonePicker, DuotoneSwatch } from '@wordpress/components';


const DUOTONE_PALETTE = [
    { colors: [ '#8c00b7', '#fcff41' ], name: 'Purple and yellow', slug: 'purple-yellow' },
    { colors: [ '#000097', '#ff4747' ], name: 'Blue and red', slug: 'blue-red' },
];

const COLOR_PALETTE = [
    { color: '#ff4747', name: 'Red', slug: 'red' },
    { color: '#fcff41', name: 'Yellow', slug: 'yellow' },
    { color: '#000097', name: 'Blue', slug: 'blue' },
    { color: '#8c00b7', name: 'Purple', slug: 'purple' },
];

const DuoTon = () => {
    const [ duotone, setDuotone ] = useState( [ '#000000', '#ffffff' ] )
    // console.log(duotone)
    return (
        <>
            <DuotonePicker
                duotonePalette={ DUOTONE_PALETTE }
                colorPalette={ COLOR_PALETTE }
                value={ duotone }
                onChange={ setDuotone }
            />
            <DuotoneSwatch values={ duotone } />
        </>
    );
};

export default DuoTon;
import React from 'react';
import { useState } from 'react';
import { FontSizePicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const fontSizes = [
    {
        name: __( 'Small' ),
        slug: 'small',
        size: 12,
    },
    {
        name: __( 'Mideum' ),
        slug: 'Mideum',
        size: 20,
    },
    {
        name: __( 'Big' ),
        slug: 'big',
        size: 26,
    },
];
const fallbackFontSize = 16;

const FontSize = () => {
    const [ fontSize, setFontSize ] = useState( 12 );
    console.log(fontSize);

    return (
        <FontSizePicker
            __next40pxDefaultSize
            fontSizes={ fontSizes }
            value={ fontSize }
            fallbackFontSize={ fallbackFontSize }
            onChange={ ( newFontSize ) => {
                setFontSize( newFontSize );
            } }
        />
    );
};

export default FontSize;
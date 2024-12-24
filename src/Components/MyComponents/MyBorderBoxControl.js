import { useState } from 'react';
import { __experimentalBorderBoxControl as  BorderBoxControl} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const colors = [
    { name: 'Blue 20', color: '#72aee6' },
    // ...
];

const MyBorderBoxControl = () => {
    const defaultBorder = {
        color: '#72aee6',
        style: 'dashed',
        width: '1px',
    };
    const [ borders, setBorders ] = useState( {
        top: defaultBorder,
        right: defaultBorder,
        bottom: defaultBorder,
        left: defaultBorder,
    } );
    const onChange = ( newBorders ) => setBorders( newBorders );

    return (
        <BorderBoxControl
            __next40pxDefaultSize
            colors={ colors }
            label={ __( 'Borders' ) }
            onChange={ onChange }
            value={ borders }
        />
    );
};
export default MyBorderBoxControl
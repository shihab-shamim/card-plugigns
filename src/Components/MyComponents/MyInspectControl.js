import React, { useState } from 'react';
import { RadioControl, PanelBody } from '@wordpress/components';

// Custom component for alignment control
const MyInspectControl = () => {
    const [align, setAlign] = useState('left');

    return (
        <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
            <h2>Alignment Control</h2>
            <PanelBody title="Inspector Control" initialOpen={false}>
                <RadioControl
                    label="Align"
                    help="Choose an alignment."
                    selected={align}
                    options={[
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ]}
                    onChange={(newAlign) => setAlign(newAlign)}
                />
            </PanelBody>
            <div style={{ textAlign: align, marginTop: '16px' }}>
                <p>This text is aligned: <strong>{align}</strong></p>
            </div>
        </div>
    );
};

export default MyInspectControl;

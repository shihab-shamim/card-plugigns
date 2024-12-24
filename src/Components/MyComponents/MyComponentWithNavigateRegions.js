import React from 'react';
import { navigateRegions } from '@wordpress/components';

// Wrap the component with `navigateRegions` to enable keyboard navigation
const MyComponentWithNavigateRegions = navigateRegions(() => (
    <div>
        <div role="region" tabIndex="-1" aria-label="Header">
            <h1>Header</h1>
        </div>
        <div role="region" tabIndex="-1" aria-label="Content">
            <p>This is the content area.</p>
        </div>
        <div role="region" tabIndex="-1" aria-label="Sidebar">
            <p>This is the sidebar.</p>
        </div>
    </div>
));

// Export the enhanced component
export default MyComponentWithNavigateRegions;

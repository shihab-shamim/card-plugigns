import React, { useState } from 'react';
import { MenuGroup, MenuItemsChoice } from '@wordpress/components';

/**
 * MyMenuItemsChoice Component
 * A component for selecting between different editor modes using MenuGroup and MenuItemsChoice from WordPress components.
 */
const MyMenuItemsChoice = () => {
    // State to manage the selected mode
    const [mode, setMode] = useState('visual');
    console.log(mode);
    

    // Define the menu options
    const choices = [
        { value: 'visual', label: 'Visual editor' },
        { value: 'text', label: 'Code editor' },
        
        { value: 'message', label: 'message editor' },
    ];

    // Render the menu group with selectable items
    return (
        <MenuGroup label="Editor">
            <MenuItemsChoice
                choices={choices}
                value={mode}
                onSelect={(newMode) => setMode(newMode)} // Update the state on selection
            />
        </MenuGroup>
    );
};

export default MyMenuItemsChoice;

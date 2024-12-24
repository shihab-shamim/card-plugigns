import React from 'react';
import { NavigableMenu, TabbableContainer, Button } from '@wordpress/components';

/**
 * Callback function to handle navigation
 * @param {number} index - The index of the navigated item.
 * @param {HTMLElement} target - The DOM element of the navigated item.
 */
function onNavigate(index, target) {
    console.log(`Navigated to index: ${index}`, target);
}

/**
 * MyNavigableContainer Component
 * Dynamically renders navigable items for `NavigableMenu` and `TabbableContainer`.
 */
const MyNavigableContainer = () => {
    // Items for the menu and container
    const menuItems = ['Item 1', 'Item 2', 'Item 3'];
    const containerSections = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

    return (
        <div>
            {/* Dynamic NavigableMenu */}
            <span>Navigable Menu:</span>
            <NavigableMenu onNavigate={onNavigate} orientation="horizontal">
                {menuItems.map((item, index) => (
                    <Button key={index} variant="secondary">
                        {item}
                    </Button>
                ))}
            </NavigableMenu>

            {/* Dynamic TabbableContainer */}
            <span>Tabbable Container:</span>
            <TabbableContainer onNavigate={onNavigate}>
                {containerSections.map((section, index) => (
                    <Button key={index} variant="secondary" tabIndex="0">
                        {section}
                    </Button>
                ))}
            </TabbableContainer>
        </div>
    );
};

export default MyNavigableContainer;

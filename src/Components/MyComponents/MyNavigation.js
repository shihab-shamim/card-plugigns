import React from 'react';
import {
    __experimentalNavigation as Navigation,
    __experimentalNavigationGroup as NavigationGroup,
    __experimentalNavigationItem as NavigationItem,
    __experimentalNavigationMenu as NavigationMenu,
} from '@wordpress/components';

/**
 * MyNavigation Component
 * A component demonstrating hierarchical navigation using WordPress experimental navigation components.
 */
const MyNavigation = () => (
    <Navigation>
        {/* Main Navigation Menu */}
        <NavigationMenu title="Home">
            {/* Group 1 with Items */}
            <NavigationGroup title="Group 1">
                <NavigationItem item="item-1" title="Item 1" />
                <NavigationItem item="item-2" title="Item 2" />
            </NavigationGroup>

            {/* Group 2 with a link to the "Category" menu */}
            <NavigationGroup title="Group 2">
                <NavigationItem
                    item="item-3"
                    navigateToMenu="category" // Navigates to the "Category" menu
                    title="Category"
                />
            </NavigationGroup>
        </NavigationMenu>

        {/* Category Navigation Menu */}
        <NavigationMenu
            backButtonLabel="Home" // Label for the back button
            menu="category"        // Unique identifier for this menu
            parentMenu="root"      // Identifies the parent menu
            title="Category"       // Title of the menu
        >
            <NavigationItem badge="1" item="child-1" title="Child 1" />
            <NavigationItem item="child-2" title="Child 2" />
        </NavigationMenu>
    </Navigation>
);

export default MyNavigation;

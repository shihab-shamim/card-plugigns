import React from 'react';
import {
    __experimentalNavigator as Navigator,
    __experimentalNavigatorScreen as NavigatorScreen,
    __experimentalNavigatorButton as NavigatorButton,
    __experimentalNavigatorBackButton as NavigatorBackButton,
} from '@wordpress/components';

/**
 * MyNavigator Component
 * Demonstrates navigation between screens using WordPress's experimental Navigator API.
 */
const MyNavigator = () => (
    <Navigator initialPath="/"> {/* Navigation container with initial path */}
        {/* Home Screen */}
        <NavigatorScreen path="/">
            <div>
                <p>This is the home screen.</p>
                <NavigatorButton path="/child">
                    Navigate to the child screen
                </NavigatorButton>
            </div>
        </NavigatorScreen>

        {/* Child Screen */}
        <NavigatorScreen path="/child">
            <div>
                <p>This is the child screen.</p>
                <NavigatorBackButton>
                    Go back
                </NavigatorBackButton>
            </div>
        </NavigatorScreen>
    </Navigator>
);

export default MyNavigator;

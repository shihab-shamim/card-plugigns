import { ResponsiveWrapper } from '@wordpress/components';

/**
 * MyResponsiveWrapper Component
 * A component that uses the ResponsiveWrapper to make an image responsive based on its natural dimensions.
 */
const MyResponsiveWrapper = () => (
    <ResponsiveWrapper naturalWidth={20} naturalHeight={6}>
        <img
            src="https://s.w.org/style/images/about/WordPress-logotype-standard.png"
            alt="WordPress"
        />
    </ResponsiveWrapper>
);

export default MyResponsiveWrapper;

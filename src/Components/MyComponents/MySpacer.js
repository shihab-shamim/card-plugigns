import {
    __experimentalSpacer as Spacer,
    __experimentalHeading as Heading,
    __experimentalView as View,__experimentalText as Text
} from '@wordpress/components';

function MySpacer() {
    return (
        <View>
            <Spacer>
                <Heading>WordPress.org</Heading>
            </Spacer>
            <Text>Code is Poetry</Text>
        </View>
    );
}

export default MySpacer
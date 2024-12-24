import {
    SlotFillProvider,
    Slot,
    Fill,
    Panel,
    PanelBody,
} from '@wordpress/components';

/**
 * MySlotFillProvider Component
 * Demonstrates the use of SlotFillProvider to manage slots and fills.
 */
const MySlotFillProvider = () => {
    // Slot definition for the panel
    const MyPanelSlot = () => (
        <Panel header="Panel with slot">
            <PanelBody>
                <Slot name="MyPanelSlot" />
            </PanelBody>
        </Panel>
    );

    // Content fill for the panel slot
    const MyPanelSlotContent = () => (
        <Fill name="MyPanelSlot">
            Panel body content goes here.
        </Fill>
    );

    return (
        <SlotFillProvider>
            <MyPanelSlot />
            <MyPanelSlotContent />
        </SlotFillProvider>
    );
};

export default MySlotFillProvider;

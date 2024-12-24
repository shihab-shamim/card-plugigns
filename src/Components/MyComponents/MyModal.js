import React, { useState } from 'react';
import { Button, Modal,__experimentalHeading as Heading } from '@wordpress/components';

/**
 * MyModal Component
 * A component to display a modal dialog with a custom close button.
 */
const MyModal = () => {
    // State to manage modal visibility
    const [isOpen, setOpen] = useState(false);

    // Handlers to open and close the modal
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <>
            {/* Button to open the modal */}
            <Button variant="secondary" onClick={openModal}>
                Open Modal
            </Button>

            {/* Conditional rendering of the modal */}
            {isOpen && (
                <Modal
                    title="This is my modal"
                    onRequestClose={closeModal} // Close modal on backdrop or Esc
                >
                    <Heading>hello</Heading>
                    <Button variant="secondary" onClick={closeModal}>
                        My custom close button
                    </Button>
                </Modal>
            )}
        </>
    );
};

export default MyModal;

import React, { useState } from 'react';
import { Guide, Button } from '@wordpress/components';

function MyTutorial() {
    const [isGuideOpen, setIsGuideOpen] = useState(false); // State to control Guide visibility

    const openGuide = () => setIsGuideOpen(true); // Function to open the Guide
    const closeGuide = () => setIsGuideOpen(false); // Function to close the Guide

    return (
        <div>
            {/* Button to trigger the Guide */}
            <Button isPrimary onClick={openGuide}>
                Start Tutorial
            </Button>

            {/* Conditionally render the Guide */}
            {isGuideOpen && (
                <Guide
                    onFinish={closeGuide} // Close the Guide when finished
                    pages={[
                        {
                            image: <img src="https://acmestore.com/add-to-cart.png" alt="Add to Cart" />,
                            content: <p>Welcome to the ACME Store!</p>,
                        },
                        {
                            content: <p>Click <i>Add to Cart</i> to buy a product.</p>,
                        },
                    ]}
                    finishButtonText="I'm done!"
                    contentLabel="Random Guide/Tutorial"
                />
            )}
        </div>
    );
}

export default MyTutorial;

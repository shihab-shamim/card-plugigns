import React from 'react';
import { Button, Dropdown } from '@wordpress/components';

const MyDropdown = () => {
    return (
        <Dropdown
        className="my-container-class-name"
        contentClassName="my-popover-content-classname"
        popoverProps={ { placement: 'bottom-start' } }
        renderToggle={ ( { isOpen, onToggle } ) => (
            <Button
                variant="primary"
                onClick={ onToggle }
                aria-expanded={ isOpen }
            >
                Toggle Popover!
            </Button>
        ) }
        renderContent={ () => <div>Hi Toggle</div> }
    
    />
    );
};

export default MyDropdown;
/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import { Draggable } from '@wordpress/components';
import { Icon } from '@wordpress/icons';
import { more } from '@wordpress/icons'; // Correct import for the `more` icon

/**
 * Draggable Box Component
 */
const Box = (props) => {
  return (
    <div
      {...props}
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        width: 100,
        height: 100,
        background: '#ddd',
      }}
    >
      {props.children}
    </div>
  );
};

/**
 * Draggable Component Example
 */
const MyDraggable = () => {
  const [isDragging, setDragging] = useState(false);

  return (
    <div>
      <p>Is Dragging? {isDragging ? 'Yes' : 'No'}</p>
      <div id="draggable-example-box" style={{ display: 'inline-flex' }}>
        <Draggable elementId="draggable-example-box" transferData={{}}>
          {({ onDraggableStart, onDraggableEnd }) => {
            const handleOnDragStart = (event) => {
              setDragging(true);
              onDraggableStart(event);
            };
            const handleOnDragEnd = (event) => {
              setDragging(false);
              onDraggableEnd(event);
            };

            return (
              <Box
                onDragStart={handleOnDragStart}
                onDragEnd={handleOnDragEnd}
                draggable
              >
                <Icon icon={more} />
              </Box>
            );
          }}
        </Draggable>
      </div>
    </div>
  );
};

export default MyDraggable;

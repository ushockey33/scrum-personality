import { DragDropContext } from 'react-beautiful-dnd';
import React from 'react'

class DragTest extends React.Component {
  onDragStart = () => {
    /*...*/
  };
  onDragEnd = () => {
    /*...*/
  };

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <div>Hello world</div>
      </DragDropContext>
    );
  }
}

export default DragTest;
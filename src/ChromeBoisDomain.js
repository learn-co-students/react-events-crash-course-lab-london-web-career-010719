import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    // drawChromeBoiAtCoords(event.nativeEvent.offsetX, event.nativeEvent.offsetY)
    drawChromeBoiAtCoords(event.clientX, event.clientY)
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
 
     */
  }
  handleToggleCycling = (event) => {
    toggleCycling()
  }

  handleResize = (event) => {

    if (event.key === "a") {
      resize("+")
    } else if (event.key === 's') {
      resize("-")
    }
    
  }
   
  /*  When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"
        onClick={this.handleToggleCycling}
        onKeyPress={this.handleResize}>
      </canvas>
    )
  }
}

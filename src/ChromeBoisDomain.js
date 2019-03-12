import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
     drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  

  handClick = () => {
    toggleCycling()
  }


  handleKeyDown = (event) => {
    if (event.key === 'a') {
      resize('+')
    }
    if (event.key === 's') {
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handClick}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}

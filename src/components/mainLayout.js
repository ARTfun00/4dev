import React, { Component } from 'react';
import Curensies from './Curensies';
import SimpleSlider from './slider1'

class LayoutOne extends Component {
  render() {
    return (

              <div id="body">
                <div className="sliders text-center"><SimpleSlider sliderValue="1"></SimpleSlider></div>
                <div className="sliders text-center"><SimpleSlider rtl  sliderValue="2"></SimpleSlider></div>
                
                <h1 className="text-center">List of tracked curencies</h1>
                <Curensies/>
              </div>

    );
  }
}

export default LayoutOne;

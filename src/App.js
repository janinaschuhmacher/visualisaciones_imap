import React, {Component} from 'react';

import {RadialChart, Hint, ArcSeries, XYPlot, DiscreteColorLegend} from 'react-vis';

// convert percentage to radians
function percentage_to_radians(percentage)
{
  var pi = Math.PI;
  return percentage / 100 * 2 * pi;
}

// example date

export default class SimpleRadialChart extends Component {
  state = {
    value: false
  };
  render() {
    const myData = [
      // outter circle: Empleados (50 % Mujeres, 50% Varones)
      {angle0: 0, angle: percentage_to_radians(50), radius: 200, radius0: 160, color:"#76448A", label:"Empleados"},
      {angle0: percentage_to_radians(50), angle: percentage_to_radians(50) + percentage_to_radians(50), radius: 200, radius0: 160, color:"#F1C40F"},

      // middle circle: Funcionarios (60 % Mujeres, 40 % Varones)
      {angle0: 0, angle: percentage_to_radians(60), opacity: 0.8, radius: 140, radius0: 100, color:"#76448A", opacity:0.7},
      {angle0: percentage_to_radians(60), angle: percentage_to_radians(60) + percentage_to_radians(40), radius: 140, radius0: 100, color:"#F1C40F" , opacity:0.7},

      // inner circle: Magistrados (35 % Mujeres, 65 % Varones)
      {angle0: 0, angle: percentage_to_radians(35),  radius: 80, radius0: 40, color: "#76448A", opacity:0.4},
      {angle0: percentage_to_radians(35), angle: percentage_to_radians(35) + percentage_to_radians(65), radius: 80, radius0: 40, color:"#F1C40F", opacity:0.4}
    ]
    return (
      
      <XYPlot
      xDomain={[-10, 10]}
      yDomain={[-10, 10]}
      width={600}
      height={600}>

       <DiscreteColorLegend  
       style={{position: 'absolute', left: '400px', top: '10px'}}
       orientation="horizontal"
      items={[
        {
          title: 'Mujeres',
          color: "#76448A", 
          strokeWidth:10
        },
        {
          title: 'Varones',
          color: "#F1C40F", 
          strokeWidth:20, 
          strokeStyle:"Wide"
        }
      ]}
      /> 
      
        <ArcSeries
    animation
    radiusType={'literal'}
    center={{x: -2, y: 2}}
    data={myData}
    colorType={'literal'}
    showLabels
      />
      
   
      
  
      
      </XYPlot>
    );
  }
}
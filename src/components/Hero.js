import React from "react";

class Hero extends React.Component{

  render(){

    return (
        <div>
        <img className="w3-image" src="https://www.w3schools.com/w3images/architect.jpg" alt="Architecture"/>
        <div class="w3-display-middle w3-margin-top w3-center">
        <h1 class="w3-xxlarge w3-text-white">
        <span class="w3-padding w3-black w3-opacity-min">
        <b>BR</b></span> <span class="w3-hide-small w3-text-light-grey">Architects</span></h1>
        </div>
        </div>
      );
  } 
};

export default Hero;
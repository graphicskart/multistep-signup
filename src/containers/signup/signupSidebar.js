import React from 'react'
export default function (props) {
  return (
    <div className="sidePanel">
      <ul>
      	<li className="selected" style={{'left' : (49*props.currentStep-49) + 'px'}}></li>
      	<li>1</li>
      	<li>2</li>
      	<li>3</li>
      	<li>4</li>
      </ul>

      <div className="sideBarContent">
      	<h4>College Administrator</h4>
      	<p>Fill out the form on the right. You can always edit the data in the setting menu</p>
      </div>

      <div className="sideBarFooter">
      	<p>1800 4333 4333</p>
      	<p>support@codigoworld.com</p>
      </div>
    </div>
  )
}
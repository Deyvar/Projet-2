.switch {
	position: relative;
	display: inline-block;
	width: 226px;
	height: 50px;
  }
  
  .switch input { 
	opacity: 0;
	width: 0;
	height: 0;
  }
  
  .slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: white;
	-webkit-transition: .4s;
	transition: .4s;
	font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  border: 2px solid ;
  border-color: gray;


}

  
  .slider:hover {

	background-color: #2196F3;


  }
  
  
  input:checked + .slider {
	background-color: #2196F3;
  }
  
  input:focus + .slider {
	box-shadow: 0 0 1px #2196F3;
  }
  
  
  
 
  .slider.round {
	border-radius: 34px;
  }
  
  .slider.round:before {
	border-radius: 50%;
  }
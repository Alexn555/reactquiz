import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './progress-bar.scss';
import NumberHelper from '../../utils/number-helper';


export default class ProgressBar extends Component {

   showBar(currentIndex, itemLength) {
	   const procentage = currentIndex > 0 ? NumberHelper.getProcentage(currentIndex, itemLength) : 0;
	   let rowProcClass = 'progress-bar-15';
	   if (procentage > 15 && procentage <= 30) {
		   rowProcClass = 'progress-bar-30';
	   }
	   else if (procentage > 30 && procentage <= 50) {
		   rowProcClass = 'progress-bar-50';
	   }
	   else if (procentage > 50 && procentage <= 75) {
		   rowProcClass = 'progress-bar-75';
	   }
	   else if (procentage > 75 && procentage <= 90) {
		   rowProcClass = 'progress-bar-90';
	   }	   
	   else if (procentage > 90) {
		   rowProcClass = 'progress-bar-full';
	   }	
	   
       return (
          <div>
			  <div className='progress-bar-wrapper'> 
				<div className={rowProcClass}> </div>
			  </div>
		  </div>
       ) 
   }
   
   render() {
	  return (
		  <div>
			{this.showBar(this.props.currentIndex, this.props.itemLength)}
		  </div>
	   );
   }

}

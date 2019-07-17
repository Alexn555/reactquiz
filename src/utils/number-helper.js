
// Number utility helper

export default class NumberHelper {
   
   static getProcentage(itemIndex, itemLength) {
	   return Math.ceil(itemIndex * 100 / itemLength);
   }
 
}
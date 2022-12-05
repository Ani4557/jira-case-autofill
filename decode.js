/*
 * File    : decode.js
 * Date    : 11/22/2022
 * Author  : Ani
*/

function serialToField(serialNumber) {
  serialNumber = serialNumber.toUpperCase();
  let model = serialNumber.substring(0, 5);
  let manufacturingDate = serialNumber.substring(5, 9);
  let batch = serialNumber.substring(9, 13);
  if (batch.includes('R'))
    manufacturingDate = null;
  return {
    "model": model, 
    "manufacturingDate": manufacturingDate, 
    "batch": batch
  };
}
  
  const a = serialToField("020320522R021");
  console.log(a.model);
  console.log(a.manufacturingDate);
  console.log(a.batch);
  
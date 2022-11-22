/*
 * File     : decode.js
 * Date     : 11/22/2022
 * Author   : Ani
*/

function toDict(serialNumber) {
  let model = serialNumber.substring(0, 5);
  let manufacturingDate = serialNumber.substring(5, 9);
  
  console.log(model);
  console.log(manufacturingDate);

}

toDict("0203205220021");

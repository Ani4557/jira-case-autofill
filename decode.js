/*
 * File     : decode.js
 * Date     : 11/22/2022
 * Author   : Ani
*/

function toDict(serialNumber) {
  let model = serialNumber.substring(0, 5);
  let manufacturingDate = serialNumber.substring(5, 9);
  let batch = serialNumber.substring(10, 13);
  return {"model": model, "manufacturingDate": manufacturingDate, "batch": batch};
}

const a = toDict("0203205220021");
console.log(a.model);
console.log(a.manufacturingDate);
console.log(a.batch);

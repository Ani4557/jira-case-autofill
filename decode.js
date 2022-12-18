/*
 * File    : decode.js
 * Date    : 11/22/2022
 * Author  : Ani
*/

const serialRegexp = /([B]|[0])([1-2])([0])([1-3])([1-3])([0-1])([0-9])([0-9])([0-9])([0-9]|[R])([0-9])([0-9])([0-9])/;

const getSerialNumberFromInput = (input) => {
    const matches = serialRegexp.exec(input);
    if (!matches)
      return null;
    console.log(matches);
    return matches[0];
};

// getSerialNumberFromInputs()

const serialToField = (serialNumber) => {
  if (serialRegexp.test(serialNumber))
    throw "serialNumber does not match regex";
  serialNumber = serialNumber.toUpperCase();
  const model = serialNumber.substring(0, 5);
  const manufacturingDate = serialNumber.substring(5, 9);
  const batch = serialNumber.substring(9, 13);
  let possibleRefurb = false;
  if (batch.includes('R'))
    possibleRefurb = true;
  return {
    "model": model, 
    "manufacturingDate": manufacturingDate, 
    "batch": batch,
    "possibleRefurb": possibleRefurb
  };
};
  
  const a = serialToField("020320522R021");
  console.log(a.model);
  console.log(a.manufacturingDate);
  console.log(a.batch);
  console.log(a.possibleRefurb);
  
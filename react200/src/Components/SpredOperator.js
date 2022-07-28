function SpreadOperator() {
  // javascript Array
  var varArray1 = [`num1`, `num2`];
  var varArray2 = [`num3`, `num4`];
  var varNum = 12;
  var varString = "HI";
  var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
  console.log("1. sumVarArr:  " + sumVarArr);
  var sumVarArr = [].concat(varArray1, varArray2);

  //Es6 Arrays
  let sumLetArr = [...varArray1, ...varArray2];
  let sumLetArr2 = [varNum, ...varArray2];
  var sumLetArr3 = [varString, ...varArray2];
  console.log("2. sumLetArr: " + sumLetArr);
  const [sum1, sum2, ...remain] = sumLetArr;
  console.log("3. sum1: " + sum1 + " " + sum2 + " " + remain);

  console.log("4. sumletArr2 : " + sumLetArr2);
  console.log("5. sumletArr3 : " + sumLetArr3);

  var varObject1 = { key1: "value1", key2: "value2" };
  var varObject2 = { key2: "new1", key3: "value3", key4: "value4" };

  //javascript object
  var sumVarObj = Object.assign({}, varObject1, varObject2);
  console.log("6. sumVarObj : " + JSON.stringify(sumVarObj));

  //Es6 object
  var sumLetObj = { ...varObject1, ...varObject2 };
  console.log("7. sumLetObj : " + JSON.stringify(sumVarObj));
  var { key1, key2, ...others } = sumLetObj;
  console.log(
    "8. key1 : " +
      key1 +
      ", key2 : " +
      key2 +
      ",others : " +
      JSON.stringify(others)
  );
  return;
}

export default SpreadOperator;

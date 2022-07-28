function Variable() {
  var varName = "react";
  console.log("varName : " + varName);
  var varName = `200`;
  console.log("varName2 : " + varName);

  let letName = "react";
  console.log("letName1 : " + letName);
  //   let letName = `200`;
  //parsing error message: Identifier `letName` has already been declared

  const constName = "react";
  console.log("constName : " + constName);
  //   const constName = `200`;
  //parsing error message: Identifier `constName` has already been declared

  return;
}

export default Variable;

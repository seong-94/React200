import { useEffect } from "react";

function Es6() {
  var jsString = "자바스크립트";
  var jsString2 = "입니다\n 다음줄입니다.";
  console.log(jsString + `문자열` + jsString2 + "~");

  var Es6String = "Es6";
  var Es6String2 = "입니다.";
  console.log(`${Es6String} 문자열${Es6String2} !!`);

  var LongString = "Es6에 추가된 String 함수들입니다.";
  console.log(`starstwith : ` + LongString.startsWith("Es6에 추가"));
  console.log(`eneWith : ` + LongString.endsWith("함수들입니다."));
  console.log(`includes :` + LongString.includes("추가된"));
  return;
}

export default Es6;

function reverseString(str){
  return str;
}

assertEqual(reverseString("Rick"), "Rick");
assertEqual(reverseString("Rick Cerf"), "Cerf Rick");

function assertEqual(input, expected){
  var message = (input + " SHOULD EQUAL " + expected + "\n");
  var pass = "PASS\n" +  message;
  var fail = "FAIL\n" +  message;
  if(input === expected){
    console.log(pass);
  } else {
    console.log(fail);
  }
}

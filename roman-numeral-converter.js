function convertToRoman(num) {
  let response = "";
  let i = 0;
  while(i != num){
      if (num >=1000){
        response += "M";
        num -= 1000
      } else if (num>=900){
        response += "CM";
        num -= 900
      } else if (num>=500){
        response += "D";
        num -= 500
        i += 500
      } else if (num>=400){
        response += "CD";
        num -= 400
      } else if (num>=100){
        response += "C";
        num -= 100
      } else if (num>=90){
        response += "XC";
        num -= 90
      } else if (num>=50){
        response += "L";
        num -= 50
      } else if (num>=40){
        response += "XL";
        num -= 40
      } else if (num>=10){
        response += "X";
        num -= 10
      } else if (num>=9){
        response += "IX";
        num -= 9
      } else if (num>=5){
        response += "V";
        num -= 5
      } else if (num>=4){
        response += "IV";
        num -= 4
      } else if (num>=1){
        response += "I";
        num -= 1
      }
      
  }
 return response;
}

module.exports = function getZerosCount(number) {
	var ZerosCount = 0;
    while(number){
      number = (number/5)|0;
      ZerosCount+=number;
     }
    return ZerosCount;
  }

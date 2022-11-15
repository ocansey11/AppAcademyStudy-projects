
function isBigger(var1, var2){
  if(var1 > var2){
    return true
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum;
  if (isBigger(num1,num2)) {
    bigNum = num1;
    return bigNum * 2;
  } else {
    bigNum = num2;
    return bigNum * 2;
  }
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum;
  if (isBigger(num1,num2)) {
    bigNum = num1;
    return bigNum / 3;
  } else {
    bigNum = num2;
    return bigNum / 3;
  }
}

function eatMostTacos(sum1, sum2) {
  let bigNum;
  if (isBigger(sum1,sum2)) {
    bigNum = sum1;
    return `I ate ${bigNum} tacos.`;
  } else {
    bigNum = sum2;
    return `I ate ${bigNum} tacos.`;
  }
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog;
  if (!isBigger(weight1,weight2)) {
    smallDog = weight1;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  } else {
    smallDog = weight2;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};

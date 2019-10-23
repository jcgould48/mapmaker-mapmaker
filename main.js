function doubleAll(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    
    newArr.push(arr[i] * 2);
  }

  return newArr;

}

function absoluteValues(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0){
      newArr.push(arr[i] * -1)
    }
    else {
      newArr.push(arr[i])
    }
  }
  return newArr;

}

function yelledGreetings(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    
    newArr.push(arr[i] +'!');
  }

  return newArr;
}

function changeToInitials(names) {
    const initialsArr = [];
    
    for (let i = 0; i < names.length; i++){
     
        let theName = names[i];
        let theLetter = '';
  
        for (let i = 0; i < theName.length; i++){
          if (i === 0 || theName[i-1] === ' '){
            
          theLetter += theName[i];   
      } 
      
    }initialsArr.push(theLetter)
  }return initialsArr;
}


function doubleOdd(num) {
  const newArr = [];

  for (let i = 0; i < num.length; i++) {
    if(num[i] % 2 ===1 || num[i] % 2 === -1){
      newArr.push(num[i] * 2);
    }
    else{
    newArr.push(num[i]);
    }
  }

  return newArr;

}

function upperCaseFirstLetters(name) {
  const newArr = [];
  for (let i = 0; i < name.length; i++) {
  const theName = name[i] 
  let theLetter = '' 

  for (let i = 0; i < theName.length; i++ ){
    if(i === 0){ 
    theLetter +=  theName[0].toUpperCase();

    }
    else {
    theLetter += theName[i].toLowerCase();
}
}newArr.push(theLetter);

  }return newArr; 
}


function add1ToLeft(numArr) {
  const newArr = [];

  for (let i = 0; i < numArr.length; i++){
    if (numArr[i]<0){

      let num = numArr[i].toString();
      let newNum = '';

      for (let i = 0; i < num.length; i++){
        if (num[i] === '-'){
        newNum = newNum + num[i]+'1';
        } else{

        newNum = newNum + num[i]
        }
      } newArr.push(parseInt(newNum));
    } else {


    newArr.push(parseInt('1' + numArr[i]));
    }
  }return newArr;
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}
function checkAB(num) {
    // you can only write your code here!
    var str = num.split('');
    var arr = [];
    
    for (var k = 0; k < str.length; k++) {
        if (str[k] !== ' ') {
            arr.push(str[k]);
        }
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'a') {
            for (var j = i; j <= (i+3); j++) {
                if (arr[j] === 'b') {
                    return true;
                }
            }
        }
    }
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
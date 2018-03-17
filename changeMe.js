function buatObject(firstName, lastName, gender, age) {
    var obj = {};
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.gender = gender;
    obj.age = age;
    return obj;
}
function changeMe(arr) {
    var yearNow = 2018;
    if (arr.length === 0) {
      console.log('\"\"');
    }
    else {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][3] === undefined || arr[i][3] > yearNow) {
            arr[i][3] = 'Invalid Birth Year';
        }
        else {
          arr[i][3] = yearNow - arr[i][3];
        }
        var obj = buatObject(arr[i][0], arr[i][1], arr[i][2], arr[i][3])
        console.log((i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':');
        console.log(obj);
      }
    }
}
  
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""  
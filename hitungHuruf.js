function hitungHuruf(kata) {
    // you can only write your code here!
    var arr = kata.split(' ');

    for (var i in arr) {
        for (var j = 0; j < arr[i].length; j ++) {
            if (arr[i].lastIndexOf(arr[i][j]) !== arr[i].indexOf(arr[i][j])) {
                return arr[i];
            }
        }
    }
}
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau
function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var hasilBagi;
    var arr = [];
    var arrStr = '';
    var hasilAkhir = 0;

    for (var i = 0; i <= angka; i++) {
        hasilBagi = angka/i;
        arrStr = i.toString() + hasilBagi.toString();

        if (hasilBagi % 1 === 0) {
            arr.push(arrStr);
            if (hasilAkhir === 0) {
                hasilAkhir = arrStr.length;
            }
            else {
                if (hasilAkhir > arrStr.length) {
                    hasilAkhir = arrStr.length;
                }
            }
        }
    }
    return hasilAkhir;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
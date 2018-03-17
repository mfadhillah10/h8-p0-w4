function sorting(arrNumber) {
    // code di sini
    var angka = 0;

    for (var i = 0; i < arrNumber.length; i++) {
        for (var j = 0; j < arrNumber.length; j++) {
            if (arrNumber[i] < arrNumber[j]) {
                angka = arrNumber[i];
                arrNumber[i] = arrNumber[j];
                arrNumber[j] = angka;
            }
        }
    }
    return arrNumber;
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var high = 0;

    if (arrNumber.length === 0) {
        return '\"\"';
    }
    for (var i = arrNumber.length-1; i >= 0; i--) {
        var count = 0;    
        if (arrNumber[i] === arrNumber[arrNumber.length-1]) {
            count++;
        }
        if (count > 0) {
            high += count;
        }
    }
    return 'angka yang paling besar adalah ' + arrNumber[arrNumber.length-1] + ' dan muncul ' + high + ' kali';
}
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''
function makanTerusRekursif(waktu) {
    // you can only write your code here!
    var makan = 0;
    var sisaWaktu;
    
    if (waktu === 0) {
      return 0;
    }
    else if (waktu < 15) {
      return 1;
    }
    else {
      makan++;
      sisaWaktu = waktu - 15;
    }
    return makan + makanTerusRekursif(sisaWaktu);
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0
function cariMedian(arr) {
  hasil = [];
  n = arr.length;

  if (n % 2 === 0) { // jika jumlah elemen genap
      nilaiTengah = (arr[(n/2)]+arr[(n/2)-1])/2;
      hasil.push(nilaiTengah);
  }
  else { // jika jumlah elemen ganjil
      nilaiTengah = (arr[(Math.floor(n/2))]);
      hasil.push(nilaiTengah);
  }
  
  return hasil;

    
}
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
function buatObject(product, shoppers, leftOver, totalProfit) {
    var obj = {};
        obj.product = product;
        obj.shoppers = shoppers;
        obj.leftOver = leftOver;
        obj.totalProfit = totalProfit;
    return obj;
}
function countProfit(shoppers) {
    var listBarang = [['Sepatu Stacattu', 1500000, 10],
                      ['Baju Zoro', 500000, 2],
                      ['Sweater Uniklooh', 175000, 1]];
    var arr = [];
    if (shoppers.length === 0) {
      return arr;
    }
    else {
      var obj = {};
      for (var i = 0; i < listBarang.length; i++) {
        var jumlah = 0;
        var pembeli = [];
        for (var j = 0; j < shoppers.length; j++) {
          if (listBarang[i][0] === shoppers[j].product && listBarang[i][2] > shoppers[j].amount) {
            jumlah += shoppers[j].amount;
            pembeli.push(shoppers[j].name);
          }
        }
        var profit = jumlah*listBarang[i][1];
        var sold = listBarang[i][2] - jumlah;
        obj[i] = buatObject(listBarang[i][0], pembeli, sold, profit);
        arr.push(obj[i]);
      }
    }            
    return arr;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
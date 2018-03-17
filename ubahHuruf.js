function ubahHuruf(kata) {
    // you can only write your code here!
    var arr = [];
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    
    for (var i = 0; i < kata.length; i ++) {
        arr.push(abjad[abjad.indexOf(kata[i])+1]);
    }
    return arr.join('');
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
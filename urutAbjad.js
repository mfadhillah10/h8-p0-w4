function urutAbjad(kata) {
    return kata.split('').sort().join('');
}

// test case
console.log(urutAbjad('hello'));
console.log(urutAbjad('truncate'));
console.log(urutAbjad('developer'));
console.log(urutAbjad('software'));
console.log(urutAbjad('aegis'));
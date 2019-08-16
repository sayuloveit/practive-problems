// return the number of primes before a positive integer n

function countPrimesBefore(n) {
    // 1 is not prime
    if (n < 2) return 0;
    var primes = [ 2 ];

    for (var i = 3; i <= n; i++) {
        var isDivisibleByPrime = primes.some(prime => {
            return i % prime === 0;
        }); 

        if (!isDivisibleByPrime) {
            primes.push(i);
        }
    }

    console.log(primes);
    return primes.length;
}

console.log(countPrimesBefore(11)); // 5 // 2, 3, 5, 7, 11
console.log(countPrimesBefore(10)); // 4 // 2, 3, 5, 7
console.log(countPrimesBefore(100)); // 25 // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

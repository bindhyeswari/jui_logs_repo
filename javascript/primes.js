function isPrime(num) {
    for (var i = 2, len = Math.sqrt(num); i <= len; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function getPrimesInRange(start, end) {
    let primes = [];
  
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    return primes;
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
  
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function findPrimes() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
  
    const primes = getPrimesInRange(start, end);
    document.getElementById('primes').innerHTML = primes.join(', ');
  }
  
  function showDetails() {
    const popup = document.getElementById('detailsPopup');
    popup.style.display = 'block';
  
    const timeInfo = document.getElementById('timeInfo');
    // timeInfo.innerHTML = "Performance details...";
  }
  
  function closeDetails() {
    const popup = document.getElementById('detailsPopup');
    popup.style.display = 'none';
  }
  
const fibonacci_series = n => {
  const fib = [0, 1];
  for (let i = fib.length; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
};

const test_prime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const main = n => {
  const primeFibs = [];
  fibonacci_series(n).forEach(fibs =>
    test_prime(fibs) === true ? primeFibs.push(fibs) : ""
  );
  return primeFibs;
};

console.log(main(6));

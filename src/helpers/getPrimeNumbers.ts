const isPrime = (num: number): boolean => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const getPrimeNumbers = (max: number): number[] => {
  const array = [];

  for (let i = 2; i < max; i += 1) {
    if (isPrime(i)) {
      array.push(i);
    }
  }

  return array;
};

export default getPrimeNumbers;

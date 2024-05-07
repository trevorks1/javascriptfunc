// Example 1: Reverse String
function reverseString(str) {
    return str.split('').reverse().join('');
}

function renderReversedString() {
    const inputString = document.getElementById('inputString').value;
    const reversedString = reverseString(inputString);
    document.getElementById('reversedString').innerText = reversedString;
}

document.getElementById('reverseBtn').addEventListener('click', renderReversedString);


// Example 2: Calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Rendering function for factorial calculation
function renderFactorial() {
    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    
    // Check if input is a non-negative integer
    if (Number.isInteger(inputNumber) && inputNumber >= 0) {
        const result = factorial(inputNumber);
        document.getElementById('factorialResult').innerText = `Factorial: ${result}`;
    } else {
        document.getElementById('factorialResult').innerText = 'Please enter a non-negative integer.';
    }
}

// Event listener for the factorial button
document.getElementById('factorialBtn').addEventListener('click', renderFactorial);

// Example 3: Sum of Array Elements
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function renderSumArray() {
    const inputArray = document.getElementById('inputArray').value;
    const arr = inputArray.split(',').map(Number); // Convert comma-separated string to array of numbers
    const sum = sumArray(arr);
    document.getElementById('sumArrayResult').innerText = `Sum: ${sum}`;
}

document.getElementById('sumArrayBtn').addEventListener('click', renderSumArray);


// Example 4: Square Root
function squareRoot(n) {
    return Math.sqrt(n);
}

function renderSquareRoot() {
    const inputNumber = parseFloat(document.getElementById('inputNumberSqrt').value);
    const result = squareRoot(inputNumber);
    document.getElementById('squareRootResult').innerText = `Square Root: ${result}`;
}

document.getElementById('squareRootBtn').addEventListener('click', renderSquareRoot);


// Example 5: Change Text Color
function changeColor() {
    const color = document.getElementById('colorInput').value;
    document.getElementById('textToColor').style.color = color;
}

document.getElementById('colorBtn').addEventListener('click', changeColor);

// Example 6: Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) {
        return [0];
    } else {
        let sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }
}

function renderFibonacci() {
    const inputNumber = parseInt(document.getElementById('fibonacciNumber').value);
    const sequence = fibonacci(inputNumber);
    document.getElementById('fibonacciResult').innerText = `Fibonacci Sequence: ${sequence.join(', ')}`;
}

document.getElementById('fibonacciBtn').addEventListener('click', renderFibonacci);


// Example 7: Prime Number Check
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function renderPrimeCheck() {
    const inputNumber = parseInt(document.getElementById('primeNumber').value);
    const isPrimeResult = isPrime(inputNumber);
    document.getElementById('primeResult').innerText = `Is Prime: ${isPrimeResult}`;
}

document.getElementById('primeBtn').addEventListener('click', renderPrimeCheck);


// Example 8: Palindrome Check
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function renderPalindromeCheck() {
    const inputString = document.getElementById('inputPalindrome').value;
    const isPalindromeResult = isPalindrome(inputString);
    document.getElementById('palindromeResult').innerText = `Is Palindrome: ${isPalindromeResult}`;
}

document.getElementById('palindromeBtn').addEventListener('click', renderPalindromeCheck);

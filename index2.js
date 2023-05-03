// Bai 2
function delayedGreeting(name, delay, callback) {
    console.log('1');
    setTimeout(function() {
      callback(`Hello, ${name}!`);
    }, delay);
    console.log(2);
  }
  
  function printGreeting(greeting) {
    console.log(greeting);
  }
  
  delayedGreeting("John", 5000, printGreeting);
  delayedGreeting("Min", 2000, printGreeting);
  delayedGreeting("Min", 2000, printGreeting);
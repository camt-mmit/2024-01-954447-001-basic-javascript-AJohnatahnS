import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({ input: stdin, output: stdout });

rl.question('Input size: ', (size) => {
  const numericSize = parseInt(size, 10);
  
  if (isNaN(numericSize) || numericSize <= 0) {
    console.log('Please enter a positive integer.');
  } else {
    let pattern = '';
    for (let i = 1; i <= numericSize; i++) {
      pattern += '*'.repeat(i) + '\n'; 
    }
    console.log(pattern); 
  }
  
  rl.close();
});
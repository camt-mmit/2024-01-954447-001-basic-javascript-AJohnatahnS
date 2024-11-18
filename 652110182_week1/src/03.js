import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({ input: stdin, output: stdout });

rl.question('Input size: ', (size) => {
  const numericSize = parseInt(size, 10); 

  if (isNaN(numericSize) || numericSize <= 0) {
    console.log('Please enter a valid positive integer.');
  } else {
    console.log(`input size: ${numericSize}`);
    for (let i = 1; i <= numericSize; i++) {
      const spaces = ' '.repeat(numericSize - i); 
      const stars = '*'.repeat(i); 
      console.log(spaces + stars); 
    }
  }

  rl.close();
});

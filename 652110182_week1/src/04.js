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
      if (i === 1 || i === numericSize) {
       
        console.log('*'.repeat(numericSize));
      } else {
      
        console.log('*' + ' '.repeat(numericSize - 2) + '*');
      }
    }
  }

  rl.close();
});
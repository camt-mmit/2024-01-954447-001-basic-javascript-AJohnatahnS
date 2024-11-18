import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({ input: stdin, output: stdout });

rl.question('Input your score: ', (score) => {
  const numericScore = parseFloat(score);

  let grade;
  if (numericScore >= 80) {
    grade = 'A';
  } else if (numericScore >= 70) {
    grade = 'B';
  } else if (numericScore >= 60) {
    grade = 'C';
  } else if (numericScore >= 50) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  console.log(`Your grade is ${grade}.`);
  rl.close();
});

import readline from "node:readline";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface({ input: stdin, output: stdout });

rl.question("Input size: ", (size) => {
  const n = parseInt(size, 10);

  if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
  } else {
    const gridSize = 2 * n - 1;
    for (let i = 0; i < gridSize; i++) {
      let row = "";
      for (let j = 0; j < gridSize; j++) {
        if (Math.abs(n - 1 - i) + Math.abs(n - 1 - j) === n - 1) {
          row += "*";
        } else {
          row += " ";
        }
      }
      console.log(row);
    }
  }

  rl.close();
});

let spinner = ['|', '/', '-', '\\', '|'];
let timer = 0;
let increment = 100;

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => process.stdout.write(`\r${spinner[i]}   `), timer);
  timer += increment;
}

setTimeout(() => process.stdout.write(`\n`), timer + increment);
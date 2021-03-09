// Programming challenge description:
//The Fibonacci series is defined as F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2) where n>1. Given a positive integer n, print the value of F(n).
// Input:Your program should read lines of text from standard input. Each line will contain a single positive integer, n.
// Output:For each input n, print to standard output the fibonacci number, F(n), one per line.
process.stdin.resume();
process.stdin.setEncoding('utf8');
var stdin = '';
process.stdin.on('data', function (chunk) {
  stdin += chunk;
}).on('end', function() {
  var lines = stdin.trim().split('\n');
  for(var i=0; i<lines.length; i++) {
    process.stdout.write(lines[i]);
  }
});
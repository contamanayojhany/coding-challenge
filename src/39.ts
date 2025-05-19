function main() {
  const input = process.stdin;
  
  while (input) {
    const line = new TextDecoder().decode(input);
    
    if (line.includes('student')) {
      console.log(line);
      input.read();
      return;
    }
    
    input.read();
  }
}

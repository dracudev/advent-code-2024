function createFrame(names) {
  // Longest name length
  const maxLength = Math.max(...names.map((name) => name.length));

  // Top and bottom border
  const border = "*".repeat(maxLength + 4);

  // Intermediate lines with the names
  const framedNames = names.map((name) => `* ${name.padEnd(maxLength, " ")} *`);

  // Single array
  const frame = [border, ...framedNames, border];

  // Single string with newlines
  return frame.join("\n");
}

// Example
console.log(createFrame(["midu", "madeval", "educalvolpz"]));
console.log(createFrame(["midu"]));
console.log(createFrame(["a", "bb", "ccc"]));
console.log(createFrame(["a", "bb", "ccc", "dddd"]));

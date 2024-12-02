const fs = require("fs");

// Read input from file
const input = fs.readFileSync("./src/day01/input.txt", "utf8");

// Parse the input into two lists
const lines = input.trim().split("\n");
const leftList = [];
const rightList = [];

lines.forEach((line) => {
  const [left, right] = line.split(/\s+/).map(Number);
  leftList.push(left);
  rightList.push(right);
});

function calculateTotalDistance(leftList, rightList) {
  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);
  let totalDistance = 0;
  for (let i = 0; i < leftList.length; i++) {
    totalDistance += Math.abs(leftList[i] - rightList[i]);
  }
  return totalDistance;
}

function calculateSimilarityScore(leftList, rightList) {
  const rightCount = {};
  for (const num of rightList) {
    if (rightCount[num]) {
      rightCount[num]++;
    } else {
      rightCount[num] = 1;
    }
  }
  let similarityScore = 0;
  for (const num of leftList) {
    if (rightCount[num]) {
      similarityScore += num * rightCount[num];
    }
  }
  return similarityScore;
}

// Part One
const totalDistance = calculateTotalDistance(leftList, rightList);
console.log("Total Distance:", totalDistance);

// Part Two
const similarityScore = calculateSimilarityScore(leftList, rightList);
console.log("Similarity Score:", similarityScore);

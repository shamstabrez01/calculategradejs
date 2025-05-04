function calculategrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "c";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

let grade = calculategrade(80);
console.log(grade);

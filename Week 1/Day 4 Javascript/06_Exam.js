function exam(totalmarks,is_exam)
  {
  if (is_exam) {
    return totalmarks >= 90;
  }
 return (totalmarks >= 89 && totalmarks <= 100);
 }

console.log(exam("90", "true "));
console.log(exam("99", "true "));

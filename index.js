function lateFee(daysLate) {
  let charge = 0;
  if (daysLate <= 0) {
    return "No charge!"
  } else if (daysLate <=7) {
    charge = daysLate;
    return `You owe $${charge}.00.`;
  } else if (daysLate > 7 && daysLate <= 30) {
    charge = daysLate * 2 - 7;
    return `You owe $${charge}.00.`;
  } else {
    charge = 60;
    return `You owe $${charge} and your borrowing privileges have been suspended.`
  }
}

function branchHours(branch) {
  let openLate;
  return branch === "Central" ? openLate : !openLate
}

function recommendBookByGenre() {
  // Write your code here!
}

function lateFee(daysLate) {
  let charge = 0;
  if (daysLate <= 0) {
    return "No fine!"
  } else if (daysLate <=7) {
    charge = daysLate;
    return `Your fine is $${charge}.`;
  } else if (daysLate > 7 && daysLate <= 30) {
    charge = daysLate * 2;
    return `Your fine is $${charge}.`;
  } else {
    charge = 60;
    return `Membership suspended.`
  }
}

function branchHours(branch) {
  return branch === "Central" ? "Open until 9pm." : "Open until 6pm."
}

function recommendBookByGenre(genre) {
  switch (genre) {
    case "fiction":
      return "Check out our bestsellers section."
    case "non-fiction":
      return "Explore the top biographies shelf."
    case "comics":
      return "Visit the graphic novels area."
    default:
      return "Browse whatever catches your eye!"
  }
}

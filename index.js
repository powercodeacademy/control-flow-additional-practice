function lateFee(daysLate) {
  if (daysLate <= 0) {
    return "No fine!"
  } else if (daysLate <= 7) {
    return `Your fine is $${daysLate}.`
  } else if (daysLate <= 30) {
    return `Your fine is $${daysLate * 2}.`
  } else {
    return "Membership suspended."
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

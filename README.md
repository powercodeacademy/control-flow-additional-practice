# Control Flow Lab: Library Edition

## Goals

- Write `if...else if...else` logic
- Use the ternary operator
- Use `switch` statements

## Setup

```bash
npm install
npm test
```

## Your Tasks

In index.js, implement:

**1.** lateFee(daysLate)

- If the book is returned on time (or early), there’s no charge.
- If it’s a few days late, charge a dollar per day.
- If it’s more than a week late but under a month, charge two dollars per day.
- If it’s over a month late, suspend the member’s borrowing privileges.

**2.** branchHours(branch)

- Use a ternary: if the branch is Central, it stays open later; otherwise it closes earlier.

**3.** recommendBookByGenre(genre)

- Use a switch to suggest different sections based on genre (fiction, non-fiction, comics, or any other).

---

**Run `npm test` and let the tests guide you!**

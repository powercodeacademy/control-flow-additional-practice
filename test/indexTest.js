const { expect } = require("chai")
require("./helpers.js")

describe("index.js", function () {
  describe("lateFee()", function () {
    it('returns "No fine!" when daysLate is 0 or negative', function () {
      expect(lateFee(0)).to.equal("No fine!")
      expect(lateFee(-3)).to.equal("No fine!")
    })

    it("charges $1 per day for up to 7 days late", function () {
      expect(lateFee(5)).to.equal("Your fine is $5.")
    })

    it("charges $2 per day for 8–30 days late", function () {
      expect(lateFee(10)).to.equal("Your fine is $20.")
    })

    it("suspends membership after more than 30 days late", function () {
      expect(lateFee(31)).to.equal("Membership suspended.")
    })
  })

  describe("branchHours()", function () {
    it("returns extended hours for Central branch", function () {
      expect(branchHours("Central")).to.equal("Open until 9pm.")
    })

    it("returns regular hours for any other branch", function () {
      expect(branchHours("West End")).to.equal("Open until 6pm.")
      expect(branchHours("Downtown")).to.equal("Open until 6pm.")
    })
  })

  describe("recommendBookByGenre()", function () {
    it("recommends bestsellers for fiction", function () {
      expect(recommendBookByGenre("fiction")).to.equal(
        "Check out our bestsellers section."
      )
    })

    it("recommends biographies for non-fiction", function () {
      expect(recommendBookByGenre("non-fiction")).to.equal(
        "Explore the top biographies shelf."
      )
    })

    it("recommends graphic novels for comics", function () {
      expect(recommendBookByGenre("comics")).to.equal(
        "Visit the graphic novels area."
      )
    })

    it("gives a generic suggestion for any other genre", function () {
      expect(recommendBookByGenre("poetry")).to.equal(
        "Browse whatever catches your eye!"
      )
    })
  })
})

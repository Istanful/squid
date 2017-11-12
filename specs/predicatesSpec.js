Squid.describe("eql")
  .it("Considers true to equal true", function() {
    return Squid.expect(true).to(eql, true)
  })
  .it("Does not go for truthy", function() {
    return Squid.expect(true).toNot(eql, "true")
  })
  .it("Considers false to not be true", function() {
    return Squid.expect(false).toNot(eql, true)
  })

Squid.describe("include")
  .it("Returns true if item is in collection", function() {
    return Squid.expect([1, 2, 3]).to(include, 1)
  })
  .it("Returns false if item is not in collection", function() {
    return Squid.expect([1, 2, 3]).toNot(include, 4)
  })
  .it("Works for strings", function() {
    return Squid.expect("ABC").to(include, "A")
  })
  .it("Works for hashes", function() {
    return Squid.expect({a: 1}).to(include, "a")
  })

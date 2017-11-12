var spec = Squid.describe("A basic spec")
spec.it("stores results", function() {
  return Squid.expect(true).to(eql, true)
})

if(Squid.results.length === 0) {
  console.log("It does not save results.")
}

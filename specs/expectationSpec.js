// An expectation can be made
var result = Squid.expect(true).to(eql, true)
if (result.success != true) { console.log("True is not considered true") }

var result2 = Squid.expect(true).to(eql, false)
if (result2.success === true) { console.log("True is considered false") }

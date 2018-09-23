// An expectation can be made
var result = Squid.expect(true).to(eql, true)
if (result.isSuccess != true) { console.log("True is not considered true") }

var result2 = Squid.expect(true).to(eql, false)
if (result2.isSuccess === true) { console.log("True is considered false") }

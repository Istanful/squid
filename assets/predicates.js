Squid.Predicate = function(compareFunc, messageFunc, expected, actual) {
  this.expected = expected
  this.actual = actual
  this.compareFunc = compareFunc
  this.messageFunc = messageFunc

  this.compare = function(trueValue) {
    var isSuccess = this.compareFunc(this.expected, this.actual) === trueValue
    var message = this.messageFunc(isSuccess, this.expected, this.actual)
    return new Squid.Result(isSuccess, message)
  }
}

var eql = function(expected, actual) {
  return new Squid.Predicate(
    function(expected, actual) { return expected === actual },
    function(isSuccess, expected, actual) {
      var message
      if (isSuccess) { return expected + " equals " + actual }
      else { return "Expected " + expected + " to equal " + actual }
    },
    expected,
    actual
  )
}

var include = function(expected, actual) {
  return new Squid.Predicate(
    function(expected, actual) {
      if (typeof expected === "string") {
        for (var i = 0; i < expected.length; i++)
          if (expected[i] === actual) return true;
        return false
      }
      return expected.hasOwnProperty(actual)
    },
    function(isSuccess, expected, actual) {
      var message
      if (isSuccess) { message = expected + " includes " + actual }
      else { message = "Expected " + expected + " to include " + actual }
      return message
    },
    expected,
    actual
  )
}

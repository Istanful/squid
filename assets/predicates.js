Squid.Predicate = class {
  constructor(compareFunc, messageFunc, expected, actual) {
    this.expected = expected
    this.actual = actual
    this.compareFunc = compareFunc
    this.messageFunc = messageFunc
  }

  compare(trueValue) {
    const isSuccess = this.compareFunc(this.expected, this.actual) === trueValue
    const message = this.messageFunc(isSuccess, this.expected, this.actual)
    return new Squid.Result(isSuccess, message)
  }
}

var eql = (expected, actual) => {
  return new Squid.Predicate(
    (expected, actual) => expected === actual,
    (isSuccess, expected, actual) => {
      if (isSuccess) { return expected + " equals " + actual }
      else { return "Expected " + expected + " to equal " + actual }
    },
    expected,
    actual
  )
}

var include = (expected, actual) => {
  return new Squid.Predicate(
    (expected, actual) => {
      if (typeof expected === "string") {
        for (let i = 0; i < expected.length; i++)
          if (expected[i] === actual) return true;
        return false
      }
      return expected.hasOwnProperty(actual)
    },
    (isSuccess, expected, actual) => {
      if (isSuccess) { return expected + " includes " + actual }
      else { return "Expected " + expected + " to include " + actual }
    },
    expected,
    actual
  )
}

Squid.Expectation = class {
  constructor(subject) {
    this.subject = subject
  }

  to(predicate, result) {
    return predicate(this.subject, result).compare(true)
  }

  toNot(predicate, result) {
    return predicate(this.subject, result).compare(false)
  }
}

Squid.expect = function(subject) {
  return new Squid.Expectation(subject)
}

Squid.Expectation = function(subject) {
  this.subject = subject

  this.to = function(predicate, result) {
    return predicate(this.subject, result).compare(true)
  }

  this.toNot = function(predicate, result) {
    return predicate(this.subject, result).compare(false)
  }
}

Squid.expect = function(subject) {
  return new Squid.Expectation(subject)
}

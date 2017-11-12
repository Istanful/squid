Squid.Predicate = function(compareFunc, messageFunc, subject, result) {
  this.subject = subject
  this.result = result
  this.compareFunc = compareFunc
  this.messageFunc = messageFunc

  this.compare = function(trueValue) {
    var success = this.compareFunc(this.subject, this.result) === trueValue
    var message = this.messageFunc(success, this.subject, this.result)
    return new Squid.Result(success, message)
  }
}

var eql = function(subject, result) {
  return new Squid.Predicate(
    function(subject, result) { return subject === result },
    function(success, subject, result) {
      var message
      if (success) { message = subject + " equals " + result }
      else { message = "Expected " + subject + " to equal " + result }
      return message
    },
    subject,
    result
  )
}

var include = function(subject, result) {
  return new Squid.Predicate(
    function(subject, result) {
      if (typeof subject === "string") {
        for (var i = 0; i < subject.length; i++)
          if (subject[i] === result) return true;
        return false
      }
      return subject.hasOwnProperty(result)
    },
    function(success, subject, result) {
      var message
      if (success) { message = subject + " includes " + result }
      else { message = "Expected " + subject + " to include " + result }
      return message
    },
    subject,
    result
  )
}

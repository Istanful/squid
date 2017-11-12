Squid.Spec = function(description) {
  this.description = description

  this.it = function(description, code) {
    var result = code()
    result.nameSpace = this.description
    result.description = description
    Squid.results.push(result)
    
    if (!result.success) result.log()
    return this
  }
}

Squid.describe = function(description, code) {
  return new Squid.Spec(description, code)
}

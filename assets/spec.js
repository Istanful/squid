Squid.Spec = class {
  constructor(description) {
    this.description = description
  }

  it(description, code) {
    const result = code()
    result.nameSpace = this.description
    result.description = description
    Squid.results.push(result)

    if (!result.isSuccess) result.log()
    return this
  }
}

Squid.describe = function(description, code) {
  return new Squid.Spec(description, code)
}

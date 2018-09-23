Squid.Result = class {
  constructor(isSuccess, message) {
    this.isSuccess = isSuccess
    this.message = message
  }

  log() {
    console.log(this.nameSpace)
    console.log("\t" + this.description)
    console.log("\t\t" + this.message)
    console.log("\n")
  }
}

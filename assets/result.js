Squid.Result = function(success, message) {
  this.success = success
  this.message = message

  this.log = function() {
    console.log(this.nameSpace)
    console.log("\t" + this.description)
    console.log("\t\t" + this.message)
    console.log("\n")
  }
}

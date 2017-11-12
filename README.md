# Squid
Squid is a simple javascript testing library.

## Installation

Download the most recent version in the releases folder.
There is both minified and non-minified versions.

## Usage

### Examples
```javascript
// This describes the unit you will be testing
Squid.describe("Truth")

  // This is one spec. The first argument is the description
  // of the spec. The second argument is the code to be ran.
  // The code that is run must return a `Squid.expect` call.
  .it("considers true to be true", function() {

    // Here we assert that true equals true.
    //
    // Assertions is always made in the following format:
    // `Squid.expect(subject).to(predicate, result)`
    return Squid.expect(true).to(eql, true)
  })

  // Here we assert that true is not equal to false.
  //
  // We can negate the predicate by using `toNot`
  .it("considers true to not be false", function() {
    return Squid.expect(true).toNot(eql, false)
  })
```

### Predicates

Predicates are simple functions that compares a test subject
to a given result value. Right now Squid comes with the following predicates:

#### Eql
Returns true if the subject has the same content.
No conversion is made before comparison.

#### Include
Returns true if the subject collection contains the result.
For arrays this means the entire result value. For objects
that means the key.

#### Custom predicates
If you think that the provided predicates is not enough, you can write your own!

Behind the scenes a predicate is just a function that returns a `Squid.Result`
object. Here is the implementation for `eql`:

```javascript
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
```

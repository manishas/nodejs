var superagent = require("superagent"),
    should = require("should");

describe("Index", function () {
  it("renders HTML", function (done) {
    superagent.get("http://localhost:3000/")
      .end(function (e, res) {
        (e === null).should.equal(true);
        console.log (res.text)
        res.text.should.equal("Welcome to Shippable");
        done();
      });
  });
});

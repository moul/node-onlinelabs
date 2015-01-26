"use strict";

var Assert = require("assert");
var Client = require("..");

describe("[client]", function() {
  var client;
  var token = "dummy-token";

  beforeEach(function() {
    client = new Client();
    // client.authenticate({
    //   type: "oauth",
    //   token: token
    // });
  });

  it("should successfully execute GET /", function(next) {
    client.get("/")
      .then(function(response) {
        next();
      })
      .catch(function(response) {
        Assert.equal(0, 1);
        next();
      });
  });
});
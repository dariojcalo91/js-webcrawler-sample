var assert = require("chai").assert;
var crawl = require("../method/crawl");

describe("Crawler test", function(){
  describe("When provide a valid url", function(){
    it("should crawl the web", function(){
      assert.isString(crawl("http://books.toscrape.com/"));
    });
  });
});

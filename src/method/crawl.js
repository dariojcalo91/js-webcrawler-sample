const Crawler = require("crawler");

const c = new Crawler({
  maxConnections: 2,
  callback : function (error, res, done) {
    if(error){
        console.log(error);
    }else{
        var $ = res.$;
        const list = $("section").map(function() {
          // console.log("1", $(this, "div").text());
          // console.log("2", $(this, "div", "li").text());
          
          return $(this, "div", "li").text();
        }).get();
    }
    done();
  }
})

const crawl = function(url) {
  
  const data = c.queue(url);

  console.log("================");
  console.log(typeof data);
  console.log(data);
  console.log("================");

  return data;
};

module.exports = crawl

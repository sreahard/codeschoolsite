var request = require('superagent');

var BlogPosts = function() {};
BlogPosts.prototype = {

  find: function(id) {
    var self = this;
    var url = '/api/v1/blogPosts' + id;

    request
      .get(url)
      .end(function(err, res) {
        if (err) return console.error(err);

        self.onUpdate(res.body);
      });
  	},
};

module.exports = BlogPosts;

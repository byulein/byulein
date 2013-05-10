
/*
 * GET home page.
 */

exports.about = function(req, res){
  res.render('about', { title: 'About Me' });
};

exports.twitter = function(req, res){
  res.render('twitter', { title: 'Twitter' });
};


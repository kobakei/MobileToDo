
/*
 * GET home page.
 */

var APP_TITLE = "MobileToDo";

exports.index = function(req, res){
  res.render('index', { title: APP_TITLE })
};

exports.create = function(req, res) {
  console.log(req.body);
  res.send({});
};

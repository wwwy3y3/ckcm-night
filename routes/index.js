
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '成大成景之夜', nav: 'index' });
};

exports.specialthx = function(req, res){
  res.render('specialthx', { title: '特別感謝', nav: 'specialthx' });
};

exports.contacts = function(req, res){
  res.render('contacts', { title: '聯絡我們', nav: 'contacts' });
};

exports.actors = function(req, res){
  res.render('actors', { title: '劇組名單	', nav: 'actors' });
};

exports.guests = function(req, res){
  res.render('guests', { title: '特別來賓', nav: 'guests' });
};

exports.sponsors = function(req, res){
  res.render('sponsors', { title: '贊助廠商', nav: 'sponsors' });
};

exports.compaign = function(req, res){
  res.render('compaign', { title: '宣傳', nav: 'compaign' });
};

exports.comments = function(req, res){
  res.render('comment', { title: '留言', nav: 'comments' });
};
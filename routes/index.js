
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '成大成景之夜' });
};

exports.specialthx = function(req, res){
  res.render('specialthx', { title: '特別感謝' });
};

exports.contacts = function(req, res){
  res.render('contacts', { title: '聯絡我們' });
};

exports.actors = function(req, res){
  res.render('actors', { title: '劇組名單	' });
};

exports.guests = function(req, res){
  res.render('guests', { title: '特別來賓' });
};

exports.sponsors = function(req, res){
  res.render('sponsors', { title: '贊助廠商' });
};

exports.compaign = function(req, res){
  res.render('compaign', { title: '宣傳' });
};
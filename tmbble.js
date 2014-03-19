ajax({ url: 'http://simplyjs.io' }, function(data){
  var headline = data.match(/<h1>(.*?)<\/h1>/)[1];
  simply.title(headline);
});

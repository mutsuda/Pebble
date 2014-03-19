ajax({ url: 'http://www.tmb.cat/piu/ca_ES/piuimodesolucio.jsp?parada=0001' }, function(data){
  var headline = data.match(/<title>(.*?)<\/title>/)[1];
  var body = data.match(/<html>(.*?)<\/html>/)[1];
  simply.title(headline);
  simply.body(body)
});

ajax({ url: 'http://www.tmb.cat/piu/ca_ES/piuimodesolucio.jsp?parada=0001' }, function(data){
  var headline = data.match(/<title>(.*?)<\/title>/)[1];
  var info = data.match(/<td align="center">(.*?)<\/td>/)[2];
  var num = data.size()
  simply.title(num);
  simply.body(info)
});

var parada = "0001"
ajax({ url: 'http://www.tmb.cat/piu/ca_ES/piuimodesolucio.jsp?parada='+ parada }, function(data){
  var info = data.match(/<td align="center">(.*?)<\/td>/g)[2];
  simply.title('Parada ' + parada);
  simply.body(info)
});

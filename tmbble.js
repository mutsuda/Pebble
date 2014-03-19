console.log('Simply.js demo!');

ajax({ url: 'http://www.tmb.cat/piu/ca_ES/piuimodesolucio.jsp?parada=0001' }, function(data){
  var headline = data.match(/<h1>(.*?)<\/h1>/)[1];
  simply.title(data);
}); 

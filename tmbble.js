console.log('Simply.js demo!');

ajax({ url: 'http://www.tmb.cat/piu/ca_ES/piuimodesolucio.jsp?parada=0001' }, function(data){
  simply.title(data);
}); 

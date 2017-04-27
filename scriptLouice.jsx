window.addEventListener('load', function(event) {
  
  
  console.log('before');
  let ajax = new XMLHttpRequest();
  let url = 'http://catfacts-api.appspot.com/api/facts';
  ajax.open('get', url);
  ajax.onreadystatechange = function() {
    if(ajax.status == 200 && ajax.readyState == 4) {
      let response = JSON.parse(ajax.responseText)
      console.log('Response: ', response);
    }
  }
  ajax.send();
  
  console.log('after');
  
  
});
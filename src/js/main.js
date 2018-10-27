console.log('main.js');

const axios = require('axios');

var upload = document.getElementById('upload');
var runButton = document.getElementById('run-button');

runButton.addEventListener('click', function(e){
  let params = new URLSearchParams();
  params.append('file_name', upload.files[0]);
  params.append('file_name_value', upload.files[0]);
  axios.post('/upload', params).then(response => {
    console.log(response.status);
    console.log(response);
  });
});

//var formdata = new FormData($('#my_form').get(0));
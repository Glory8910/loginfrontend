

login = (eve) => {

  eve.preventDefault();

  let credentials = {};

  let email = document.getElementById('mail').value
  let password = document.getElementById('word').value

  credentials.email = email;
  credentials.password = password;

  console.log(credentials)

  fetch("https://loginappis.herokuapp.com/users/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials)
  })
    .then(response => response.json(credentials))
    .then(dat => {

      localStorage.setItem('token', dat.token)
      console.log(dat.token)

    })
    .catch((error) => {
      console.log(error);

    });

  document.getElementById("form").reset();





}

document.getElementById("loginuser").addEventListener('click', login);
let info = {};

info.token = localStorage.getItem('token');



urlfetch = (e) => {
  e.preventDefault();


  fetch("https://loginappis.herokuapp.com/users/mainurlpage", {
    method: 'GET',
    headers: {
      'authorization': `${localStorage.getItem('token')}`,
    }
  })
  .then(dat => {

    console.log(dat);


      })
      .catch((error) => {
        console.log(error);

      });

}

document.getElementById("urlpage").addEventListener('click', urlfetch)
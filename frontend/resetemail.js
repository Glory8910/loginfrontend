

var resetemail = (eve) => {

    eve.preventDefault();

    let emailtochange = {};

    
        let email = document.getElementById('mail').value
 

       emailtochange.email = email
       
        fetch("https://loginappis.herokuapp.com/users/reset", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailtochange)
        })
            .then(response => response.json(emailtochange))
            .then(dat => {

                console.log('Success:', dat);

            })
            .catch((error) => {
                console.log(error);

            });



    document.getElementById("form1").reset();


}



document.getElementById("submitmail").addEventListener('click', resetemail);



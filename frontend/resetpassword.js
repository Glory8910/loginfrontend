

var resetdoc = (eve) => {

    eve.preventDefault();

    let newcredentials = {};

    if (document.getElementById('word').value === document.getElementById('word1').value) {

        let email = document.getElementById('mail').value
        let password = document.getElementById('word').value

        newcredentials.email = email
        newcredentials.password = password;
       
       

        console.log(newcredentials)

        fetch("https://loginappis.herokuapp.com/users/resetpassword", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newcredentials)
        })
            .then(response => response.json(newcredentials))
            .then(dat => {

                console.log('Success:', dat);

            })
            .catch((error) => {
                console.log(error);

            });



    }
    else {
        alert("passwords don't match")
    }

    console.log(document.getElementById('form1'))
    document.getElementById("form1").reset();


}

let resetlink = (eve => {

    eve.preventDefault();
    fetch("https://loginappis.herokuapp.com/users/reset")


})

document.getElementById("resett").addEventListener('click', resetdoc);
document.getElementById('forgot').addEventListener('click', resetlink);


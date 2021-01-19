



let usercollect=(event)=>{
  
    let data={};
 

    event.preventDefault();

    let person=document.getElementById('personname').value
    let emails=document.getElementById('mail').value
    let passwords=document.getElementById('word').value
    
    
    

    data.name=person
    data.email=emails
    data.password=passwords
  

   console.log(data)
     
    
fetch("https://loginappis.herokuapp.com//users/reg", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  })
  .then(response => response.json(data))
  .then(dat => {
    
    console.log('Success:', dat);
  
   
  })
  .catch((error) => {
    console.log( error);
    
  });

document.getElementById("form").reset();
}
document.getElementById("submitdetails").addEventListener("click",usercollect);


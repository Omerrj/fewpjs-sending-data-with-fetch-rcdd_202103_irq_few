// Add your code here
fetch("http://localhost:3000/users",{
  method:"POST",
  body:{
    name:"Steve",
    email:"steve@steve.com"
  },
  headers:{
    'content-type':"application/json",
    'accept':"application/json"
  }
}).then(r=>r.json()).then(d=>console.log(d));
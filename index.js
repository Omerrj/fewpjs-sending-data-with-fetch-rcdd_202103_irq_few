// Add your code here
const submitData=( name, email )=> {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then( r  =>{
      return r.json()
    } )
    .then( d=>  {
      document.body.innerHTML = d[ "id" ]
    } )
    .catch( (e  {
      document.body.innerHTML = error.message
    } )
}
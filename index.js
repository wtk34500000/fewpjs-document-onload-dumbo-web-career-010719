// Your code goes here
 const p = document.getElementById('text');

  const domContentLoaded = () =>{
    document.addEventListener("DOMContentLoaded", event => {
        updateDOM()
    });
  }

  function updateDOM(){
      p.innerHTML="This is really cool!"
  }
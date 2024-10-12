//<div class="joke" id="jokes"> Joke is loading......</div>
  //      <button class="btn" id="jokebtn">Next Joke</button>
  //GET https://icanhazdadjoke.com/
  const jokes=document.querySelector('#jokes');
  const jokebtn=document.querySelector('#jokebtn');
  function generatejokes(){
    const setheader={
      headers:{
        Accept:"application/json"
      }
    }
    fetch(' https://icanhazdadjoke.com',setheader).then((res) => res.json())
    .then((data)=>{jokes.innerHTML=data.joke;})
    .catch((error)=>{error})
  }
  jokebtn.addEventListener('click',generatejokes);
  generatejokes();


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addnewjoke = async()=>{
    const joketext = await getdadjoke();
    
    const newli = document.createElement('LI');
    newli.append(joketext);
    jokes.append(newli);
}

const getdadjoke = async()=>{
    try {
        const config = {headers: {Accept:'application/json'}}    //adding headers, will be different for different apis...
        const respond = await axios.get('https://icanhazdadjoke.com/', config);
        return respond.data.joke;
    } catch (error) {
        return "NO JOKES AVAILABLE, ERROR!"
    }
    
}

button.addEventListener('click', addnewjoke)
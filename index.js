
const generateJoke = async () => {
    try {
        const apiKey = "BxDiP/FFcUvfXTYiRYgrpA==HTGJLchtR28WeZUk";

    const options = {
        method : "GET",
        headers:{
            "X-Api-Key" : apiKey,
        }
    }
    document.getElementById('joke').innerHTML = "Updating...";
    const res = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', options);
    const data = await res.json();
    // console.log(data[0].joke)
    document.getElementById('joke').innerHTML =  data[0].joke;
    } catch (error) {
        document.getElementById('joke').innerHTML = "error!! Please check your internet connection";
        
    }
}


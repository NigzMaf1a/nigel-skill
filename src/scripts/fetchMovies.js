export default async function fetchMovies(){
  try{
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    const res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=825def08', options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
} 


export default function Home(){
    const baseUrl = `http://www.omdbapi.com/?t=james-bond&apikey=`
    const apiKey = '8f4ddb22'

    const getMovies = async()=>{
        try{
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }
    
    return(
        <main>
            <h1>Forside</h1>
            <button onClick={getMovies}>Hent filmer</button>
        </main>
        
    )
}
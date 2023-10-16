const url = 'https://pokeapi.co/api/v2'
export async function getAllCards() {
    const reqObj = {
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch(url+"/pokemon", reqObj)
        const result = await response.json()
        return result
    } catch (error){
        console.error(error)
    }
}
const fetchData = async () => {
    try {
        const data = await getAllCards()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

fetchData()
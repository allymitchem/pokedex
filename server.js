// const express = require('express')

// const app = express()
// const port = 3000

// app.use(express.json())

// app.get('/pokemon/:name', async (req, res) => {
//     const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/${req.params.name}`
//     try {
//         const response = await fetch(pokeApiUrl)
//         const data = await response.json()
//         res.json(data)
//     } catch (error){
//         console.error(error)
//         res.status(500).json({error: 'Failed to fetch data'})
//     }
// })

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// })
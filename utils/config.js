require('dotenv').config()

const PORT = process.env.PORT || 3001

// Baza podataka
const password = process.env.ATLAS_PASS 
const user = process.env.ATLAS_USER
const dbname = 'poruke-api'
const DB_URI = `mongodb+srv://${user}:${password}@cluster0.l0kev.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = {PORT, DB_URI}
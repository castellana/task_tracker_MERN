require('dotenv').config({ path: './config/.env' })  

const express = require('express') 
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.use(express.static('public')) 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.dbUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => {
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    })
    .catch(err => console.log(err));


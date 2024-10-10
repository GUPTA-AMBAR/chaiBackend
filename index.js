require('dotenv').config();
const express = require('express') // imlport statement
const app = express() // app method
const port = 3000; //localhost port

app.get('/', (req, res) => {
  res.send('Hello World!') //request ka response
})

app.get('/facebook',(req,res)=>{
  res.send("face book server")
})
app.get('/youtube',(req,res)=>{
  res.send(
    "<h1>hello youtube this side</h1>"
  )
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`) // print the desired input to the desired output
})
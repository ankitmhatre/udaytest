
const express = require('express')
const app = express()
const port = 3000

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/login', (req, res) => {

    if(req.query.username==='uday'){
        res.json({
            "token" : "ahsdkuahduysabcubshni8byebfi7we",
             "user" : {
                "name" : "uday",
                "last" : "Vasave",
                "id" :3
             }
          })
    }else{
        res.json({
            "error" : 'no such user',
            "msg" : "please try to login with a different user"
        })
    }

})


app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('Hello World!')
  })

  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
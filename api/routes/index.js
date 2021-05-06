const express = require('express')
const app = express()
const port = 3001
var cors = require('cors')
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(cors());

var judges = [];

app.get('/saluda', (req, res) => {
  res.send('Hello World!')
})

app.post('/create-judges', (req, res) => {

    addNewJudge(req.body.judge);
    res.send("Judge Added!");
    for(let i =0; i< judges.length; i++){
      console.log(judges[i]);
    }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const addNewJudge = (newJudge) => {
  judges.push(newJudge)
}

module.exports = app;

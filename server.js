const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');


const portNumber = process.env.PORT || 5500;

const db = knex({
    client: 'pg',
    connection: {
        host: 'ec2-54-195-144-105.eu-west-1.compute.amazonaws.com',
        user: 'gdavqdgyujmjak',
        password: 'a12b9a98c0749f8a4b26802ac38c4447fefc1e5b41bbd512aa5b2111036945d3',
        database: 'dbt30evqn3io7i'
    }
})

const app = express();

let intialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(intialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(intialPath, "index.html")); 
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(intialPath, "login.html"))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(intialPath, "register.html"))
})

app.get('/quiz', (req, res) => {
    res.sendFile(path.join(intialPath, "quiz.html"))
})

app.get('/book', (req, res) => {
    res.sendFile(path.join(intialPath, "book.html"))
})

app.post('/register-user', (req, res) => {
    const {name, email, password } = req.body;

    if(!name.length || !email.length || !password.length){
        res.json('fill all the fields');
    } else{
        db("users").insert({
            name: name,
            email: email,
            password: password
        })
        .returning(["name", "email"])
        .then(data => {
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.include('already exists')){
                res.json('email already exists')
            }
        })
    }
})

app.post('/login-user', (req, res) => {
    const { email, password } = req.body;

    db.select('name', 'email')
    .from('users')
    .where({
        email: email,
        password: password
    })
    .then(data => {
        if(data.length){
            res.json(data[0]);
        } else{
            res.json('email or password is incorrect');
        }
    })
})
app.listen(portNumber, (reg, res) => {
    console.log('listening on port 5500........')
})
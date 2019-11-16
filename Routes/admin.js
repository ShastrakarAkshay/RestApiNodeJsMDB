const express = require('express');
const User = require('../modals/user');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Hello');
})

router.post('/register', (req, res) => {
    const data = req.body;
    const user = new User(data);
    user.save((error, data) => { //save data in DB
        if(error){
            console.log(error);
        }else{
            res.status(202).send(data);
        }
    })
})

router.get('/login', (req, res) => {
    const userData = req.body;
    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.log(error);
        }else{
            if(!user){
                res.status(404).send('Invalid Email');
            }else if(user.password !== userData.password){
                res.status(404).send('Invalid Password');
            }else{
                res.status(200).send(user);
            }
        }
    })
})

router.get('/users', (req, res) => {
    User.find((error, data) => {
        res.status(200).send(data);
        console.log(data);
    })
})

module.exports = router;
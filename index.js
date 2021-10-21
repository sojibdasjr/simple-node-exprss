const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
const port = 3000;
//first way 

// const handler = (req, res) =>{
//     res.send('Hello from node')
// }

// app.get('/', handler);f

// 2nd way

app.get('/',(req, res)=>{
  res.send('WOW !! i am excited learing node'); 
});
const users = [
    {id:0, name: "pinky_banki", email:"pinky-banik@gmail.com"},
    {id:1, name: "sojib_das", email:"sojib_das@gmail.com"},
    {id:2, name: "farabi_Zim", email:"farabi_Zim@gmail.com"},
    {id:3, name: "monir_raman", email:"monir_zaman@gmail.com"},
    {id:4, name: "rubel_Arin", email:"rubel_arian@gmail.com"},
    {id:5, name: "rakin_hassan", email:"rakin-hassan@gmail.com"}
   
]
app.get('/users', (req, res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
    
});

//app.METHOD
app.post('/users', (req, res)=>{
   const newUser = req.body;
   newUser.id = users.length;
   users.push(newUser)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

//dynamic api

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
    
});

app.get('/fruits/mangoes/fazili', (req, res)=>{
    res.send('Yummy Yummy tok marka fazli')
})

app.listen(port, ()=>{
    console.log('listening to port', port);
});


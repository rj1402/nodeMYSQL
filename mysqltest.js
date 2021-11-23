
const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ashokveena14',
    database:'newbase'
});

//connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql connected');
}); 

const app = express();

app.listen('1995' , () => {
    console.log("server started on port 1995");
});

//Get data
app.get('' , (req, res) => {
    db.query('SELECT * FROM newtable', (err,rows,fields)=>{
        if(!err)
        res.send(rows)
        else
        console.log(err);
    }) 
});

//Get specific data
app.get('/:id' , (req, res) => {
    db.query('SELECT * FROM newtable WHERE id=?',[req.params.id]  , (err, rows, fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});

//Delete Data
app.delete ('/:id' , (req, res) => {
    db.query('DELETE  FROM newtable WHERE id=?',[req.params.id]  , (err, rows, fields)=>{
        if(!err)
        res.send('Delete success');
        else
        console.log(err);
    })
});

//Insert Data
// app.post('/newpost' , (req,res) => {

//     let multipleRowInsert = () => {
//         let query = 'INSERT INTO newtable (id, name, tagline, description) VALUES ?;';
//         let values= [
//             [3, 'Rajat Jain', 'I am a Businessman', 'Contact me!'],
//             [4, 'Rajat Jain', 'I am a Businessman', 'Contact me!']
//         ];
//     }

//     db.query(query, [values], (err, rows) => {
//         if (err) throw err;
//         console.log("All rows inserted");
//     });
  
// });

//Insert data
app.post('', (req,res) => {
const author = { name: 'Craig Buckler',  tagline: 'Exmouth', };
db.query('INSERT INTO newtable SET ?', author, (err, rows, fields) => {
  if(!err)
  res.send('successfull');
  else
  console.log(err);
});
});

//Update Data
// app.put('' , (req, res) => {
//     // const update = { name: 'Ashok Pugalia' , tagline: 'Great Boy', id:1 };
//     db.query('UPDATE newtable SET name ='Ashok'  WHERE name ='Rohit Jain' ', (err, rows, fields) =>
//      {
//         if(!err)
//         res.send('updated successfully');
//         else
//         console.log(err);
//     });
// });

app.put('', (req,res)=>{

db.connect(function(err) {  
    const newLocal = "UPDATE newtable SET name = 'Ashok' WHERE name = 'Rohit Jain'  ";
    // if (err) throw err;  
    var sql = newLocal;  
    db.query(sql, function (err, result) {  
    if (!err)
    res.send(result.affectedRows + " record(s) updated");  
    else
    console.log(err);  
    });  
    });
});  
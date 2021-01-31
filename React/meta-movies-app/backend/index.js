const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});

const app = express();



app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// GET: Fetch all movies from the database
app.get('/', (req, res) => {
    
    // db.raw("\copy cpu_live from 'C:\\Program Files\\PostgreSQL\\13\\data\\data\\cpu_live.csv' csv header")
    console.log("data2");
    // db.raw("\copy cpu_live from 'C:\\Program Files\\PostgreSQL\\13\\data\\data\\cpu_live.csv' csv header")
    db.select ('*')
        .from('cpu_live')
        .then((data) => {
            console.log(data);
            res.json(data);
        })

        // .then((data) => data.map((f) => {
        //     console.log(f);
        //     res.json(f);
            
        // }))
        .catch((err) => {
            console.log(err);
        });
    
    // db.copy ('cpu_live') .from ('C:\Program Files\PostgreSQL\13\data\data\cpu_live.csv') .delimiter (',') .csv .header;
    db('cpu_live').truncate().then((data) => {
        console.log('Truncate');
        // res.json(data.rows);
    })
    db.raw("\copy cpu_live from 'C:\\Program Files\\PostgreSQL\\13\\data\\data\\cpu_live.csv' csv header")
    .then((data) => {
        console.log(data.rows);
        // res.json(data.rows);
    })

    // .then((data) => data.map((f) => {
    //     console.log(f);
    //     res.json(f);
        
    // }))
    .catch((err) => {
        console.log(err);
    });

    
});
    

//################################################################################################

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));

// app.get('/', (req, res) => {
//     db.select('*')
//         .from('cpu_live')
//         .then((data) => {
//             console.log(data);
//             res.json(data);
//         })

//         // .then((data) => data.map((f) => {
//         //     console.log(f);
//         //     res.json(f);
            
//         // }))
//         .catch((err) => {
//             console.log(err);
//         });
    
// });


// function interval(){
//     if (glob.length > 0 ) {
//         refresh();
//     }
//     else {
//         console.log('no value')
//     }
// }

// setInterval(() => {
//     interval();
// }, 1000);


// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));

// for (var i= 0 ; ;i++){
//     refresh();
// }
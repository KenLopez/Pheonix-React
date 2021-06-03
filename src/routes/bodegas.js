var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    const sql = require('mssql')
    const config = {
        user: 'sa',
        password: '1234',
        server: 'localhost',
        database: 'PHOENIX',
        options: {
            encrypt: false
        }
    }
    new sql.ConnectionPool(config).connect().then(pool =>{
        return pool.request().query("Select * from Bodega");
    }).then(result=>{
        sql.close();
        res.send(result.recordset)
    }).catch(err =>{
        console.log(err);
        sql.close();
    })
});

module.exports = router;
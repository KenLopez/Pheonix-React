var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
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
        return pool.request().query("Select * from Usuario");
    }).then(result=>{
        sql.close();
        for (let index = 0; index < result.recordset.length; index++) {
            const row = result.recordset[index];
            if ((row.codigo == req.body.codigo) && row.password == req.body.password) {
                res.send(true)
            }
        }
        res.send(false)
    }).catch(err =>{
        console.log(err);
        sql.close();
    })
});

module.exports = router;
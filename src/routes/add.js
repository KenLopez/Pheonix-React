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
        return pool.request().query("insert into Producto values ('"+req.body.codigo+"', '"+req.body.descripcion+"', '"+req.body.precio+"', '"
        +req.body.bodega+"', '"+req.body.proveedor+"')")
    }).then(result=>{
            sql.close();
            //console.log(result);
            res.send('ok')
        }).catch(err =>{
            console.log(err);
            sql.close();
            res.send('ERROR')
    })
});

module.exports = router
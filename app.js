const express = require('express')
const bodyParser = require('body-parser')
const qrcode = require('qrcode');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('qr');
    console.log(req.body.data)
})

app.post('/',function(req,res){
    qrcode.toDataURL(req.body.data, {errorCorrectionLevel: 'H'}, (err, url)=>{
        console.log(url);
        res.render('code', {data:url});
    })
})
app.listen(3000)

	
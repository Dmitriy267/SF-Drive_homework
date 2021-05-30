const express =require ('express');
const app =express();
function MailMiddlevar (req, res, next){
    if (req.headers['Mail']!=="Alex@mail.ru"){
        next();
    }else {
       res.statusCode=401;
        res.send ('Error! The user with such mail was not found'); 
    }
}


app.get ('/',MailMiddlevar, (req, res)=>{
    res.statusCode=200;
    res.setHeader('X-Custom-Header','skillfactory');
    res.send ('Welcome, user');
}); 


function PasswordMildweare (req,res,next){
    if (req.headers['Password']!==123){
        next();
    }else {
        res.statusCode=401;
        res.send ('Error! You entered the wrong password');
    }
}
    app.post ('/', PasswordMildweare,(req, res)=>{
        console.log(req.url);
        console.log (req.headers);
    res.send ('You entered the correct password on the "POST" request');
    });
    
app.get ('/users/:id', (req, res)=>{
    const id =req.params.id;
    const sorting= req.query.sorting;
    res.send( `You have recived data on user #${id} with ${sorting} sorting`);
})

app.listen (5000, ()=>{
   console.log('Server is listening on port 5000'); 
})
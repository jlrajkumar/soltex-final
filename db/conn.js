const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://lrkjaddu:lrkjaddu@soltex-contactform.7ftfu.mongodb.net/SoltexDB?retryWrites=true&w=majority?authSource=admin`,
            {
                useNewUrlParser:true,
                useUnifiedTopology: true, 
                useCreateIndex: true   
            })
        .then(()=>{ console.log("Connected to DB - Soltex Systems")})
        .catch((err)=> {console.log(err);});
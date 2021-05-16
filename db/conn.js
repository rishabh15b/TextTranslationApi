const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/myapp', {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(() => {
    console.log("Connection is successful");
}).catch((e) =>{
    console.log("No Connection");
});

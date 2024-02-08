const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI;

mongoose.connect(URI
    //{
    //useNewUrlParser: true,
    //useCreateIndex: true
    //}
)

const connectcion = mongoose.connection;

connectcion.once('open',() => {
    console.log('DB is connected');
});
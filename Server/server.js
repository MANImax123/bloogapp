const exp = require("express");
const app = exp();
require('dotenv').config();//process.env
const mongoose = require("mongoose");
const userApp = require("./APIs/userAPI");
const authorApp = require("./APIs/authorAPI");
const adminApp = require("./APIs/adminAPI");
const cors=require('cors')
app.use(cors())

const port = process.env.PORT || 4000;

// Root route handler
app.get('/', (req, res) => {
    res.json({ 
        message: 'Blog App Backend API is running!',
        status: 'success',
        timestamp: new Date().toISOString()
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy',
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

//db connection
mongoose.connect(process.env.DBURL)
    .then(() => {
        app.listen(port, () => console.log(`server listening on port ${port}..`))
        console.log("DB connection success")
    })
    .catch(err => console.log("Error in DB connection ", err))

//body parser middleware
app.use(exp.json())
//connect API rouites
app.use('/user-api',userApp)
app.use("/author-api",authorApp)
app.use('/admin-api',adminApp)

// 404 handler for undefined routes
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Route not found',
        path: req.originalUrl,
        method: req.method
    });
});

//error handler
app.use((err,req,res,next)=>{
    console.log("err object in express error handler :",err)
    
    res.status(err.status || 500).json({
        message: err.message || 'Internal server error',
        status: 'error'
    });
})
import express, { urlencoded } from 'express';
import cors from 'cors';
import sequelize from './config/sequalize.js';
import studentRoutes from './routes/studentRoutes.js';
import addressRoutes from './routes/addressRoutes.js'


const app = express();

app.use(cors({
    origin :"*"
}))

app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.use('/',studentRoutes);
app.use('/',addressRoutes);

// app.get('/', (req,res)=>{
//     res.send({message: 'hello from API'})
// })

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


app.listen(3000, ()=>{
    console.log("server running successfully at 3000");
})
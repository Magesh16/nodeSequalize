import { Router } from "express";
import { deleteStudent, getStudent, getStudentById, postStudent, updateStudent } from "../controllers/studentController.js";

const routes = Router();

routes.get('/getStudent',getStudent);
routes.get('/getStudentById/:id',getStudentById)
routes.post('/postStudent',postStudent)
routes.put('/updateStudent/:id',updateStudent);
routes.delete('/deleteStudent/:id',deleteStudent)


export default routes;
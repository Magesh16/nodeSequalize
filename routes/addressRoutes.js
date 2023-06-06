import { Router } from "express";
import { getAddress, postAddress } from "../controllers/addressController.js";

const routes = Router();

routes.get('/getAddress',getAddress);
routes.post('/postAddress',postAddress)



export default routes;
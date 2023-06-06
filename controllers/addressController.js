import {Address} from '../models/addressSchema.js';

export  const getAddress = async(req,res)=>{
    let address = await Address.findAll();
    res.send(address);
}

export const postAddress = async(req,res)=>{
    try{
        let {student_id, street,district, state } =req.body;
        await Address.create({
            student_id: student_id,
            street: street,
            district: district,
            state: state
        })
        console.log("Address Insertion successfully");
        res.send({message: "Insertion Successful"})
    }catch(err){
        res.send(err.message);
    }
}
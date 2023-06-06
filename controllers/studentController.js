import { Address } from "../models/addressSchema.js";
import { Student } from "../models/studentSchema.js"

export const getStudent = async(req,res)=>{
    const students = await Student.findAll();
    res.send(students)
}

export const getStudentById =async(req,res)=>{
    const id = req.params.id;

    const result = await Student.findByPk(id,{
        include: Address
    });

    console.log(result);
    if(result){
        res.send(result)
    }else{
        res.send([])
    }
}

export const postStudent = async(req,res)=>{
    try{
        let {name, email, age,dob} =req.body;
        await Student.create({
            name: name,
            email:email,
            age: age,
            dob: dob
        })
        console.log("New Student created");
        res.send({message:"Insertion successful"})
    }catch(err){
        res.send(err.message);
    }
}

export const updateStudent = async(req,res)=>{
    try{
        let id = req.params.id;
        let {name, email, age,dob} =req.body;
        await Student.update({
            name: name,
            email:email,
            age: age,
            dob: dob
        },{where:{id: id}})
        res.send({message:"Updation successful"})
    }catch(err){
        res.send(err.message)
    }
}

export const deleteStudent = async(req,res)=>{
    try{
        let id = req.params.id;
        await Student.destroy({
            where:{id: id}
        })
        res.send({message:"Deletion successful"})
    }catch(err){
        res.send(err);
    }
}

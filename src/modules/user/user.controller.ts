import {Request,Response} from 'express';
import { deleteSVc, userRegisterSvc,updatesvc} from './user.service';
// import { UserAccount } from '../../database/schema/user-schema';
// const { deleteUserById } = require('../../database/dao/user.dao');

//REGISTER
const register = async  (req:Request,res:Response) => {
          const newUser =  req.body
          await userRegisterSvc(newUser)
          res.sendStatus(200)
        //   res.send("Registered")
    }

//DELETEUSER
const Remove  =  async(req:Request,res:Response)=>{
    const {id} = req.params;
    const deletedUser = await deleteSVc(id)
    // if(!deletedUser)
    // {
    //     return res.status(400).json("User not found");
    // }

    res.send(deletedUser)
    
}
const Update = async(req:any,res:any)=>
{
    const id = req.params;
    const Updatedata = req.body
    const UpdatedUser = await updatesvc(id,Updatedata)
    res.send(UpdatedUser)

}
  

export {register,Remove,Update}
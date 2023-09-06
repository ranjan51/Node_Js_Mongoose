import mongoose from "mongoose";
import { UserAccount } from "../schema/user-schema"

const registeruserdao = async (newUser:any) => {

    const existingUser = await UserAccount.findOne({
        name: newUser.name,
        pwd: newUser.pwd,
      });

    if(existingUser){
        throw new Error('User already exists');
    }
    const registerUser = await  UserAccount.create(newUser)
}
//DELETEDAO
const DeleteDao = async (id:any) => {
    try {
      const del = await UserAccount.findByIdAndDelete(id).exec();
      if (!del) {
        return "User not found";
      }
      return "USER DELETED SUCCESSFULLY";
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };

  //UPDATEDAO
const UpdateDao = async (id:any,Updatedata:any) => {
    try {

        const objectId = new mongoose.Types.ObjectId(id);

      const Upd = await UserAccount.findByIdAndUpdate(objectId,{$set:Updatedata},{new:true})
      if (!Upd) {
        throw new Error("user not found")
      }
      return "USER Updated SUCCESSFULLY";
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };
export {registeruserdao,DeleteDao,UpdateDao}
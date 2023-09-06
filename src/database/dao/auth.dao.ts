import { UserAccount } from "../../database/schema/user-schema";


const findUserByNameAndPwd = async (name:any) => {
  try {
    const user = await UserAccount.findOne({ name });
    return user; 
  } catch (error) {
    throw new Error(`Error in finding user: `);
  }
};

export { findUserByNameAndPwd };

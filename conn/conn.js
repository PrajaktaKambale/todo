import { connect } from "mongoose";

const conn = async (req, res) => {
  try {
    await connect(
      "mongodb+srv://prajaktakambale2110:Test%4012345@appmanagement.uwpzd.mongodb.net/bookmanagementdatabase?retryWrites=true&w=majority"
    ).then(() => {
      console.log("Connected");
    });
  } catch (error) {
    console.log(error);
  }
};
conn();

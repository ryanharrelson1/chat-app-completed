import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const loggedinuser = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedinuser } }).select(
      "-password"
    );

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("error in getting users", error);
    res.status(500).json({ error: "internal server error " });
  }
};

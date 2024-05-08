import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import genToken from "../utils/gentoken.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const ispasswordcorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !ispasswordcorrect) {
      res.status(400).json({ error: "invalid creds" });
    }
    genToken(user._id, res);
    res.status(200).json({
      fullName: user.fullName,
      _id: user._id,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    res.status(500).json({ message: "server error in loging in user ", error });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwts", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out" });
  } catch (error) {
    res.status(500).json({ message: "server error in logging out", error });
  }
};

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password does not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "user already exist" });
    }
    const salt = await bcrypt.genSalt(12);
    const hashedpassword = await bcrypt.hash(password, salt);

    const defaultprofilepic = "https://avatar.iran.liara.run/public/41";

    const newuser = new User({
      fullName,
      username,
      password: hashedpassword,
      profilePic: defaultprofilepic,
    });
    if (newuser) {
      await newuser.save();
      genToken(newuser._id, res);

      res.status(201).json({
        fullName: newuser.fullName,
        _id: newuser._id,
        username: newuser.username,
      });
    } else {
      res.status(400).json({ message: "invalid data" });
    }
  } catch (error) {
    res.status(500).json({ message: "server error in creating user ", error });
  }
};

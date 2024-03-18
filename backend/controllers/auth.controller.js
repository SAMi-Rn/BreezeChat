import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/tokenGenerator.js"
export const signup = async (req, res) => {
   try {
       const { firstName, lastName, userName,
           password, confirmedPassword} = req.body;
       if (password !== confirmedPassword) {
           res.status(400).send("Passwords do not match");
           return;
       }
       const user = await User.findOne({ userName });
       if (user) {
          return res.status(400).send("Username already exists");    
       }
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);

       const picture = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;

       const newUser = new User({
           firstName,
           lastName,
           userName,
           password: hashedPassword,
           profilePicture: picture,
       });
       if (newUser) {
           generateTokenAndSetCookie(res, newUser._id);
           await newUser.save()

           res.status(201).json({
               _id: newUser._id,
               firstName: newUser.firstName,
               lastName: newUser.lastName,
               userName: newUser.userName,
               profilePicture: newUser.profilePicture,
           });  
       } else {
            return res.status(500).send("Error creating user")    
       }
   } catch (error) {
       console.log(error.message);
       res.status(500).json({ message: error.message });
   }
};

export const login = (req, res) => {
    res.send("Login route")
}

export const logout = (req, res) => {
    res.send("Logout route")
};



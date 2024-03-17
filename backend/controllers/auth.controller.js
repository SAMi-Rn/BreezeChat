export const signup = async(req, res) => {
   try {
       const { firstName, lastName, userName, email,
           password, confirmedPassword, gender } = req.body;
   } catch (error) {
    
   }
    res.send("Signup route")
};

export const login = (req, res) => {
    res.send("Login route")
}

export const logout = (req, res) => {
    res.send("Logout route")
};



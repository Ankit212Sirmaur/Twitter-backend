import UserService from "../service/user-service.js";

const userService = new UserService();
export const SignUp = async (req, res) =>{
    try {
        const response = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully Signup the user'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            message: 'Something went wrong while creating the new User',
            err: error, 
         })
    }
}

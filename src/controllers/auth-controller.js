import UserService from "../service/user-service.js";

const userService = new UserService();
export const SignUp = async (req, res) =>{
    try {
        const token = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(200).json({
            success: true,
            data: token,
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

export const login = async (req, res) =>{
    try {
        const token = await userService.singIn(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

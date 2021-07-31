import { SignIn } from "@clerk/clerk-react";


const Signin = () => {
    return ( <SignIn path="/signin" routing="path" />);
}
 
export default Signin;
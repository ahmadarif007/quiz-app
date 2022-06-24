import SignupImage from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={SignupImage} />
        <SignupForm />
      </div>
    </>
  );
}

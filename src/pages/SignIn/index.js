import { SignInForm } from "../../components";

function SignIn({ location }) {
  const { state } = location;
  return (
    <div>
      {state?.success && <h3> Sign was Successfull! </h3>}

      <SignInForm />
    </div>
  );
}

export default SignIn;

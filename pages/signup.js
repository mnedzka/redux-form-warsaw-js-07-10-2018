import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form';
import { Input, Button } from 'components';
import { required, email, length } from 'redux-form-validators';
import { signup } from 'actions/auth'

let SignUp = ({ signup, handleSubmit }) => {
  const handleSignup = (values) => {
    signup(values)
  }
  return (
    <form onSubmit={handleSubmit(handleSignup)}>
      <Field
        full
        standard
        name="email"
        type="text"
        component={Input}
        labelText="Email"
        validate={[required(), email()]}
      />
      <Field
        full
        standard
        name="password"
        type="password"
        component={Input}
        labelText="Password"
        validate={[required(), length({ min: 6 })]}
      />
      <Button primary blue>Submit</Button>
    </form>
  )
}

SignUp = reduxForm({
  form: "SignUpForm",
  enableReinitialialize: true,
  keepDirtyOnReinitialize: true
})(SignUp)

SignUp = connect(null, {
  signup,
})(SignUp)

export default SignUp;

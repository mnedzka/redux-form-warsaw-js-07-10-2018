import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form';
import { Input, Button } from 'components';
import { required, email, length } from 'redux-form-validators';
import { signin } from 'actions/auth';
import Router from 'next/router';


let SignIn = ({ signin, handleSubmit }) => {
  const handleSignin = (values) => {
    signin(values)
      .then(() => Router.push('/dashboard'))
  }
  return (
    <form onSubmit={handleSubmit(handleSignin)}>
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

SignIn = reduxForm({
  form: "SignInForm",
  enableReinitialialize: true,
  keepDirtyOnReinitialize: true
})(SignIn)

SignIn = connect(null, {
  signin,
})(SignIn)

export default SignIn;

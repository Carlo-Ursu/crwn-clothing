import { ReactComponent as GmailLogo } from '../../assets/google.svg';


import {
  signInWithGooglePopUp,
} from '../../utils/firebase/firebase.utils';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';


const SignInForm = () => {

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopUp();
    } catch (error) {
      console.log('user sign in failed', error);
    }

  };
  
  return (
    <SignInContainer>
      <h2>Welcome to CRWN CLOTHING</h2>
      <span>Sign in with your email and password</span>
      <form>
        <ButtonsContainer>
          <GmailLogo onClick={signInWithGoogle} />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
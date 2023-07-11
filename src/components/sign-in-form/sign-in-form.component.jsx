import { ReactComponent as GmailLogo } from '../../assets/google.svg';
import { useNavigate } from 'react-router-dom';
import { signInWithGooglePopUp } from '../../utils/firebase/firebase.utils';
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

const SignInForm = () => {
  const navigation = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopUp();
      navigation('/shop');
    } catch (error) {
      console.log('User sign-in failed', error);
    }
  };

  return (
    <SignInContainer>
      <h2>Welcome to CRWN CLOTHING</h2>
      <span>Sign in with Gmail</span>
      <form>
        <ButtonsContainer>
          <GmailLogo onClick={signInWithGoogle} />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

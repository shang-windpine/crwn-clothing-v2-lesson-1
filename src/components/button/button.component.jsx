import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted'
};

const getButton = (buttonType) => {
  switch (buttonType) {
    case BUTTON_TYPE_CLASSES.google:
      return (GoogleSignInButton);
    case BUTTON_TYPE_CLASSES.inverted:
      return (InvertedButton);
    case BUTTON_TYPE_CLASSES.base:
    default:
      return (BaseButton);
  }
};

export const Button = (props) => {
  const {
    children, buttonType, submit, clickHandler
  } = props;

  const CustomButton = getButton(buttonType);
  return (
    <CustomButton
      type={submit ? 'submit' : 'button'}
      onClick={clickHandler}
    >
      {children}
    </CustomButton>
  );
};

export default Button;

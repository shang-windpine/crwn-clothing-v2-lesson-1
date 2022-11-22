import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
};

const Button = (props) => {
  const {
    children, buttonType, submit, handleClick
  } = props;
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      type={submit ? 'submit' : 'button'}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

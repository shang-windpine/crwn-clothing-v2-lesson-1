import './form-input.styles.scss';

const FormInput = (props) => {
  const {
    label,
    inputOptions
  } = props;
  const {
    onChangeHandler,
    required,
    type,
    id,
    name,
    value
  } = inputOptions;
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        required={required}
        id={id}
        onChange={onChangeHandler}
        name={name}
        value={value}
      />
      {label && (
        <label className={`${value.length > 0 ? 'shrink' : ''} form-input-label`} htmlFor={name}>{label}</label>
      )}
    </div>
  );
};

export default FormInput;

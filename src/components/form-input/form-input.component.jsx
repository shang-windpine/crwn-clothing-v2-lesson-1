import { FormInputLabel, Group, Input } from './form-input.styles';

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
    <Group>
      <Input
        type={type}
        required={required}
        id={id}
        onChange={onChangeHandler}
        name={name}
        value={value}
      />
      {label && (
        <FormInputLabel shrink={value.length > 0} htmlFor={name}>{label}</FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

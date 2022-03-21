import TextField from "@material-ui/core/TextField";

export const InputField = ({
  fullWidth,
  variant,
  label,
  type,
  placeholder,
  value,
}) => {
  return (
    <TextField
      id="filled-secondary"
      label={label}
      type={type}
      variant={variant}
      color="secondary"
      fullWidth={fullWidth}
      placeholder={placeholder}
    />
  );
};

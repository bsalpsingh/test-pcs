import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export const RadioButtonsGroup = ({ optionsList, callBack }) => {
  const [value, setValue] = React.useState(optionsList[0]);

  const handleChange = (event) => {
    setValue(event.target.value);
    //   callback fxn to update parent start
    callBack(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        {optionsList.map((option) => (
          <FormControlLabel value={option} control={<Radio />} label={option} />
        ))}
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel
          value="Third Gender"
          control={<Radio />}
          label="Third Gender"
        /> */}
      </RadioGroup>
    </FormControl>
  );
};

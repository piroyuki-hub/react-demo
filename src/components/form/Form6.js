import React from 'react';
import { TextField } from '@material-ui/core';
import { useController, useForm } from 'react-hook-form';

const Input = ({ control, name }) => {
  const {
    field: { ref, ...inputProps },
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: 'Default',
  });

  return <TextField {...inputProps} inputRef={ref} />;
};

export const Form6 = () => {
  const { control } = useForm();

  return <Input name="firstName" control={control} />;
};

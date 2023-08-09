import React from 'react';
import classes from './Input.module.css';

interface InputProps {
  label: string;
  input: any;
}


const Input = React.forwardRef((props: InputProps, ref: any): JSX.Element => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        {...props.input}
      />
    </div>
  )
});

export default Input;
import React from 'react';
import { TextField, Grid } from '@material-ui/core';

const Input = ({ name, onChange, label, half, autoFocus, type, value }) => (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField 
          type={type}     
          name={name}
          defaultValue = {value}
          onChange={onChange}          
          variant="outlined"
          required
          fullWidth       
          label={label}
          autoFocus={autoFocus}
           
        />
    </Grid>
);

export default Input;
import React, { useState, useEffect } from 'react'
import { Grid, TextField } from '@material-ui/core';
import { useForm, Form } from '../../components/useForm';
import Controls from '../../components/controls/Controls';

const initialFieldsValues = {
  fullName: ``,
  firstName: ``,
  city: ``,
  email: ``,
  mobile: ``,
  messageDate: new Date(),
}
export default function UserForm() {

  const {
    values,
    setValues,
    handleInputChange,
  } = useForm(initialFieldsValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={3}>
          <Controls.Input
            name="fullName"
            label="Nom"
            value={values.fullName}
            onChange={handleInputChange} />
          <Controls.Input
            label="Prénom"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange} />
          <Controls.Input
            label="Ville"
            name="city"
            value={values.city}
            onChange={handleInputChange} />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange} />
          <Controls.Input 
            label="Téléphone"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange} />
          <div>
            <Controls.Button
              type="submit"
              text="Valider" />
            <Controls.Button
              text="Annuler"
              color="default" />
          </div>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Form>
  )
}
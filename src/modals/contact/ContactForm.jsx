import React from 'react';
import { Grid } from '@material-ui/core';
import { useForm, Form } from '../../components/useForm';
import Controls from '../../components/controls/Controls';
import * as contactService from '../../services/contactService';

const initialFieldsValues = {
  fullName: ``,
  firstName: ``,
  city: ``,
  email: ``,
  phoneNumber: ``,
  messageDate: new Date(),
}
export default function ContactForm() {

  const validate = (fieldValues = values) => {
    let temp = {...errors}
    if ('firstName' in fieldValues)
      temp.firstName = (/^([a-zA-Z\u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/).test(fieldValues.firstName) ? `` : `Un prénom facilitera nos échanges`
    if ('email' in fieldValues)
      temp.email = (/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/).test(fieldValues.email) ? `` : `Votre email n'est pas valide`
    setErrors({
      ...temp
    })

    if (fieldValues === values)
      return Object.values(temp).every(x => x === ``);
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFieldsValues, true, validate);

  const handleSubmit = e => {
    e.preventDefault()
    if(validate())
      contactService.registerContact(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={3}>
          <Controls.Input
            name="fullName"
            label="Nom"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName} />
          <Controls.Input
            label="Prénom"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          error={errors.firstName} />
          <Controls.Input
            label="Ville"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          error={errors.city} />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          error={errors.email} />
          <Controls.Input 
            label="Téléphone"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleInputChange}
          error={errors.phoneNumber} />
          <div>
            <Controls.Button
              type="submit"
              text="Valider"
              onClick={validate} />
            <Controls.Button
              text="Réinitialiser"
              color="default"
              onClick={resetForm} />
          </div>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Form>
  )
}
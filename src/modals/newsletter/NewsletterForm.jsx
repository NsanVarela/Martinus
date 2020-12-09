/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
import React from 'react';
import { useForm, Form } from '../../components/useForm';
import Controls from '../../components/controls/Controls';

const initialFieldsValues = {
  email: ``,
};

export default function NewsletterForm(props) {
  const { filledForm } = props;

  const validate = (fieldValues = values) => {
    const temp = { ...errors };
    const emailRegex = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    if ('email' in fieldValues) temp.email = emailRegex.test(fieldValues.email) ? `` : `Votre email n'est pas valide`;
    setErrors({
      ...temp,
    });

    if (fieldValues === values) return Object.values(temp).every(x => x === ``);
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(initialFieldsValues, true, validate);

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) filledForm(values, resetForm);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Controls.Input
        label="Email"
        name="email"
        value={values.email}
        onChange={handleInputChange}
        error={errors.email}
      />

      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end' }}>
        <Controls.Button type="submit" text="Valider" onClick={validate} />
        <Controls.Button text="Réinitialiser" color="default" onClick={resetForm} />
      </div>
    </Form>
  );
}

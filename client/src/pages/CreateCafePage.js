import React from 'react';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button';
import { PageContainer } from '../layout/PageContainer';
import { SectionTitle } from '../layout/SectionTitle';
import { Form } from '../layout/Form';
import { useFormik } from 'formik';

export function CreatePagePage() {
  const formik = useFormik({
    initialValues: {
      cafename: '',
      city: '',
      description: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <PageContainer>
      <SectionTitle>Création du cafe</SectionTitle>
      <Form formik={formik} button={() => <Button type="submit">Créer</Button>}>
        <TextField id="cafename" outlined label="Nom" type="text"></TextField>
        <TextField id="city" outlined label="Ville" type="text"></TextField>
        <TextField
          id="description"
          row={5}
          textarea
          outlined
          label="Description"
          type="text"
        ></TextField>
      </Form>
    </PageContainer>
  );
}

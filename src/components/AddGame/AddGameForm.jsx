import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { addGameFormInitialValues } from '../../utils/constans/initialValues';
import { addGameYupSchema } from '../../utils/validate/addGameSchema';
import { useState } from 'react';

import { addGame } from '../../services/playpikApi/games';

const AddGameForm = ({ setPreviewImage }) => {
  const [imageFile, setImageFile] = useState(null);

  const handleChange = setFieldValue => e => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreviewImage(URL.createObjectURL(file));
    setFieldValue('imgURL', file.name);
  };

  return (
    <Formik
      initialValues={addGameFormInitialValues}
      validationSchema={addGameYupSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await addGame(imageFile, values);
        setSubmitting(false);
        resetForm();
        setPreviewImage(null);
        setImageFile(null);
      }}
    >
      {({ setFieldValue, errors, touched, isSubmitting }) => (
        <Form className="form">
          <div className="relative">
            <label
              htmlFor="file"
              className={`form__label-file
            ${errors.imgURL ? 'border-red-500' : ''}
             ${!errors.imgURL && touched.imgURL ? 'border-accent' : ''}`}
            >
              Choose image
            </label>

            <Field
              name="file"
              type="file"
              className="hidden"
              id="file"
              onChange={handleChange(setFieldValue)}
            />
            <ErrorMessage
              name="imgURL"
              className="form__error"
              component={'span'}
            />
          </div>

          <div className="relative">
            <label htmlFor="title" className="form__label">
              Add Game Title
            </label>
            <Field
              name="title"
              type="text"
              className={`form__input ${errors.title ? 'border-red-500' : ''}
             ${!errors.title && touched.title ? 'border-accent' : ''}`}
              id="title"
            />
            <ErrorMessage
              name="title"
              className="form__error"
              component={'span'}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submiting' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddGameForm;

AddGameForm.propTypes = {
  setPreviewImage: PropTypes.func.isRequired,
};

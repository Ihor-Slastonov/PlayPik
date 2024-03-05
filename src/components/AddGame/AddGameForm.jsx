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
            <p className="form__label">Choose image</p>
            <label
              htmlFor="file"
              className={`form__label-file
            ${errors.imgURL ? 'border-accent_red' : ''}
             ${!errors.imgURL && touched.imgURL ? 'border-accent_green' : ''}`}
            >
              Select image
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
              className={`form__input ${errors.title ? 'border-accent_red' : ''}
             ${!errors.title && touched.title ? 'border-accent_green' : ''}`}
              id="title"
            />
            <ErrorMessage
              name="title"
              className="form__error"
              component={'span'}
            />
          </div>

          <button
            type="submit"
            disabled={errors.title || errors.imgURL}
            className={`px-8 py-4 text-xl border border-semi-dark hover:border-light duration-500
            ${errors.title && errors.imgURL ? 'border-accent_red hover:border-accent_red' : ''}
            ${
              !errors.title && touched.title && !errors.imgURL && touched.imgURL
                ? 'border-accent_green hover:border-accent_green hover:text-accent_green'
                : ''
            }
           disabled:border-accent_red`}
          >
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

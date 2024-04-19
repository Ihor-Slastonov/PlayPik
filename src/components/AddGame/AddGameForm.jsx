import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { addGameFormInitialValues } from '../../utils/constans/initialValues';
import { addGameYupSchema } from '../../utils/validate/addGameSchema';
import { useState } from 'react';

import { addGameAndUpdateLocalGames } from '../../services/playpikApi/games';
import { usePlayPik } from '../../utils/hooks/usePlayPik';
import { gameCategories } from '../../utils/constans/gameValuse';

const AddGameForm = ({ setPreviewImage }) => {
  const [imageFile, setImageFile] = useState(null);
  const { setGames } = usePlayPik();

  const handleChange = setFieldValue => e => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreviewImage(URL.createObjectURL(file));
    setFieldValue('imgURL', file.name);
  };

  const handleNoImageClick = setFieldValue => () => {
    setFieldValue('imgURL', '');
  };

  return (
    <Formik
      initialValues={addGameFormInitialValues}
      validationSchema={addGameYupSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const updatesData = await addGameAndUpdateLocalGames(imageFile, values);
        setGames(updatesData);
        setSubmitting(false);
        resetForm();
        setPreviewImage(null);
        setImageFile(null);
      }}
    >
      {({ setFieldValue, errors, touched, isSubmitting }) => (
        <Form className="form">
          {/* Select image */}
          <div className="relative">
            <p className="form__label">Choose game image</p>
            <label
              htmlFor="file"
              className={`form__label-file
            ${errors.imgURL ? 'border-accent_red' : ''}
             ${!errors.imgURL && touched.imgURL ? 'border-accent_green' : ''}`}
            >
              Select image
            </label>

            <button type="button" onClick={handleNoImageClick(setFieldValue)}>
              No image
            </button>

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
              Add game title
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

          {/* Select game type */}

          <div className="relative">
            <p className="form__label">Select game type</p>
            <div
              role="group"
              aria-labelledby="game-radio-group"
              className="flex items-center gap-6"
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <Field type="radio" name="type" value="single" />
                Single
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <Field type="radio" name="type" value="multiplayer" />
                Multiplayer
              </label>
            </div>
            <ErrorMessage
              name="type"
              className="form__error"
              component={'span'}
            />
          </div>

          {/* Select games categories */}

          <div className="relative">
            <label htmlFor="category" className="form__label">
              Select game category*
            </label>
            <Field
              name="category"
              as="select"
              className={`form__input ${errors.category ? 'border-accent_red' : ''}
             ${!errors.category && touched.category ? 'border-accent_green' : ''} cursor-pointer`}
              id="category"
            >
              {gameCategories.map(game => (
                <option key={game} value={game}>
                  {game}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="category"
              className="form__error"
              component={'span'}
            />
          </div>

          <button
            type="submit"
            disabled={
              errors.title || errors.imgURL || errors.category || errors.type
            }
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

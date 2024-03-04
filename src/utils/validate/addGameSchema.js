import * as Yup from 'yup';

export const addGameYupSchema = Yup.object({
  title: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  imgURL: Yup.string().required('Required'),
});

export const addGameValidationSchema = Yup.object().shape({
  imgURL: Yup.string().required('Image URL is required'),
  title: Yup.string().required('Title is required'),
  rating: Yup.number()
    .required('Rating is required')
    .min(0, 'Rating must be greater than or equal to 0')
    .integer('Rating must be an integer'),
});

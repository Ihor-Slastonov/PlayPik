import clsx from 'clsx';
import { useField } from 'formik';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="relative">
      <label htmlFor={props.id || props.name} className="block capitalize mb-1">
        {label}:
      </label>
      <input
        className={clsx(
          'w-full p-2 duration-500 ease-in-out border shadow-xl',
          'bg-dark_deep text-light outline-none',
          'hover:border-accent focus:border-accent focus:bg-dark_deep',
          {
            'border-accent_red focus:border-accent_red':
              meta.touched && meta.error,
            'border-accent_green focus:border-accent_green':
              meta.touched && !meta.error,
            'border-dark_deep': !meta.touched,
            'error-animation': meta.touched && meta.error,
          }
        )}
        {...field}
        {...props}
        autoComplete="off"
      />
      {meta.touched && meta.error ? (
        <div className="absolute text-xs text-accent_red">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextInput;

import { Formik } from 'formik';

const Login = () => {
  const checkAllAvailabilityProperties = (formikProps) => {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      resetForm,
      /* and other goodies */
    } = formikProps;

    return (
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='my-4'>
            Username:
            <br />
            <input
              type='email'
              name='username'
              autoComplete='username'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              className='px-2 py-1 border rounded border-green-500 w-full'
            />
          </label>
          {errors.username && touched.username && <span className='text-red-500 text-sm'>{errors.username}</span>}
        </div>

        <div className='mb-4'>
          <label className='my-4'>
            Password:
            <br />
            <input
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              autoComplete='current-password'
              className='px-2 py-1 border rounded border-green-500 w-full'
            />
          </label>
          {errors.password && touched.password && <span className='text-red-500 text-sm'>{errors.password}</span>}
        </div>

        <div className='flex gap-4 mt-8 justify-end'>
          <button
            type='reset'
            onClick={resetForm}
            className='flex-1 border py-2 rounded border-green-500 text-green-500'
          >
            Clear
          </button>

          <button type='submit' className='flex-1 border py-2 rounded bg-green-500 text-white' disabled={isSubmitting}>
            Login
          </button>
        </div>
      </form>
    );
  };

  const validator = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)) {
      errors.username = 'Invalid username address';
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className='m-4'>
      <Formik initialValues={{ username: '', password: '' }} validate={validator} onSubmit={onSubmit}>
        {checkAllAvailabilityProperties}
      </Formik>
    </div>
  );
};

export default Login;

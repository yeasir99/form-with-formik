import {useFormik} from 'formik'
import * as Yup from 'yup'

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First Name Is Required'),
      lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Last Name Is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email Is Required'),
      password: Yup.string()
        .required('No password provided')
        .min(8, 'Password is too short - should be 8 chars minimum')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
      confirmPassword: Yup.string()
        .required('confirm password not provided')
        .oneOf([Yup.ref('password'), null], 'Passwords not match'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values))
      formik.handleReset()
    },
  })
  return (
    <div>
      <form className="w-full max-w-lg m-auto" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col justify-center items-center my-4">
          <h4 className="uppercase text-2xl font-bold ">sign up</h4>
          <div className="bg-green-400 h-1 w-20 mt-3"></div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col justify-between sm:flex-row sm:space-x-2">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block text-xl font-semibold capitalize mb-2"
              >
                first name
              </label>
              <input
                type="text"
                id="firstName"
                className={`input ${
                  formik.touched.firstName && formik.errors.firstName
                    ? 'border-2 border-red-600'
                    : ''
                }`}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="First Name"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-600">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block text-xl font-semibold capitalize mb-2"
              >
                last name
              </label>
              <input
                type="text"
                id="lastName"
                className={`input ${
                  formik.touched.lastName && formik.errors.lastName
                    ? 'border-2 border-red-600'
                    : ''
                }`}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Last Name"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-600">{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>
          <div className="mt-2">
            <label
              htmlFor="email"
              className="block text-xl font-semibold capitalize mb-2"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              className={`input ${
                formik.touched.email && formik.errors.email
                  ? 'border-2 border-red-600'
                  : ''
              }`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label
              htmlFor="password"
              className="block text-xl font-semibold capitalize mb-2"
            >
              password
            </label>
            <input
              type="password"
              id="password"
              className={`input ${
                formik.touched.password && formik.errors.password
                  ? 'border-2 border-red-600'
                  : ''
              }`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label
              htmlFor="confirmPassword"
              className="block text-xl font-semibold capitalize mb-2"
            >
              confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={`input ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'border-2 border-red-600'
                  : ''
              }`}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Confirm Password"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-600">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
        </div>
        <button
          type="submit"
          className="uppercase bg-green-500 px-4 py-3 rounded text-lg text-white font-semibold tracking-wide mt-1 hover:bg-green-600 hover:text-gray-100 transition duration-300 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignUp

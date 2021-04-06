import {useFormik} from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
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
      message: Yup.string()
        .min(20, 'Must be 20 characters or more')
        .required('Message Is Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values))
      formik.resetForm()
      // handle async task with this values
    },
  })
  return (
    <div>
      <form className="w-full max-w-lg m-auto" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col justify-center items-center my-4">
          <h4 className="uppercase text-2xl font-bold text-gray-500">
            connecting with us
          </h4>
          <div className="bg-green-400 h-1 w-40 mt-3"></div>
        </div>
        <div className="flex flex-wrap sm:mb-3">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className={`input ${
                formik.touched.firstName && formik.errors.firstName
                  ? 'border-2 border-red-600'
                  : ''
              }`}
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="First Name"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-600">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className={`input ${
                formik.touched.lastName && formik.errors.lastName
                  ? 'border-2 border-red-600'
                  : ''
              }`}
              name="lastName"
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
        <div className="flex flex-wrap mb-3">
          <div className="w-full px-3">
            <label className="label" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className={`input ${
                formik.touched.email && formik.errors.email
                  ? 'border-2 border-red-600'
                  : ''
              }`}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-full px-3">
            <label className="label" htmlFor="textMessage">
              Message
            </label>
            <textarea
              id="textMessage"
              name="message"
              className={`input no-resize h-48 resize-none ${
                formik.touched.message && formik.errors.message
                  ? 'border-2 border-red-600'
                  : ''
              }`}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Message"
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-600">{formik.errors.message}</div>
            ) : null}
          </div>
        </div>

        <button
          className="shadow ml-3 inline-block bg-green-300 hover:bg-green-400 focus:shadow-outline focus:outline-none text-gray-600 font-semibold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm

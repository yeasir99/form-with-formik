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
        .required('Required'),
      lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      console.log(values)
      // handle async task
    },
  })
  return (
    <div>
      <form className="w-full max-w-lg m-auto" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col justify-center items-center my-4">
          <h4 className="uppercase text-2xl font-bold text-gray-500">
            connecting with up
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
              className="input"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="input"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="Last Name"
            />
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
              className="input"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-full px-3">
            <label className="label" htmlFor="textMessage">
              Message
            </label>
            <textarea
              className=" input no-resize h-48 resize-none"
              id="textMessage"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder="Message"
            ></textarea>
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

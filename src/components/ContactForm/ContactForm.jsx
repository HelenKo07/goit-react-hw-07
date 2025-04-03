import { useDispatch, useSelector } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.contacts.items);

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact(values)
    );
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required input field"),
    number: Yuo.string()
      .matches(
        /^[+\d]?[0-9\s\-()]{3,50}$/,
        "Number must be between 3 and 50 digits"
      )
      .required("Required input field"),
  });

  return (
    <Formik
      className={css.formik}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <Field
          className={css.field}
          autoComplete="on"
          type="text"
          name="name"
        />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />
        <label className={css.label} htmlFor="number">
          Number
        </label>
        <Field
          className={css.field}
          autoComplete="on"
          type="text"
          name="number"
        />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />
        <button className={css.btnFormik} type="submit">
          Add contacts
        </button>
      </Form>
    </Formik>
  );
}

import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const FeedbackForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Username</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={phoneId}>Number</label>
        <Field type="text" name="number" id={phoneId} />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;

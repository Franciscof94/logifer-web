import axios from "axios";
import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setErrors(validateForm(form));
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    if (Object.keys(errors).length === 0) {
      axios
        .post("https://polar-thicket-79317.herokuapp.com/", data)
        .then((res) => {
          console.log(res, data)
          setResponse(true);
          setForm(initialForm);
        })
        .catch(() => {
          console.log("message not sent");
        });
    }
  };

  return {
    form,
    errors,
    response,
    setResponse,
    handleChange,
    handleSubmit,
  };
};

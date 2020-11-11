import { useState } from "react";

let useForm = ({ initialValues }) => {
  const [fields, setFields] = useState(initialValues);
  const addField = (name, value) => {
    setFields({ ...fields, [name]: value });
  };
  const removeField = (name) => {
    const filtered = fields.filter((x) => x !== name);
    setFields(filtered);
  };
  return {
    fields,
    addField,
    removeField,
    getInput: (name) => ({
      name,
      onChangeText: (text) => {
        setFields({ ...fields, [name]: text });
      },
    }),
    getPicker: (name) => ({
      name,
      onValueChange: (value) => {
        setFields({ ...fields, [name]: value });
      },
    }),
    setForm: (name, value) => {
      setFields({ ...fields, [name]: value });
    },
  };
};

export default useForm;

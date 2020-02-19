import { useLocalStorage } from "../hooks/useLocalStorage";

export const useDarkMode = (key, initialValues, cb) => {
  const [values, setValues] = useLocalStorage([key], initialValues);

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    console.log(values);
  };

  return [values, handleChanges];
};
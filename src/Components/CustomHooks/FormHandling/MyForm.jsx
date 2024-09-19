import useForm from "./FormHandling";

function MyForm() {
  const { values, errors, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
function Checkbox(props) {
  return (
    <>
      <input
        className={props.className}
        type="checkbox"
        name="isOfferable"
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

export default Checkbox;

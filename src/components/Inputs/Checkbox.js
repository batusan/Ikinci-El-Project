function Checkbox(props) {
  return (
    <>
      <input
        id={props.id}
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

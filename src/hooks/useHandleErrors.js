import useNotify from "./useNotify";

const useHandleError = async (formSubmitEvent, formikRef) => {
  const notify = useNotify;
  formSubmitEvent.preventDefault();
  await formikRef.validateForm(formikRef.values).then((res) => {
    Object.values(res).map((error) => notify("ERROR", error));
    formikRef.handleSubmit(formSubmitEvent);
  });
};

export default useHandleError;

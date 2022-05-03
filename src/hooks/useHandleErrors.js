import useNotify from "./useNotify";

const notify = useNotify;

const useHandleError = async (formSubmitEvent, formikRef) => {
  formSubmitEvent.preventDefault();
  await formikRef.validateForm(formikRef.values).then((res) => {
    Object.values(res).map((error) => notify("ERROR", error));
    formikRef.handleSubmit(formSubmitEvent);
  });
};

export default useHandleError;

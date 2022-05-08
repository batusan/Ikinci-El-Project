import useNotify from "./useNotify";

const notify = useNotify;

const useHandleError = async (formSubmitEvent, formikRef, setLoading) => {
  await formikRef.validateForm(formikRef.values).then((res) => {
    if (setLoading) {
      setLoading(false);
    }
    Object.values(res).map((error) => notify("ERROR", error));
    if (formSubmitEvent) {
      formikRef.handleSubmit(formSubmitEvent);
    } else {
      notify("ERROR", "Resim alanı zorunludur.");
    }
  });
};

export default useHandleError;

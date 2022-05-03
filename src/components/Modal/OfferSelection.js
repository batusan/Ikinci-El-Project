import RoundedCheckbox from "../Inputs/RoundedCheckbox";

function OfferSelection() {
  return (
    <div>
      <RoundedCheckbox value={"%20’si Kadar Teklif Ver"} />
      <RoundedCheckbox value={"%30’si Kadar Teklif Ver"} />
      <RoundedCheckbox value={"%40’si Kadar Teklif Ver"} />
    </div>
  );
}

export default OfferSelection;

import { useState } from "react";
import RoundedCheckbox from "../Inputs/RoundedCheckbox";

const options = [
  { value: "%20’si Kadar Teklif Ver", offer: 20 },
  { value: "%30’si Kadar Teklif Ver", offer: 30 },
  { value: "%40’si Kadar Teklif Ver", offer: 40 },
];

function OfferSelection(props) {
  const [offer, setOffer] = useState();
  const setOfferedPrice = props.setOfferPrice;

  const onSelectOffer = (offer) => {
    setOffer(offer);
    calculateOffer(offer);
  };

  const calculateOffer = (offer) => {
    const calculatedOffer = (props.productPrice * offer) / 100;
    setOfferedPrice((Math.round(calculatedOffer * 100) / 100).toFixed(2));
  };

  return (
    <div>
      {options.map((option) => {
        return (
          <RoundedCheckbox
            key={option.value}
            name="radAnswer"
            offer={option.offer}
            value={option.value}
            checked={option.offer === offer}
            onChange={() => onSelectOffer(option.offer)}
          />
        );
      })}
    </div>
  );
}

export default OfferSelection;

/*
      <RoundedCheckbox
        name="radAnswer"
        offer={20}
        value={"%20’si Kadar Teklif Ver"}
        onChange={(e) => handleChange(1, e)}
      />
      <RoundedCheckbox
        name="radAnswer"
        offer={30}
        value={"%30’u Kadar Teklif Ver"}
        onChange={(e) => handleChange(2, e)}
      />
      <RoundedCheckbox
        name="radAnswer"
        offer={40}
        value={"%40’ı Kadar Teklif Ver"}
        onChange={(e) => handleChange(3, e)}
      />
*/

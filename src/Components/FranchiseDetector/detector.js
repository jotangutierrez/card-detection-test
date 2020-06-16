import React, {useState} from "react";
import creditCardType from "../../Services/card_type_detector";

const Detector = () => {
  const [franchise, setFranchise] = useState("");

  const getFranchise = (e) => {
    let cardNumber = e.target.value;

    let cardType = creditCardType(cardNumber);

    if (cardType != null) {
      setFranchise(cardType)
    } else {
      setFranchise("")
    }
  }

  return (
      <>
        <input id={"cardNumber"} onChange={getFranchise} placeholder={"Card number"}/>
        {/*<h1>{cardNumber}</h1>*/}
        <h1 id={"franchiseName"}>{franchise}</h1>
      </>

  )
}

export default Detector;

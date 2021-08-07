import { GreenButton } from "../GreenButton";
import "./Money.scss";

export const Money = () => {
  return (
    <div className="Money-blok">
      <div className="container">
        <div className="money">
          <h1 className="money__h1">30 Days Money Back Guarantee</h1>
          <p className="money__p">
            If you are not satisfied with the services offered, we will refund
            your money. Unconditional!
          </p>
          <GreenButton />
        </div>
      </div>
    </div>
  );
};

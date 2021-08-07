import "./CustomerCard.scss";
import Two from "../../assets/images/two.png";

export const CustomerCard = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="img">
            <img src={Two} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu,
              bibendum purus scelerisque ipsum id. Fringilla ipsum elementum
              aliquam aliquam sed duis feugiat molestie nisl. Sed sit cursus
              vulputate dignissim.{" "}
            </p>
            <span>Eda Nakamoto</span>
          </div>
        </div>
      </div>
    </div>
  );
};

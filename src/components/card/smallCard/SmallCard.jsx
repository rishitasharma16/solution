import React from "react";
import styles from "./smallCrad.module.css";
import TurnSharpRightOutlinedIcon from '@mui/icons-material/TurnSharpRightOutlined';
function SmallCard(props) {
  return (
    <div className="col-lg-3 ">
      <div className={styles.cardInside}>
        <div className={styles.cardItem}>
          <h2>
            {props.number}
            <span className="d-block">{props.title}</span>
          </h2>
          <div className={styles.icons}>
            <span>{props.icons}</span>
          </div>
        </div>
        <p className={styles.arrowIcon}>
          <TurnSharpRightOutlinedIcon/><span className="ms-1 ">1.3% Up from past week</span>
        </p>
      </div>
    </div>
  );
}

export default SmallCard;

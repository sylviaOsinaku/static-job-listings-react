import React from "react";
import classes from "./Header.module.css";
import cancelImage from "../images/icon-remove.svg";
const Header = function (props) {
  const removeJobFilter = (tool) => {
    console.log(props.listOfFilteredJobs);
    console.log(tool);
    props.onRemove(tool);
  };

  return (
    <header className={classes["header-wrapper"]}>
      {props.listOfFilteredJobs.length > 0 && (
        <div className={classes["btn-container"]}>
          <div className={classes["btn-inner-container"]}>
            {props.listOfFilteredJobs.map((list) => {
              return (
                <div
                  data-role="frontend"
                  key={Math.random()}
                  className={classes["btn-wrapper"]}
                >
                  {list}
                  <button
                    onClick={() => removeJobFilter(list)}
                    data-role-remove={list}
                  >
                    <img src={cancelImage} alt="" />
                  </button>
                </div>
              );
            })}
          </div>
          <button className={classes["clear"]} onClick={props.reset}>
            Clear
          </button>
        </div>
      )}
    </header>
  );
};
export default Header;

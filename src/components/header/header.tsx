import * as React from "react";
import styles from "./header.module.scss";
import sun from "../../assets/img/sun.jpg";

export interface IProps {}

export interface IState {}

class Header extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.header}>
          <h1 className={styles.logo}>MC Weather</h1>
          <p className={styles.nav}>Home</p>
        </div>
        <img src={sun} alt="Sunset" width="100%" height="10%" />
      </React.Fragment>
    );
  }
}

export default Header;

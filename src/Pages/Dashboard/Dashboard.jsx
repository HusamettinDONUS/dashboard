import {
  FaUser,
  FaStickyNote,
  FaEnvelope,
  FaChartBar,
  FaIndustry,
  FaBuilding,
} from "react-icons/fa";
import styles from "./dashboard.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logolar_gursoy-05.png";
import guryapi from "../../assets/Images/guryapi-logo.png";
import gurmak from "../../assets/Images/gurmak-logo.png";
import pilstop from "../../assets/Images/pilstop-logo.png";
import venezia from "../../assets/Images/venezia-logo.png";
import bgmaden from "../../assets/Images/bgmaden-logo.png";
import erkaymaden from "../../assets/Images/erkaymaden-logo.png";
import blackgreen from "../../assets/Images/blackgreen-logo.png";
import parkur from "../../assets/Images/parkur-logo.png";
import sehrekmek from "../../assets/Images/sehrekmek-logo.png";
import muessese from "../../assets/Images/muessese-logo.png";
import vialand from "../../assets/Images/temapark-logo.png";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.grid}>
        <Link to="/notlar" className={styles.notesTabb}>
          <span className={styles.icon}>
            <FaStickyNote />
          </span>
          <span className={styles.text}>Not</span>
        </Link>

        <Link className={styles.personalTab} to="/personel">
          <span className={styles.icon}>
            <FaUser />
          </span>
          <span className={styles.text}>Personel</span>
        </Link>

        <Link to="#" className={styles.emorTab}>
          <span className={styles.text}>Emor</span>

          <span className={styles.icon}>
            <FaIndustry />
          </span>
        </Link>

        <Link to="/raporlar" className={styles.reportsTab}>
          <span className={styles.text}>Raporlar</span>

          <span className={styles.icon}>
            <FaChartBar />
          </span>
        </Link>

        {/* <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div> */}

        <Link to="/meeting-notes" className={styles.notesTab}>
          <span className={styles.icon}>
            <FaStickyNote />
          </span>
          <span className={styles.text}>Toplantı Notları</span>
        </Link>

        <Link to="/mesajlar" className={styles.messagesTab}>
          <span className={styles.icon}>
            <FaEnvelope />
          </span>
          <span className={styles.text}>Mesajlar</span>
        </Link>

        <div className={styles.companiesTab}>
          <Link to="#">
            <span>
              <FaBuilding />
            </span>
          </Link>
          <Link to="#">
            <div className={styles.imgContainer}>
              <img src={guryapi} alt="guryapi" />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.imgContainer}>
              <img src={gurmak} alt="gurmak" />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.imgContainer}>
              <img src={venezia} alt="venezia" />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.imgContainer}>
              <img src={pilstop} alt="pilstop" />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.imgContainer}>
              <img src={vialand} alt="vialand" />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.imgContainer}>
              <img src={parkur} alt="parkur" />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.imgContainer}>
              <img src={sehrekmek} alt="sehrekmek" />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.imgContainer}>
              <img src={muessese} alt="muessese" />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.imgContainer}>
              <img src={bgmaden} alt="bgmaden" />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.imgContainer}>
              <img src={blackgreen} alt="blackgreen" />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.imgContainer}>
              <img src={erkaymaden} alt="erkaymaden" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

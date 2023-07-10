import Reset from "../../Reset/Reset";
import "./resetlayaout.css";

const ResetLayout = ({ history }) => {
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="authlayout">
      {/* logo */}
      <div className="authlayout_logo">
        <img src="../../assets/img/Logo.png" alt="logo" />
      </div>
      {/* form */}
      <Reset />
      {/* actions */}
      <p className="reset_p" onClick={handleClick}>
        login ?
      </p>
    </div>
  );
};

export default ResetLayout;
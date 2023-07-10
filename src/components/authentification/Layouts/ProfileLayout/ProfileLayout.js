import Profile from "../../Profile/Profile";
import "./profilelayout.css";
import { useState } from "react";

const ProfileLayout = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="profilelayout">
      {/* appbar */}
      
      {/* sidebar */}
      {/* content */}
      <div className="profilelayout_content">
        {/* profile */}
        <div className="profilelayout_content-profile">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
import React from "react";
import "./Sidebar.css"; //import css for styling

//import icons from react-icons
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdOutlineExplore,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdOndemandVideo,
  MdOutlineWatchLater,
} from "react-icons/md";

function Sidebar({ sidebar, handleToggleSidebar }) {
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      {/*-----------------creating a list for icons-------------------------*/}

      {/*------------Home icon-------------*/}
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      {/*------------MdOutlineExplore icon-------------*/}
      <li>
        <MdOutlineExplore size={23} />
        <span>Explore</span>
      </li>
      {/*------------MdSubscriptions icon-------------*/}
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      <hr style={{ color: "#fff" }} />
      {/*------------MdLibraryBooks icon-------------*/}
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      {/*------------MdHistory icon-------------*/}
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      {/*------------MdOndemandVideo icon-------------*/}
      <li>
        <MdOndemandVideo size={23} />
        <span>Your Video</span>
      </li>
      {/*------------  MdOutlineWatchLater icon-------------*/}
      <li>
        <MdOutlineWatchLater size={23} />
        <span>Watch Later</span>
      </li>
      {/*------------MdThumbUp icon-------------*/}
      <li>
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>
      <hr style={{ color: "#fff" }} />
      {/*------------MdExitToApp icon-------------*/}
      <li>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
    </nav>
  );
}

export default Sidebar;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
    faHouse,
    faUser,
    faHashtag,
    faBookmark
} from "@fortawesome/free-solid-svg-icons";

import "../../Assets/Styles/SideBar.css";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleTrigger = () => setIsOpen(!isOpen);

    return (
        <div className="App">
            <div className="page">
                <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
                    <div className="trigger" onClick={handleTrigger}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </div>
                    <div className="sidebar-position">
                        <FontAwesomeIcon icon={faHouse} />
                        <span>Home</span>
                    </div>
                    <div className="sidebar-position">
                        <FontAwesomeIcon icon={faHashtag} />
                        <span>Explore</span>
                    </div>
                    <div className="sidebar-position">
                        <FontAwesomeIcon icon={faBookmark} />
                        <span>Bookmarks</span>
                    </div>

                    <div className="sidebar-position">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Profile</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;

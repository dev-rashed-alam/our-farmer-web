import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import { MdNotifications } from "react-icons/md";
import '@/public/styles/farmer/Notification.css';

const Notification = () => {
    return (
        <div className="dropdown-parent">
            <DropdownButton id="dropdown-notification" title={<MdNotifications />}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <div className="count">
                <span>10</span>
            </div>
        </div>
    )
}

export default Notification
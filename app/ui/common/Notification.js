"use client"
import React, {useEffect, useState} from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {MdNotifications} from "react-icons/md";
import '@/public/styles/farmer/Notification.css';
import {BsFillChatSquareQuoteFill} from "react-icons/bs";
import {FaServicestack} from "react-icons/fa";
import {findAllNotifications, toggleNotificationReadStatusById} from "@/app/service/notificationService";
import {SiTvtime} from "react-icons/si";
import {useRouter} from "next/navigation";

const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    const [unReadCount, setUnReadCount] = useState(0)
    const router = useRouter();

    useEffect(() => {
        let unReadNotifications = notifications.filter(item => item.read === false);
        setUnReadCount(unReadNotifications.length)
    }, [notifications]);

    const fetchAllNotifications = async () => {
        try {
            const {data} = await findAllNotifications()
            setNotifications(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        (async () => {
            await fetchAllNotifications()
        })()
    }, []);

    const readNotification = async (id) => {
        try {
            await toggleNotificationReadStatusById(id, true)
            let modifiedNotifications = notifications?.map(item => {
                if (item.id === id) {
                    item.read = true
                }
                return item
            })
            setNotifications(modifiedNotifications)
        } catch (e) {
            console.log(e)
        }
    }

    const renderNotifications = () => {
        const renderIcons = (item) => {
            if (item.entity === "CATALOG") {
                return <BsFillChatSquareQuoteFill/>
            } else if (item.entity === "SERVICE") {
                return <FaServicestack/>
            } else if (item.entity === "TNA") {
                return <SiTvtime/>
            } else {
                return <BsFillChatSquareQuoteFill/>
            }
        }

        const generatePageLink = async (item) => {
            let prefix = item.userType === "FARMER" ? '/farmer' : "/admin";
            let url = ""

            switch (item.data.entity) {
                case "CATALOG":
                    url = `${prefix}/catalog/${item.data.entityId}?type=view`;
                    break;
                case "SERVICE":
                    url = `${prefix}/service/${item.data.entityId}?type=view`;
                    break;
                case "TNA":
                    url = `${prefix}/service/${item.data.entityId}?type=view`;
                    break;
                case "USER":
                    url = `${prefix}/user/${item.data.entityId}?type=view`;
                    break;
                default:
                    url = "#"
                    break;
            }
            if(item.data.entityId !== null){
                router.push(url)
            }
            await readNotification(item.id)
        }

        return notifications?.map((item, index) => {
            return (
                <Dropdown.Item onClick={() => generatePageLink(item)} key={`notification_${index}`}>
                    <div className={`notification ${!item.read ? "new" : ''}`}>
                        <div className="notification-image-wrapper">
                            <div className="notification-image">
                                {renderIcons(item.data)}
                            </div>
                        </div>
                        <div className="notification-text ng-binding">
                            <span className="highlight ng-binding">
                                {item.data.title}
                            </span>
                        </div>
                    </div>
                </Dropdown.Item>
            )
        })
    }

    return (
        <div className="dropdown-parent">
            <DropdownButton id="dropdown-notification" title={<MdNotifications/>}>
                {renderNotifications()}
                {notifications.length === 0 && <div className="empty-notification">
                    <span>No Notification Found!</span>
                </div>}
            </DropdownButton>
            {unReadCount > 0 && <div className="count">
                <span>{unReadCount}</span>
            </div>}
        </div>
    )
}

export default Notification
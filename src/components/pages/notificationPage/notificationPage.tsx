"use client";
import CommonSearch from "@/components/common/commonSearch/CommonSearch";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import {
  FillStarIcon,
  StarIcon,
  TrashIcon,
} from "../../../../public/assets/icons";

const NotificationPage = () => {
  return (
    <div className="notification_page">
      <div className="filter">
        <h1>100 notifications</h1>
        <CommonSearch placeholder="Search" />
      </div>
      <div className="tabs_box">
        <Tab.Container id="left-tabs-example" defaultActiveKey="all">
          <Nav variant="tabs" className="nav">
            <Nav.Item>
              <Nav.Link eventKey="all">all</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Achive">Achive</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="all">
              <ul>
                <li>
                  <Link href={"/"}>
                    <button>
                      <StarIcon />
                    </button>
                    gyms play a vital role in promoting an active and healthy{" "}
                    <span>just now</span>
                  </Link>
                  <button className="trash_btn">
                    <TrashIcon />
                  </button>
                </li>
                <li>
                  <Link href={"/"}>
                    <button>
                      <FillStarIcon />
                    </button>
                    gyms play a vital role in promoting an active and healthy{" "}
                    <span>just now</span>
                  </Link>
                  <button className="trash_btn">
                    <TrashIcon />
                  </button>
                </li>
              </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="Achive">
              <ul>
                <li className="active">
                  <Link href={"/"}>
                    <button>
                      <StarIcon />
                    </button>
                      gyms play a vital role in promoting an active and healthy{" "}
                    <span>just now</span>
                  </Link>
                  <button className="trash_btn">
                    <TrashIcon />
                  </button>
                </li>
                <li className="readed">
                  <Link href={"/"}>
                    <button>
                      <FillStarIcon />
                    </button>
                      gyms play a vital role in promoting an active and healthy{" "}
                    <span>just now</span>
                  </Link>
                  <button className="trash_btn">
                    <TrashIcon />
                  </button>
                </li>
              </ul>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default NotificationPage;

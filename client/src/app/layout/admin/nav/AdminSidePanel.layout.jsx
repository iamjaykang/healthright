import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsCardList, BsPerson } from "react-icons/bs";
import { TiLeaf } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSidePanelOpen } from "../../../stores/sidePanel/sidePanel.selector";
import { useScreenWidth } from "../../../utils/screenWidth/screenWidth.util";
import { setIsSidePanelOpen } from "../../../stores/sidePanel/sidePanel.action";

const AdminsidePanel = () => {
  const isSidePanelOpen = useSelector(selectIsSidePanelOpen);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();

  const closeSidePanel = () => {
    dispatch(setIsSidePanelOpen(false));
  };

  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (screenWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenWidth]);

  return (
    <>
      <nav
        className={`dashboard__sidePanel${isMobile ? "--mobile" : ""} ${
          isSidePanelOpen ? "sidePanel--open " : ""
        }fixed-left`}
      >
        <RxCross2
          className="dashboard__sidePanel-close"
          onClick={closeSidePanel}
        />
        <div className="dashboard__sidePanel-branding">Healthright</div>
        <ul className="dashboard__sidePanel-list">
          <li className="dashboard__sidePanel-list-item">
            <AiOutlineHome />
            <NavLink
              to="/admin/dashboard"
              className="dashboard__sidePanel-item"
            >
              Overview
            </NavLink>
          </li>
          <li className="dashboard__sidePanel-list-item">
            <BsCardList />
            <NavLink
              to="/admin/dashboard/orders"
              className="dashboard__sidePanel-item"
            >
              Orders
            </NavLink>
          </li>
          <li className="dashboard__sidePanel-list-item">
            <TiLeaf />
            <NavLink
              to="/admin/dashboard/products"
              className="dashboard__sidePanel-item"
            >
              Products
            </NavLink>
          </li>
          <li className="dashboard__sidePanel-list-item">
            <BsPerson />
            <NavLink
              to="/admin/dashboard/customers"
              className="dashboard__sidePanel-item"
            >
              Customers
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AdminsidePanel;

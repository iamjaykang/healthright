import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsCardList, BsPerson } from "react-icons/bs";
import { TiLeaf } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSidepanelOpen } from "../../../stores/sidepanel/sidepanel.selector";
import { useScreenWidth } from "../../../utils/screenWidth/screenWidth.util";
import { setIsSidepanelOpen } from "../../../stores/sidepanel/sidepanel.action";

const AdminSidepanel = () => {
  const isSidepanelOpen = useSelector(selectIsSidepanelOpen);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();

  const closeSidepanel = () => {
    dispatch(setIsSidepanelOpen(false));
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
        className={`dashboard__sidepanel${isMobile ? "--mobile" : ""} ${
          isSidepanelOpen ? "sidepanel--open " : ""
        }fixed-left`}
      >
        <RxCross2
          className="dashboard__sidepanel-close"
          onClick={closeSidepanel}
        />
        <div className="dashboard__sidepanel-branding">Healthright</div>
        <ul className="dashboard__sidepanel-list">
          <li className="dashboard__sidepanel-list-item">
            <AiOutlineHome />
            <NavLink
              to="/admin/dashboard"
              className="dashboard__sidepanel-item"
            >
              Overview
            </NavLink>
          </li>
          <li className="dashboard__sidepanel-list-item">
            <BsCardList />
            <NavLink
              to="/admin/dashboard/orders"
              className="dashboard__sidepanel-item"
            >
              Orders
            </NavLink>
          </li>
          <li className="dashboard__sidepanel-list-item">
            <TiLeaf />
            <NavLink
              to="/admin/dashboard/products"
              className="dashboard__sidepanel-item"
            >
              Products
            </NavLink>
          </li>
          <li className="dashboard__sidepanel-list-item">
            <BsPerson />
            <NavLink
              to="/admin/dashboard/customers"
              className="dashboard__sidepanel-item"
            >
              Customers
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AdminSidepanel;

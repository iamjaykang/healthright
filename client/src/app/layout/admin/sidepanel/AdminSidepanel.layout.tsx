import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSidepanelOpen } from "../../../stores/sidepanel/sidepanel.selector";
import { useScreenWidth } from "../../../utils/screenWidth/screenWidth.util";
import { setIsSidepanelOpen } from "../../../stores/sidepanel/sidepanel.action";
import { BsPerson } from "react-icons/bs";
import { GoHome, GoPackage, GoArchive } from "react-icons/go";

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
      dispatch(setIsSidepanelOpen(false));
    }
  }, [dispatch,screenWidth]);

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
            <NavLink
              to="/admin/dashboard/overview"
              className="dashboard__sidepanel-item"
            >
              <span className="dashboard__nav-link-icon">
                <GoHome />
              </span>
              <span className="dashboard__nav-link-text">Overview</span>
            </NavLink>
          </li>
          <li className="dashboard__sidepanel-list-item">
            <NavLink
              to="/admin/dashboard/orders"
              className="dashboard__sidepanel-item"
            >
              <span className="dashboard__nav-link-icon">
                <GoPackage />
              </span>
              <span className="dashboard__nav-link-text">Orders</span>
            </NavLink>
          </li>
          <li className="dashboard__sidepanel-list-item">
            <NavLink
              to="/admin/dashboard/products"
              className="dashboard__sidepanel-item"
            >
              <span className="dashboard__nav-link-icon">
                <GoArchive />
              </span>
              <span className="dashboard__nav-link-text">Products</span>
            </NavLink>
          </li>
          <li className="dashboard__sidepanel-list-item">
            <NavLink
              to="/admin/dashboard/customers"
              className="dashboard__sidepanel-item"
            >
              <span className="dashboard__nav-link-icon">
                <BsPerson />
              </span>
              <span className="dashboard__nav-link-text">Customers</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AdminSidepanel;

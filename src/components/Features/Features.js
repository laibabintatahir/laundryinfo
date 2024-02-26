import React from "react";
import "./Features.css";
import {
  FaCalendarAlt,
  FaComments,
  FaBell,
  FaCog,
  FaChartLine,
  FaUserShield,
} from "react-icons/fa";

const AppFeatures = () => {
    return (
      <div className="app-features-container">
        <h2 className="heading-main">App Features</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="icon">
              <FaCalendarAlt />
            </div>
            <div className="text">
              <h3>Smart Scheduling</h3>
              <p>Effortlessly plan your laundry with our scheduling system. This feature allows users to set up laundry services based on their preferences, ensuring convenience and efficient time management.</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
              <FaComments />
            </div>
            <div className="text">
              <h3>Seamless Feedback Loop</h3>
              <p>
              Facilitate effective communication between users and laundry services by streamlining the feedback process on both the User and Admin Boards.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
              <FaBell />
            </div>
            <div className="text">
              <h3>Instant Order Updates</h3>
              <p>Users stay informed with instant updates on the status of their laundry orders, enhancing transparency and reducing uncertainty</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
              <FaCog />
            </div>
            <div className="text">
              <h3>Effortless Service Management</h3>
              <p>
              Simplify service administration with a user-friendly interface on the Admin Board, enabling easy addition, editing, and deletion of laundry services.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
              <FaChartLine />
            </div>
            <div className="text">
              <h3>Order Tracking Dashboard</h3>
              <p>
              Gain operational control with a centralized dashboard on the Admin Board, providing real-time insights into customer orders and statuses.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
              <FaUserShield />
            </div>
            <div className="text">
              <h3>Proactive User Account Monitoring</h3>
              <p>
              Ensure security and compliance by actively monitoring user accounts on the Admin Board, promptly addressing any irregularities or suspicious activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AppFeatures;
  
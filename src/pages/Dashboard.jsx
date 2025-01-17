import React from 'react'
import './../styles/Dashboard.css'
import  logo from './../assets/images/logo.png'
import {RiHome6Line} from "react-icons/ri";
import { FaSearch } from 'react-icons/fa'; 



function Dashboard() {
    
  return (
    <><div className='main'>
    <div className='sidemenu'>
        <div className='logo'>
            <img
            src={logo}
            alt='logo'
            className='logoimage'/>
        </div>
        <div className='menubar'>
        <div className='menubtn1'><RiHome6Line/></div>
        <div className='menubtn2'><RiHome6Line/></div>
        <div className='menubtn3'><RiHome6Line/></div>
        <div className='menubtn4'><RiHome6Line/></div>
        <div className='menubtn5'><RiHome6Line/></div>
       
        </div>

        <div className='logout'>
        <RiHome6Line/>
        </div>

    </div>
    <div className='mainbody'>
    <div className='header'>

       {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Quick Search"
          className="search-input"
        />
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
          alt="Profile"
          className="profile-image"
        />
        <div>
          <div className="profile-name">Himanshu Singh</div>
          <div className="profile-badge">Platinum Member</div>
        </div>
      
      </div>
    </div>
    <div className="dashboard-container">
      {/* Left Section: Welcome Message and Title */}
      <div className="dashboard-left">
        <div className="welcome-message">
          Welcome, Jake! <span className="wave-emoji">👋</span>
        </div>
        <h1 className="dashboard-title">Your Dashboard</h1>
      </div>

      {/* Right Section: Action Buttons */}
      <div className="dashboard-actions">
        <div className="action-button">
          <span className="icon">💳</span> {/* Example Icon */}
          <span className="action-label">Top Up</span>
        </div>
        <div className="action-button">
          <span className="icon">📤</span>
          <span className="action-label">Send</span>
        </div>
        <div className="action-button">
          <span className="icon">📥</span>
          <span className="action-label">Request</span>
        </div>
        <div className="action-button">
          <span className="icon">₿</span>
          <span className="action-label">Crypto</span>
        </div>
        <div className="action-button">
          <span className="icon">⋮</span>
          <span className="action-label">More</span>
        </div>
      </div>
    </div>
    <div className="dashboard-containers">
      {/* Left Column */}
      <div className="left-column">
        {/* Credit History */}
        <div className="credit-history card">
          <div className="credit-header">
            <h3>Credit History</h3>
            <p>$22,752.00</p>
            <span>+2.85% vs Last Week</span>
          </div>
          <div className="credit-filters">
            <button className="filter-button active">12 months</button>
            <button className="filter-button">30 days</button>
            <button className="filter-button">7 days</button>
            <button className="filter-button">24 hours</button>
          </div>
          <div className="chart-placeholder">
            {/* Insert a chart library like Chart.js or react-chartjs-2 */}
            <p>Chart Placeholder</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="recent-transactions card">
          <h3>Recent Transactions</h3>
          <div className="transaction">
            <p className="transaction-name" >Halid William</p>
            <span>Money Transfer</span>
            <p className="transaction-amount">$200.00</p>
          </div>
          {/* <div className="transaction">
            <p className="transaction-name">Apple Store</p>
            <span>6 Aug 2024</span>
            <p className="transaction-amount">$1,200.00</p>
          </div>
          <div className="transaction">
            <p className="transaction-name">Farrel Putra</p>
            <span>Money Transfer</span>
            <p className="transaction-amount">$1,000.00</p>
          </div> */}
        </div>

        {/* Periodical Transactions */}
        <div className="periodical-transactions card">
          <h3>Periodical Transactions</h3>
          <div className="transaction-tags">
            <span className="transaction-tag">Training $550</span>
            <span className="transaction-tag">Internet $50</span>
            <span className="transaction-tag">Gas Station $50</span>
             </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        {/* e-Card */}
        <div className="e-card card">
          <h3>e-Card</h3>
          <p>Active</p>
          <div className="card-details">
            <p>Johar Wahyu Ngudiono</p>
            <p>04/29</p>
          </div>
        </div>

        {/* Credit Limit */}
        <div className="credit-limit card">
          <h3  color:black className='credit-limitname'>Credit Limit</h3>
          <div className="progress-bar">
            <div className="filled-bar"></div>
          </div>
          <div className="payment-details">
            <div className='minimumpaymet'>
            <p>Minimum Payment</p>
            <div className='dollar'>
                <p>$500</p>
            </div>
            </div>
            
    
            <div className='debitforperiod'>
            <p>Debit for Period</p>
                <div  className=' dollarr'>
                <p>$1,500</p>
                </div>
            
           
            </div>

           
          </div>
        </div>

        <div className="card-container">
      <h2>Get a Platinum Card for Free!</h2>
      <button className="learn-more-btn">Learn More</button>
    </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard
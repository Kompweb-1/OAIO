import React from "react";
import "../style/Dashboard.css";
import Navbar from "../components/ui/NavBar";

function Dashboard() {
  return (
    <div className='container'>
      <Navbar />
      <h1>Dashboard</h1>
      <p>
        AI principles such as transparency, accountability, and explainability
        are important considerations when developing algorithmic resources for
        investment management. Practical patterns, such as iterative testing and
        optimization, can help ensure that these resources are effective and
        reliable. High quality algebraic algorithms can help users manage their
        investments more efficiently by providing accurate and actionable
        insights and recommendations.
      </p>
      <h2>Here</h2>
      <p>
        One important aspect of using AI for investment management is ensuring
        that the algorithms used are able to accurately represent the
        complexities and nuances of the financial markets. Another important
        consideration is ensuring that the algorithms are able to adapt and
        learn from changing market conditions, in order to provide the most
        accurate and up-to-date recommendations to users.
      </p>
    </div>
  );
}

export default Dashboard;

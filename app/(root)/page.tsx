import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Pradeep",lastName:"Prabhu",email:"anutama.developers@gmail.com" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.23}
          ></TotalBalanceBox>
        </header>

        Recent transactions


      </div>
      <RightSideBar user={loggedIn}
        transactions={[]} banks={[{currentBalance:123.50},{currentBalance:400.32}]}></RightSideBar>
    </section>
  );
};

export default Home;

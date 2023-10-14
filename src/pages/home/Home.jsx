import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const Home = () => {
  const context = useContext(myContext);
  console.log(context);
  const { name } = context;
  return (
    <Layout>
      <div className="border-2 w-[500px] bg-blue-300">
        home
        <h1>name is {name}</h1>
      </div>
    </Layout>
  );
};

export default Home;

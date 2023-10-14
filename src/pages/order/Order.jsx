import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const Order = () => {
  const context = useContext(myContext);
  console.log(context);
  return (
    <Layout>
      Order
      <ul className="border-2 text-2xl text-purple-800 font-bold bg-black w-1/2 rounded-2xl p-9">
        <li>name is:) {context.state.name}</li>
        <li>class:) {context.state.class}</li>
        <li>location is :) {context.location}</li>
      </ul>
    </Layout>
  );
};

export default Order;

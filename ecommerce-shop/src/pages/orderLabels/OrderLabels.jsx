import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

function OrderLabels() {
  const { loading, order } = useContext(MyContext);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    if (order.length > 0) {
      setSelectedOrder(order[0]); // Default to the first order or implement other selection logic
    }
  }, [order]);

  if (loading) return <Loader />;

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-2xl font-bold">Order Labels</h2>
        {selectedOrder ? (
          <div className="mt-4 bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold">Order ID: {selectedOrder.id}</h3>
            <p>Status: {selectedOrder.status}</p>
            {/* Generate label content */}
            <div className="mt-4">
              <h4 className="text-md font-semibold">Order Items:</h4>
              {selectedOrder.cartItems.map(item => (
                <div key={item.id} className="mb-2">
                  <p>{item.title} - {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No orders available</p>
        )}
      </div>
    </Layout>
  );
}

export default OrderLabels;

import React, { useContext, useState } from "react";
import MyContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

function Order() {
  const { loading, order, updateOrderStatus, getOrderById, currentOrder } = useContext(MyContext);
  const [orderId, setOrderId] = useState("");

  const handleSearch = () => {
    getOrderById(orderId);
  };

  return (
    <Layout>
      {loading && <Loader />}
      <div className="p-6">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter Order ID"
          className="border p-2 rounded"
        />
        <button onClick={handleSearch} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Search</button>

        {currentOrder ? (
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Order Details</h2>
            <p><strong>ID:</strong> {currentOrder.id}</p>
            <p><strong>Status:</strong> {currentOrder.status}</p>
            <div className="mt-4">
              {currentOrder.cartItems.map(item => (
                <div key={item.id} className="mb-4">
                  <img src={item.imageUrl} alt={item.title} className="w-32 h-32 object-cover" />
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p>{item.description}</p>
                  <p>Price: {item.price}</p>
                </div>
              ))}
            </div>
            <button onClick={() => updateOrderStatus(currentOrder.id, 'Delivered')} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Mark as Delivered</button>
            <button onClick={() => updateOrderStatus(currentOrder.id, 'Shipped')} className="mt-2 ml-2 px-4 py-2 bg-yellow-500 text-white rounded">Mark as Shipped</button>
            <button onClick={() => updateOrderStatus(currentOrder.id, 'In Process')} className="mt-2 ml-2 px-4 py-2 bg-blue-500 text-white rounded">Mark as In Process</button>
          </div>
        ) : (
          <div className="mt-6">
            <h2 className="text-center text-2xl text-white">No Order Found</h2>
            <div className="mt-4">
              <h2 className="text-xl font-bold">All Orders</h2>
              {order.length > 0 ? (
                <ul>
                  {order.map(o => (
                    <li key={o.id} className="mb-2">
                      <a href={`/order/${o.id}`} className="text-blue-500 underline">{o.id} - {o.status}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-white">No orders available</p>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Order;

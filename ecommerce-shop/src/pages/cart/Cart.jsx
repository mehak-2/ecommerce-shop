import React, { useContext, useEffect, useState } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Modal from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../fireabase/FirebaseConfig";

function Cart() {
  const context = useContext(myContext);
  const { mode } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Item removed from cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const temp = cartItems.reduce((acc, item) => acc + parseInt(item.price), 0);
    setTotalAmount(temp);
  }, [cartItems]);

  const shipping = 100;
  const grandTotal = shipping + totalAmount;

  /**========================================================================
   *!                           Payment Integration
   *========================================================================**/

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    if (!name || !address || !pincode || !phoneNumber) {
      return toast.error("All fields are required");
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    const orderInfo = {
      cartItems,
      addressInfo,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: grandTotal * 100,
      currency: "INR",
      order_receipt: `order_rcptid_${name}`,
      name: "E-Bharat",
      description: "Test Transaction",
      handler: async (response) => {
        try {
          await addDoc(collection(fireDB, 'orders'), { ...orderInfo, paymentId: response.razorpay_payment_id });
          toast.success('Payment Successful');
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    const pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <Layout>
      <div
        className="bg-gray-100 pt-5 pb-[10%]"
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <h1 className="mb-10 text-center text-4xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((item, index) => {
              const { title, price, description, imageUrl } = item;
              return (
                <div
                  key={index}
                  className={`justify-between mb-6 rounded-lg border drop-shadow-xl p-6 sm:flex sm:justify-start transition-colors duration-300 ease-in-out hover:bg-gradient-to-r from-[#f5a979] to-[#7187ec] hover:text-white`}
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "linear-gradient(to right, #f19257, #2f4fe1)",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <img
                    src={imageUrl}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 lg:mt-0">
                      <h2
                        className={`text-lg font-bold transition-colors duration-300 ease-in-out ${mode === "dark" ? "text-white" : "text-[#011F9E]"} group-hover:text-white`}
                      >
                        {title}
                      </h2>
                      <h2
                        className={`text-sm ${mode === "dark" ? "text-white" : "text-white-900"} group-hover:text-white`}
                      >
                        {description}
                      </h2>
                      <p
                        className="mt-1 text-xs font-semibold text-gray-700"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        ₹{price}
                      </p>
                    </div>
                    <div
                      onClick={() => deleteCart(item)}
                      className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 hover:text-red-500 cursor-pointer active:scale-90"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
            style={{
              backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            <div className="mb-2 flex justify-between">
              <p
                className="text-gray-700"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Subtotal
              </p>
              <p
                className="text-gray-700"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                ₹{totalAmount}
              </p>
            </div>
            <div className="flex justify-between">
              <p
                className="text-gray-700"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Shipping
              </p>
              <p
                className="text-gray-700"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                ₹{shipping}
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p
                className="font-bold"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Total
              </p>
              <p
                className="font-bold"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                ₹{grandTotal}
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="mb-4 text-xl font-bold">Enter Address Details</h2>
        <input
          type="text"
          placeholder="Name"
          className="mb-2 p-2 border border-gray-300 rounded"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="mb-2 p-2 border border-gray-300 rounded"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pincode"
          className="mb-2 p-2 border border-gray-300 rounded"
          onChange={(e) => setPincode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="mb-2 p-2 border border-gray-300 rounded"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button
          onClick={buyNow}
          className="w-full rounded bg-green-500 py-2 text-white hover:bg-green-600"
        >
          Confirm Order
        </button>
      </Modal>
    </Layout>
  );
}

export default Cart;

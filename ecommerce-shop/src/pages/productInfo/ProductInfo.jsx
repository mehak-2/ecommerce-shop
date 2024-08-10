import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cartSlice";
import { fireDB } from "../../fireabase/FirebaseConfig";

function ProductInfo() {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [products, setProducts] = useState({});
  const params = useParams();

  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.id));
      setProducts(productTemp.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, [params.id]);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (products) => {
    dispatch(addToCart(products));
    toast.success("Added to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-40 py-10 mx-10">
          {products && (
            <div className="lg:flex" style={{ gap: "10px" }}>
              {" "}
              {/* Inline style for 10px gap */}
              {/* Left Section: Thumbnail Images */}
              <div className="lg:w-1/4 w-full flex flex-col space-y-2 lg:space-y-2">
                {[
                  products.imageUrl1,
                  products.imageUrl2,
                  products.imageUrl3,
                  products.imageUrl4,
                ].map((url, index) => (
                  <img
                    key={index}
                    alt={`ecommerce-thumbnail-${index}`}
                    className="w-20 h-20 object-cover object-center rounded cursor-pointer hover:opacity-75"
                    src={url}
                    onClick={() =>
                      (document.querySelector(".main-image").src = url)
                    }
                  />
                ))}
              </div>
              {/* Middle Section: Main Image */}
              <div className="lg:w-1/4 w-full flex items-center justify-center">
                <img
                  alt="ecommerce"
                  className="w-[600px] h-[600px] object-cover object-center rounded main-image"
                  src={products.imageUrl}
                />
              </div>
              {/* Right Section: Product Details */}
              <div className="lg:w-1/2 w-full flex flex-col lg:pl-10">
                <div className="lg:w-full lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    BRAND NAME
                  </h2>
                  <h1
                    className="text-3xl title-font font-medium mb-1"
                    style={{ color: "#011F9E" }}
                  >
                    {products.title}
                  </h1>
                  <div className="flex mb-4">
                    {/* Ratings and Reviews */}
                    <span className="flex items-center">
                      {/* Star Icons */}
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className={`w-4 h-4 ${
                            i < 4 ? "text-orange" : "text-gray-200"
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                      <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                  </div>
                  <p className="leading-relaxed border-b-2 mb-5 pb-5">
                    {products.description}
                  </p>
                  <div className="flex items-center">
                    <span
                      className="title-font font-medium text-2xl mr-4"
                      style={{ color: "#011F9E" }}
                    >
                      ₹{products.price}
                    </span>
                    <button
                      onClick={() => addCart(products)}
                      className="text-white bg-gradient-to-r from-[#f19257] to-[#2f4fe1] py-2 px-6 focus:outline-none border-0 rounded"
                      style={{
                        background:
                          "linear-gradient(to right, #f19257, #2f4fe1)",
                        transition: "background 0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.background =
                          "linear-gradient(to right, #ff0000, #0000ff)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background =
                          "linear-gradient(to right, #f19257, #2f4fe1)")
                      }
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default ProductInfo;

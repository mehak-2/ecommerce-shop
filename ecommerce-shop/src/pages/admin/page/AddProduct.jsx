import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";

function AddProduct() {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        style={{ backgroundColor: "#011F9E" }}
        className="px-10 py-10 rounded-xl"
      >
        <h1 className="text-center text-white text-xl mb-4 font-bold">
          Add Product
        </h1>

        <div>
          <input
            type="text"
            value={products.title}
            onChange={(e) =>
              setProducts({ ...products, title: e.target.value })
            }
            name="title"
            className="bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue placeholder:text-gray-500 outline-none"
            placeholder="Product title"
          />
        </div>

        <div>
          <input
            type="text"
            value={products.price}
            onChange={(e) =>
              setProducts({ ...products, price: e.target.value })
            }
            name="price"
            className="bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue placeholder:text-gray-500 outline-none"
            placeholder="Product price"
          />
        </div>

        <div>
          <input
            type="text"
            value={products.imageUrl}
            onChange={(e) =>
              setProducts({ ...products, imageUrl: e.target.value })
            }
            name="imageUrl"
            className="bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue placeholder:text-gray-500 outline-none"
            placeholder="Main image URL"
          />
        </div>

        <div>
          <input
            type="text"
            value={products.imageUrl1}
            onChange={(e) =>
              setProducts({ ...products, imageUrl1: e.target.value })
            }
            name="imageUrl1"
            className="bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue placeholder:text-gray-500 outline-none"
            placeholder="Additional image 1 URL"
          />
        </div>

        <div>
          <input
            type="text"
            value={products.imageUrl2}
            onChange={(e) =>
              setProducts({ ...products, imageUrl2: e.target.value })
            }
            name="imageUrl2"
            className="bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue placeholder:text-gray-500 outline-none"
            placeholder="Additional image 2 URL"
          />
        </div>

        <div>
          <input
            type="text"
            value={products.imageUrl3}
            onChange={(e) =>
              setProducts({ ...products, imageUrl3: e.target.value })
            }
            name="imageUrl3"
            className="bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue placeholder:text-gray-500 outline-none"
            placeholder="Additional image 3 URL"
          />
        </div>

        <div>
          <input
            type="text"
            value={products.imageUrl4}
            onChange={(e) =>
              setProducts({ ...products, imageUrl4: e.target.value })
            }
            name="imageUrl4"
            className="bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue placeholder:text-gray-500 outline-none"
            placeholder="Additional image 4 URL"
          />
        </div>

        <div>
          <input
            type="text"
            value={products.category}
            onChange={(e) =>
              setProducts({ ...products, category: e.target.value })
            }
            name="category"
            className="bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue placeholder:text-gray-500 outline-none"
            placeholder="Product category"
          />
        </div>

        <div>
          <textarea
            cols="30"
            rows="10"
            name="description"
            value={products.description}
            onChange={(e) =>
              setProducts({ ...products, description: e.target.value })
            }
            className="bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue placeholder:text-gray-500 outline-none"
            placeholder="Product description"
          ></textarea>
        </div>

        <div className="flex justify-center mb-3">
          <button
            style={{
              background: "linear-gradient(to right, #f19257, #2f4fe1)",
            }}
            onClick={addProduct}
            className="w-full text-blue font-bold px-2 py-2 rounded-lg"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

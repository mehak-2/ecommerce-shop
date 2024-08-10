import React from "react";
import { Link } from "react-router-dom";
import { TERipple } from "tw-elements-react";
import Navbar from "../../components/navbar/Navbar";

const cardData = [
  {
    title: "Have an account",
    text: "Reward points on every order you place",
    imgSrc:
      "https://cdn.dribbble.com/users/4236071/screenshots/11676514/media/7c543e3069b7aebb6674b80efa469704.png?resize=400x0",
    buttonLabel: "Log in",
    buttonClass: "bg-black hover:bg-green-600",
    link: "/login",
  },
  {
    title: "New to ecommerce",
    text: "Let's Create an account",
    imgSrc:
      "https://downloadillustrations.com/wp-content/uploads/2020/12/CleanShot-2020-12-06-at-15.06.46.png",
    buttonLabel: "Sign up",
    buttonClass: "bg-green-500 hover:bg-green-600",
    link: "/signup",
  },
  {
    title: "Checkout as guest",
    text: "Offers and Discounts not available when checking out as guest",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHEH8-J46jdy9TkZf0rfouxH_kBnZQAiZabzkCzkSLQ5xin-FZtIbUN7vNrtZw5JF5lM&usqp=CAU",
    buttonLabel: "Continue as guest",
    buttonClass: "bg-yellow-500 hover:bg-yellow-600",
    link: "/guest",
  },
];

const Account = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-4">
        <h1 className="text-5xl font-bold mb-4 m-20">Account</h1>
        <p className="mb-10 mt-10 m-20">
          To place an order now, log into your existing account or sign up.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-80 h-65 rounded-lg bg-gradient-to-r from-orange-200 to-blue-200 shadow-lg shadow-blue m-20 transition-transform transform hover:scale-105 hover:from-orange-400 hover:to-blue-400"
            >
              <a href="#!">
                <img
                  className="w-full h-40 rounded-t-lg object-cover"
                  src={card.imgSrc}
                  alt={card.title}
                />
              </a>
              <div className="p-10">
                <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-blue-900">
                  {card.title}
                </h5>
                <p className="mb-4 text-sm text-neutral-600 dark:text-blue">
                  {card.text}
                </p>
                <Link to={card.link}>
                  <TERipple>
                    <button
                      type="button"
                      className={`inline-block rounded px-4 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-opacity-80 ${card.buttonClass}`}
                    >
                      {card.buttonLabel}
                    </button>
                  </TERipple>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Account;

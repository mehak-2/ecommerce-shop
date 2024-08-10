import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import {
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../fireabase/FirebaseConfig";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Login() {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOTP] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(loading);
    }
  };

  const sendOtp = () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = signInWithPhoneNumber(auth, phone, recaptcha);
      console.log("confirmation phone", confirmation);
      setUser(confirmation);
    } catch (error) {
      toast.error("Error occurred while sending otp!!!", error);
    }
  };

  const verifyOtp = async () => {
    try {
      await user.confirm(otp);
    } catch (error) {
      toast.error("", error);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div
        className=" bg-gray-800 px-10 py-10 rounded-xl "
        style={{ background: "#9ca3af" }}
      >
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className=" bg-gray-50 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue placeholder:text-gray-400 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-50 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue placeholder:text-gray-400 outline-none"
            placeholder="Password"
          />
        </div>

        {/* <div className="w-full flex pl-2 flex-col gap-4 ">
          <PhoneInput
            country={"in"}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            // value={this.state.phone}
            onChange={() => setPhone("+", phone)}
          />
          <button
            onClick={sendOtp}
            className="w-24 hover:opacity-80 bg-blue text-white font-bold  px-2 py-2 rounded-lg"
          >
            Send Otp
          </button>
          <div id="recaptcha"></div>
        </div>
        <div className="w-full flex pl-2 flex-col gap-4 ">
          <input
            onChange={(e) => setOTP(e.target.value)}
            placeholder="Enter otp here..."
            type="number"
            className="rounded-lg p-2 mt-3"
          />
          <button
            onClick={verifyOtp}
            className="w-24 hover:opacity-80 bg-green-700 text-white font-bold  px-2 py-2 rounded-lg"
          >
            Verify Otp
          </button>
        </div> */}
        <div className=" flex justify-center my-3">
          <button
            onClick={login}
            className=" bg-orange w-full text-white font-bold  px-2 py-2 rounded-lg"
          >
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Don't have an account{" "}
            <Link className=" text-orange font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;

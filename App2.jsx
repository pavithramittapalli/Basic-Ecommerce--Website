import { useEffect, useState } from "react";
import Website from "./Website";
import Navbar from "./Navbar";
import Footer from "./Footer";

import item1 from "./assets/image1.avif";
import item2 from "./assets/image2.avif";
import item3 from "./assets/image3.webp";
import item4 from "./assets/image4.webp";

export default function App2() {
  const [userEmail, setUserEmail] = useState("");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      // redirect to login page if not logged in
      window.location.href = "http://localhost:5173/login.html";
    } else {
      setUserEmail(email);
    }
  }, []);

  function logout() {
    localStorage.removeItem("userEmail");
    window.location.href = "http://localhost:5173/login.html";
  }

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      {/* 🎉 HORIZONTALLY CENTERED WELCOME Banner */}
      <div className="flex justify-center mt-12 px-4">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white px-10 py-8 rounded-3xl shadow-2xl max-w-2xl w-full flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-pink-300/40">
          <h2 className="text-4xl font-extrabold animate-bounce drop-shadow-lg mb-3 text-center">
            🌟 Welcome Back! 🌟
          </h2>
          <p className="text-xl text-center">
            Logged in as{" "}
            <span className="font-bold text-yellow-300 bg-white/20 px-3 py-1 rounded-lg shadow-lg">
              {userEmail}
            </span>
          </p>
          <p className="mt-1 text-sm text-center text-white/80 italic mb-4">
            Glad to see you again! 🎉
          </p>
          <button
            onClick={logout}
            className="px-8 py-3 rounded-xl bg-white text-indigo-700 font-bold hover:bg-gray-100 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        <Website
          image={item1}
          name="White Linen Shirt"
          price="2000₹"
          button="Add to cart"
          onAddToCart={handleAddToCart}
        />
        <Website
          image={item2}
          name="Blue Linen Shirt"
          price="1500₹"
          button="Add to cart"
          onAddToCart={handleAddToCart}
        />
        <Website
          image={item3}
          name="Headphones"
          price="5499₹"
          button="Add to cart"
          onAddToCart={handleAddToCart}
        />
        <Website
          image={item4}
          name="Moisturizer"
          price="499₹"
          button="Add to cart"
          onAddToCart={handleAddToCart}
        />
      </div>

      <Footer />
    </>
  );
}

const Contact = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        background: "linear-gradient(to right, #fed7aa, #fecdd3, #fbcfe8)",
      }}
    ><div className="bg-pink-100 rounded-xl shadow-md p-10 w-96 border border-pink-600 shodaw-lg">
       

        <h1 className="text-3xl font-bold text-rose-600 text-center mb-8">
          Contact Us
        </h1>

        <p className="text-lg text-gray-700 mb-5">📍 Kolkata, West Bengal</p>

        <p className="text-lg text-gray-700 mb-5">📞 +91 9876543210</p>

        <p className="text-lg text-gray-700">✉️ tastybites@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;

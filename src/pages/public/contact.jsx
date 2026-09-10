
const Contact = () => {
    return (
        <div
            className="min-h-screen flex justify-center items-center"
            style={{
                background:
                    "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)"
            }}
        >

            <div className="bg-white rounded-xl shadow-lg p-10 w-96 border border-blue-200">

                <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
                    Contact Us
                </h1>

                <p className="text-lg text-gray-700 mb-5">
                    📍 Kolkata, West Bengal
                </p>

                <p className="text-lg text-gray-700 mb-5">
                    📞 +91 9876543210
                </p>

                <p className="text-lg text-gray-700">
                    ✉️ swadhouse@gmail.com
                </p>

            </div>

        </div>
    );
};

export default Contact;



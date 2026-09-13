
// const Contact = () => {
//     return (
//         <div
//             className="min-h-screen flex justify-center items-center"
//             style={{
//                 background:
//                     "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)"
//             }}
//         >

//             <div className="bg-white rounded-xl shadow-lg p-10 w-96 border border-blue-200">

//                 <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
//                     Contact Us
//                 </h1>

//                 <p className="text-lg text-gray-700 mb-5">
//                     📍 Kolkata, West Bengal
//                 </p>

//                 <p className="text-lg text-gray-700 mb-5">
//                     📞 +91 9876543210
//                 </p>

//                 <p className="text-lg text-gray-700">
//                     ✉️ swadhouse@gmail.com
//                 </p>

//             </div>

//         </div>
//     );
// };

// export default Contact;



import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Thank you! Your message has been sent.");

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="min-h-screen bg-[#f7f5ef] px-6 py-16 text-[#26352a]">

            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="text-center">

                    <p className="text-sm font-semibold uppercase tracking-[4px] text-[#718568]">
                        Contact
                    </p>

                    <h1 className="mt-3 text-5xl font-bold">
                        We'd love to hear from you.
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-[#707970]">
                        Have a question, suggestion or just want to say hello?
                        Send us a message.
                    </p>

                </div>

                {/* Content */}
                <div className="mt-14 grid gap-8 md:grid-cols-2">

                    {/* Contact Info */}
                    <div className="rounded-[32px] bg-[#52634f] p-8 text-white md:p-10">

                        <h2 className="text-3xl font-bold">
                            Get in touch
                        </h2>

                        <p className="mt-4 leading-7 text-[#e3eadf]">
                            We are always happy to hear from our customers.
                        </p>

                        <div className="mt-10 space-y-7">

                            <div>
                                <p className="text-sm text-[#cbd7c5]">
                                    Address
                                </p>
                                <p className="mt-1 font-semibold">
                                    Kolkata, West Bengal
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-[#cbd7c5]">
                                    Phone
                                </p>
                                <p className="mt-1 font-semibold">
                                    +91 98765 43210
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-[#cbd7c5]">
                                    Email
                                </p>
                                <p className="mt-1 font-semibold">
                                    swadhouse@gmail.com
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-[32px] bg-[#fffdf8] p-8 shadow-sm md:p-10"
                    >

                        <div>
                            <label className="text-sm font-semibold">
                                Your Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                                className="mt-2 w-full rounded-2xl border border-[#d9ddcf] bg-[#f7f5ef] px-5 py-4"
                            />
                        </div>

                        <div className="mt-5">
                            <label className="text-sm font-semibold">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="mt-2 w-full rounded-2xl border border-[#d9ddcf] bg-[#f7f5ef] px-5 py-4"
                            />
                        </div>

                        <div className="mt-5">
                            <label className="text-sm font-semibold">
                                Message
                            </label>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                rows="5"
                                required
                                className="mt-2 w-full resize-none rounded-2xl border border-[#d9ddcf] bg-[#f7f5ef] px-5 py-4"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-6 w-full rounded-full bg-[#52634f] py-4 font-semibold text-white hover:bg-[#3f503d]"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Contact;

const Dashboard = () => {
    return (
        <div
            className="min-h-screen p-10"
            style={{
                background:
                    "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)"
            }}
        >

            <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
                Admin Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Total Menu Items */}
                <div className="bg-white/90 p-8 rounded-xl shadow-lg border border-blue-100 text-center">

                    <h2 className="text-xl font-bold text-gray-700">
                        Total Menu Items
                    </h2>

                    <p className="text-4xl font-bold text-blue-600 mt-4">
                        0
                    </p>

                </div>


                {/* Total Users */}
                <div className="bg-white/90 p-8 rounded-xl shadow-lg border border-blue-100 text-center">

                    <h2 className="text-xl font-bold text-gray-700">
                        Total Users
                    </h2>

                    <p className="text-4xl font-bold text-blue-600 mt-4">
                        0
                    </p>

                </div>


                {/* Total Orders */}
                <div className="bg-white/90 p-8 rounded-xl shadow-lg border border-blue-100 text-center">

                    <h2 className="text-xl font-bold text-gray-700">
                        Total Orders
                    </h2>

                    <p className="text-4xl font-bold text-blue-600 mt-4">
                        0
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;


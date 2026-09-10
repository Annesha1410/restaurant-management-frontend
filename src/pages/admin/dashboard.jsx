const Dashboard = () => {
    return (
        <div
            className="min-h-screen p-10"
            style={{
                background:
                    "linear-gradient(to right, #fed7aa, #fecdd3, #fbcfe8)"
            }}
        >

            <h1 className="text-4xl font-bold text-center text-rose-600 mb-10">
                Admin Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-white p-8 rounded-xl shadow text-center">
                    <h2 className="text-xl font-bold">
                        Total Menu Items
                    </h2>

                    <p className="text-4xl font-bold text-rose-600 mt-4">
                        0
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow text-center">
                    <h2 className="text-xl font-bold">
                        Total Users
                    </h2>

                    <p className="text-4xl font-bold text-rose-600 mt-4">
                        0
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow text-center">
                    <h2 className="text-xl font-bold">
                        Total Orders
                    </h2>

                    <p className="text-4xl font-bold text-rose-600 mt-4">
                        0
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;
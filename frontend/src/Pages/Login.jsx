import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({ userid: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        // Add authentication logic here
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Images/Background.jpg')" }}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                <h2 className="mb-5 text-gray-800 text-xl font-semibold">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 text-left">
                        <label htmlFor="userid" className="block font-bold mb-1">User ID</label>
                        <input
                            type="text"
                            id="userid"
                            name="userid"
                            value={formData.userid}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="password" className="block font-bold mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full p-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
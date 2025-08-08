import React from 'react'

export default function Navbar() {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
            {/* Header */}
            <div className="w-full text-right text-xl text-red-700 font-semibold mb-10">
                কাস্টমার সার্ভিস
            </div>

            {/* Agent Form Card */}
            <div className="bg-white text-black shadow-lg rounded-lg p-8 w-full max-w-md mb-10">
                <h2 className="text-center text-lg font-semibold mb-6">
                    এজেন্ট এর আইডি নম্বর দিয়ে খুঁজুন:
                </h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="agentType" className="block mb-1 font-medium">
                            Agent Type:
                        </label>
                        <select
                            id="agentType"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        >
                            <option>মাস্টার এজেন্ট</option>
                            <option>সাব এজেন্ট</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="agentId" className="block mb-1 font-medium">
                            Agent ID:
                        </label>
                        <input
                            type="text"
                            id="agentId"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="এজেন্ট আইডি দিন"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Banner */}
            <div className="w-full max-w-5xl bg-gradient-to-b from-yellow-300 to-yellow-200 shadow-md rounded-md p-6 text-center relative">
                <h1 className="text-4xl font-bold text-red-700 mb-4">VELKI.COM</h1>
                <p className="text-red-700 text-lg leading-relaxed font-semibold">
                    মাস্টার এজেন্ট লিস্ট: <br />
                    মাস্টার এজেন্ট আপনার একাউন্ট খুলে দিয়ে একটি পাসওয়ার্ড দিবে <br />
                    শুধু মনে রাখবেন আপনার পাসওয়ার্ড আপনি কাওকে দিবেন না! <br />
                    এজেন্ট যাতে কোন ভাবেই আপনার পাসওয়ার্ড না জানে। <br />
                    মাস্টার এজেন্ট দেয় নাম্বার গুলো দেখতে এখানে ক্লিক করুন।
                </p>
            </div>
        </div>
    )
}

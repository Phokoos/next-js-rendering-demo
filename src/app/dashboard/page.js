'use client'

import {useState} from "react";

export default function DashboardPage() {
    const [name, setName] = useState('Mykola')

    console.log('Rendering DashboardPage');
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-center text-3xl font-bold my-4">Dashboard</h1>
            <p className="text-center">Welcome to your dashboard, {name}!</p>
            <div className="text-center mt-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                    placeholder="Enter your name"
                />
            </div>
        </div>
    )
}
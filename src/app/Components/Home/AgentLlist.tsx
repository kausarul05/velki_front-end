"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import whatsApp from "@/../public/whatsApp-icon.png";

type Agent = {
    id: number;
    agent: string;
    phone: string;
    call: string;
};

// Randomly choose between two call numbers
function getRandomCallNumber() {
    const callNumbers = ["+15064058213", "+17786440268"];
    return callNumbers[Math.floor(Math.random() * callNumbers.length)];
}

// Generate 80 agents dynamically
const generateAgents = (count: number, startId: number): Agent[] => {
    const agents: Agent[] = [];
    for (let i = 1; i <= count; i++) {
        agents.push({
            id: startId + i,
            agent: "Master",
            phone: `+855${Math.floor(10000000 + Math.random() * 89999999)}`,
            call: getRandomCallNumber(),
        });
    }
    return agents;
};

// মোট 80 row বানালাম
const allAgents: Agent[] = generateAgents(80, 1000);

// Shuffle function
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Table render function
const renderTable = (title: string, data: Agent[]) => (
    <div className="overflow-x-auto my-8 border border-gray-300 rounded-md shadow-sm">
        <h3 className="text-center text-sm font-medium bg-gray-100 py-2 border-b border-gray-300">
            {title}
        </h3>
        <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-red-50 text-gray-900">
                <tr>
                    <th className="px-4 py-2 border text-center">ID NO</th>
                    <th className="px-4 py-2 border text-center">AGENT</th>
                    <th className="px-4 py-2 border text-center">APP</th>
                    <th className="px-4 py-2 border text-center">PHONE NUMBER</th>
                    <th className="px-4 py-2 border text-center">COMPLAIN</th>
                </tr>
            </thead>
            <tbody>
                {data.map((agent, index) => (
                    <tr key={index} className="bg-white text-center hover:bg-gray-50">
                        <td className="px-4 py-2 border">{agent.id}</td>
                        <td className="px-4 py-2 border font-semibold">{agent.agent}</td>
                        <td className="px-4 py-2 border">
                            <a
                                href={`https://wa.me/${agent.call}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={whatsApp}
                                    alt="WhatsApp"
                                    width={24}
                                    height={24}
                                    className="mx-auto"
                                />
                            </a>
                        </td>
                        <td className="px-4 py-2 border text-red-600 font-medium">
                            <a
                                href={`https://wa.me/${agent.phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {agent.phone}
                            </a>
                        </td>
                        <td className="px-4 py-2 border text-red-600 font-semibold">
                            <a
                                href={`https://wa.me/+17786440268`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                অভিযোগ
                            </a>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

type AgentLlistProps = {
    agentId: string;
};

export default function AgentLlist({ agentId }: AgentLlistProps) {
    const [agents, setAgents] = useState<Agent[]>([]);

    useEffect(() => {
        setAgents(shuffleArray(allAgents));
    }, []);

    const filterByAgentId = (data: Agent[]) => {
        if (!agentId || agentId.trim() === "") return data;
        return data.filter((agent) =>
            agent.id.toString().includes(agentId.trim())
        );
    };

    const filteredData = filterByAgentId(agents);

    // প্রতিটা টেবিলে fix 6 row
    const chunkSize = 6;
    const chunkedTables: Agent[][] = [];
    for (let i = 0; i < filteredData.length; i += chunkSize) {
        chunkedTables.push(filteredData.slice(i, i + chunkSize));
    }

    return (
        <main className="min-h-screen bg-gray-100 text-black p-4 md:p-10">
            {chunkedTables.map((tableData, index) =>
                renderTable(`Table ${index + 1} (৬ জন)`, tableData)
            )}
        </main>
    );
}

"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import whatsApp from "@/../public/whatsApp-icon.png"

type Agent = {
    id: number;
    agent: string;
    phone: string;
    call: string;
};

const dataSet1: Agent[] = [
    { id: 153, agent: "Master", phone: "+855967033588", call: "+8801868703130" },
    { id: 1297, agent: "Master", phone: "+855966495126", call: "+8801868703130" },
    { id: 1037, agent: "Master", phone: "+85581998647", call: "+8801868703130" },
    { id: 802, agent: "Master", phone: "+85551518492", call: "+8801868703130" },
    { id: 1394, agent: "Master", phone: "+8555118044", call: "+8801868703130" },
];

const dataSet2: Agent[] = [
    { id: 2413, agent: "Master", phone: "+85515946936", call: "+8801868703130" },
    { id: 2462, agent: "Master", phone: "+85570565198", call: "+8801868703130" },
    { id: 2172, agent: "Master", phone: "+85593614933", call: "+8801868703130" },
    { id: 2628, agent: "Master", phone: "+85596301845", call: "+8801868703130" },
    { id: 950, agent: "Master", phone: "+16728010997", call: "+8801868703130" },
    { id: 2343, agent: "Master", phone: "+85570550271", call: "+8801868703130" },
];

const dataSet3: Agent[] = [
    { id: 730, agent: "Master", phone: "+85586953053", call: "+8801868703130" },
    { id: 572, agent: "Master", phone: "+85596300119", call: "+8801868703130" },
    { id: 1715, agent: "Master", phone: "+85587453112", call: "+8801868703130" },
    { id: 2098, agent: "Master", phone: "+85581998210", call: "+8801868703130" },
    { id: 2463, agent: "Master", phone: "+85570565032", call: "+8801868703130" },
];

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const renderTable = (title: string, data: Agent[]) => (
    <div className="overflow-x-auto my-8 border border-gray-300 rounded-md shadow-sm">
        <h3 className="text-center text-sm font-medium bg-gray-100 py-2 border-b border-gray-300">
            {title}
        </h3>
        <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-red-50 text-gray-900">
                <tr>
                    <th className="px-4 py-2 border">ID NO</th>
                    <th className="px-4 py-2 border">AGENT</th>
                    <th className="px-4 py-2 border">APP</th>
                    <th className="px-4 py-2 border">PHONE NUMBER</th>
                    <th className="px-4 py-2 border">COMPLAIN</th>
                </tr>
            </thead>
            <tbody>
                {data.map((agent, index) => (
                    <tr key={index} className="bg-white text-center hover:bg-gray-50">
                        <td className="px-4 py-2 border">{agent.id}</td>
                        <td className="px-4 py-2 border font-semibold">{agent.agent}</td>
                        <td className="px-4 py-2 border">
                            <Image
                                src={whatsApp}
                                alt="WhatsApp"
                                width={24}
                                height={24}
                                className="mx-auto"
                            />
                        </td>
                        <td className="px-4 py-2 border text-red-600 font-medium">
                            <a href={`tel:${agent.call}`}>
                                {agent.phone}
                            </a>

                        </td>
                        <td className="px-4 py-2 border text-red-600 font-semibold">অভিযোগ</td>
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

    console.log("Form list", agentId)
    const [data1, setData1] = useState<Agent[]>([]);
    const [data2, setData2] = useState<Agent[]>([]);
    const [data3, setData3] = useState<Agent[]>([]);

    useEffect(() => {
        setData1(shuffleArray(dataSet1));
        setData2(shuffleArray(dataSet2));
        setData3(shuffleArray(dataSet3));
    }, []);

    const filterByAgentId = (data: Agent[]) => {
        if (!agentId || agentId.trim() === "") return data;

        return data.filter((agent) =>
            agent.id.toString().includes(agentId.trim())
        );
    };

    return (
        <main className="min-h-screen bg-gray-100 text-black p-4 md:p-10">
            {/* Filtered data arrays */}
            {(() => {
                const filteredData1 = filterByAgentId(data1);
                const filteredData2 = filterByAgentId(data2);
                const filteredData3 = filterByAgentId(data3);

                // If no agentId (search empty), show all tables with full data
                if (!agentId || agentId.trim() === "") {
                    return (
                        <>
                            {renderTable("সাব এডমিন 6 এর অধীনে সুপার এজেন্ট 26 এর মধ্যে মাস্টার এজেন্ট আছে 05 জন", data1)}
                            {renderTable("সাব এডমিন 6 এর অধীনে সুপার এজেন্ট 626 এর মধ্যে মাস্টার এজেন্ট আছে 6 জন", data2)}
                            {renderTable("সাব এডমিন 60 এর অধীনে সুপার এজেন্ট 91 এর মধ্যে মাস্টার এজেন্ট আছে 5 জন", data3)}
                        </>
                    );
                }

                // Else, show only tables which have matches
                return (
                    <>
                        {filteredData1.length > 0 && renderTable("সাব এডমিন 6 এর অধীনে সুপার এজেন্ট 26 এর মধ্যে মাস্টার এজেন্ট আছে 05 জন", filteredData1)}
                        {filteredData2.length > 0 && renderTable("সাব এডমিন 6 এর অধীনে সুপার এজেন্ট 626 এর মধ্যে মাস্টার এজেন্ট আছে 6 জন", filteredData2)}
                        {filteredData3.length > 0 && renderTable("সাব এডমিন 60 এর অধীনে সুপার এজেন্ট 91 এর মধ্যে মাস্টার এজেন্ট আছে 5 জন", filteredData3)}
                    </>
                );
            })()}
        </main>
    );
}

import React from 'react';
import ApiDiagram from './components/ApiDiagram';

const apiChain = {
    nodes: [
        { key: "1", name: "Get Users" },
        { key: "2", name: "Create Post", parent: "1" },
        { key: "3", name: "Get Comments", parent: "2" }
    ],
    links: [
        { from: "1", to: "2" },
        { from: "2", to: "3" }
    ]
};

const ApiFlow = () => {
    return (
        <div className="h-[300px] mt-5 py-5">
            <h1 className="text-white text-3xl md:text-4xl font-bold">API Flow Overview</h1>
            <ApiDiagram apiChain={apiChain} />
        </div>
    );
}

export default ApiFlow;
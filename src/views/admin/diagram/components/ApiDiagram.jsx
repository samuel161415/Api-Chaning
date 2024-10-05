import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';
const $ = go.GraphObject.make;  // for conciseness in defining templates

function ApiDiagram({ apiChain }) {
    const diagramRef = useRef(null);

    useEffect(() => {
        // Create the diagram
        var myDiagram = $(go.Diagram, diagramRef.current, {
            'undoManager.isEnabled': true,  // enable undo & redo
            layout: $(go.TreeLayout,  // specify a Diagram.layout that arranges trees
                { angle: 0, layerSpacing: 35 })  // Change angle to 0 for horizontal layout
        });

        // Define a simple Node template
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                $(go.Shape, "RoundedRectangle", { strokeWidth: 0, fill: "lightblue" }),
                $(go.TextBlock, { margin: 8, stroke: "black", font: "bold 14px sans-serif" },
                    new go.Binding("text", "name"))
            );

        // Define a Link template that routes orthogonally, with no arrowhead
        myDiagram.linkTemplate =
            $(go.Link,
                { routing: go.Link.Orthogonal, corner: 5 },
                $(go.Shape, { strokeWidth: 2, stroke: "#555" }), // the link shape
                $(go.Shape, { toArrow: "Standard", stroke: null }) // arrowhead
            );

        // Create the model data
        var model = $(go.TreeModel);
        model.nodeDataArray = apiChain.nodes;
        model.linkDataArray = apiChain.links;
        myDiagram.model = model;

        return () => myDiagram.div = null;
    }, [apiChain]);

    return <div ref={diagramRef} style={{ width: '100%', height: '600px' }}></div>;
}

export default ApiDiagram;
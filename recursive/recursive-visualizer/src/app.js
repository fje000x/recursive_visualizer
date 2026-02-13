// This file sets up the application logic, including state management and event handling for visualizations.

import React, { useState, useEffect } from 'react';
import TreeRenderer from './components/TreeRenderer';
import QueueVisualizer from './components/QueueVisualizer';
import StackVisualizer from './components/StackVisualizer';
import YouTubeModal from './components/YouTubeModal';
import { generateMinDepthHistory, generateMaxDepthHistory } from './history';
import { minDepth, maxDepth, bfs, iterative } from './algorithms';

const App = () => {
    const [currentAlgorithm, setCurrentAlgorithm] = useState('minDepth');
    const [treeData, setTreeData] = useState(null);
    const [history, setHistory] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Initialize tree data here
        const initialTree = {
            v: 3,
            left: { v: 9, left: null, right: null },
            right: {
                v: 20,
                left: { v: 15, left: null, right: null },
                right: { v: 7, left: null, right: null }
            }
        };
        setTreeData(initialTree);
    }, []);

    const runAlgorithm = () => {
        let generatedHistory;
        switch (currentAlgorithm) {
            case 'minDepth':
                generatedHistory = generateMinDepthHistory(treeData);
                break;
            case 'maxDepth':
                generatedHistory = generateMaxDepthHistory(treeData);
                break;
            case 'bfs':
                generatedHistory = bfs(treeData);
                break;
            case 'iterative':
                generatedHistory = iterative(treeData);
                break;
            default:
                break;
        }
        setHistory(generatedHistory);
        setCurrentStep(0);
    };

    const handleNextStep = () => {
        if (currentStep < history.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="app">
            <h1>Recursive Visualizer</h1>
            <div className="controls">
                <select onChange={(e) => setCurrentAlgorithm(e.target.value)} value={currentAlgorithm}>
                    <option value="minDepth">Minimum Depth</option>
                    <option value="maxDepth">Maximum Depth</option>
                    <option value="bfs">BFS</option>
                    <option value="iterative">Iterative DFS</option>
                </select>
                <button onClick={runAlgorithm}>Run Algorithm</button>
                <button onClick={handlePrevStep} disabled={currentStep === 0}>Previous Step</button>
                <button onClick={handleNextStep} disabled={currentStep === history.length - 1}>Next Step</button>
                <button onClick={() => setShowModal(true)}>Show YouTube Recommendations</button>
            </div>
            <TreeRenderer treeData={treeData} history={history} currentStep={currentStep} />
            <QueueVisualizer history={history} currentStep={currentStep} />
            <StackVisualizer history={history} currentStep={currentStep} />
            {showModal && <YouTubeModal onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default App;
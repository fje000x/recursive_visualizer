// This file contains utility functions shared between different history generation files. 

function recordHistoryStep(history, nodeId, line, msg, additionalData = {}) {
    history.push({
        nodeId,
        line,
        msg,
        ...additionalData
    });
}

function initializeHistory() {
    return [];
}

function finalizeHistory(history, resultMessage) {
    history.push({
        nodeId: null,
        line: -1,
        msg: resultMessage,
        isComplete: true
    });
}

export { recordHistoryStep, initializeHistory, finalizeHistory };
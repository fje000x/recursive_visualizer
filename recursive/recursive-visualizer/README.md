# Recursive Visualizer

## Overview
The Recursive Visualizer is an interactive application designed to help users understand and visualize various tree traversal algorithms, including minimum depth, maximum depth, breadth-first search (BFS), and iterative depth-first search (DFS). The application provides a visual representation of tree structures, allowing users to see how these algorithms operate step-by-step.

## Features
- Visual representation of binary trees.
- Step-by-step visualization of algorithms.
- Interactive components for queue and stack visualization.
- YouTube video recommendations for further learning.

## Project Structure
```
recursive-visualizer
├── public
│   └── index.html          # Main HTML document
├── src
│   ├── index.js           # Main entry point for JavaScript
│   ├── app.js             # Application logic and state management
│   ├── components          # React components for visualization
│   │   ├── TreeRenderer.js # Renders the tree structure
│   │   ├── QueueVisualizer.js # Visualizes the BFS queue
│   │   ├── StackVisualizer.js # Visualizes the DFS stack
│   │   ├── NodeLabel.js    # Displays node labels
│   │   └── YouTubeModal.js  # Manages YouTube video recommendations
│   ├── algorithms          # Algorithm implementations
│   │   ├── minDepth.js     # Minimum depth algorithm
│   │   ├── maxDepth.js     # Maximum depth algorithm
│   │   ├── bfs.js          # BFS algorithm
│   │   └── iterative.js     # Iterative DFS algorithm
│   ├── history             # History generation files
│   │   ├── generateMinDepthHistory.js # Generates history for min depth
│   │   ├── generateMaxDepthHistory.js # Generates history for max depth
│   │   └── sharedHistoryUtils.js # Shared utilities for history generation
│   ├── utils               # Utility functions
│   │   ├── layout.js       # Layout calculation functions
│   │   ├── svgHelpers.js   # SVG manipulation helpers
│   │   └── domHelpers.js   # DOM manipulation utilities
│   └── styles              # CSS styles
│       └── main.css        # Main styles for the application
├── test                    # Test files
│   ├── history.test.js     # Unit tests for history generation
│   └── layout.test.js      # Unit tests for layout functions
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── package.json           # npm configuration
└── README.md              # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd recursive-visualizer
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
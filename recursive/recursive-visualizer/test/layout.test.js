import { calculateNodePositions } from '../src/utils/layout';

describe('Layout Functions', () => {
    test('calculateNodePositions should position nodes correctly for a balanced tree', () => {
        const tree = {
            id: '1',
            value: 1,
            left: {
                id: '2',
                value: 2,
                left: null,
                right: null,
            },
            right: {
                id: '3',
                value: 3,
                left: null,
                right: null,
            },
        };

        const expectedPositions = {
            '1': { x: 0, y: 0 },
            '2': { x: -1, y: -1 },
            '3': { x: 1, y: -1 },
        };

        const positions = calculateNodePositions(tree);
        expect(positions).toEqual(expectedPositions);
    });

    test('calculateNodePositions should handle unbalanced trees', () => {
        const tree = {
            id: '1',
            value: 1,
            left: {
                id: '2',
                value: 2,
                left: {
                    id: '4',
                    value: 4,
                    left: null,
                    right: null,
                },
                right: null,
            },
            right: {
                id: '3',
                value: 3,
                left: null,
                right: null,
            },
        };

        const expectedPositions = {
            '1': { x: 0, y: 0 },
            '2': { x: -1, y: -1 },
            '4': { x: -1.5, y: -2 },
            '3': { x: 1, y: -1 },
        };

        const positions = calculateNodePositions(tree);
        expect(positions).toEqual(expectedPositions);
    });

    test('calculateNodePositions should return an empty object for an empty tree', () => {
        const tree = null;
        const positions = calculateNodePositions(tree);
        expect(positions).toEqual({});
    });
});
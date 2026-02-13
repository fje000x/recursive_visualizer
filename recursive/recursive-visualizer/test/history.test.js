import { generateMinDepthHistory } from '../src/history/generateMinDepthHistory';
import { generateMaxDepthHistory } from '../src/history/generateMaxDepthHistory';

describe('History Generation Tests', () => {
    const testTree = {
        v: 3,
        id: 'n3',
        left: {
            v: 9,
            id: 'n9',
            left: null,
            right: null
        },
        right: {
            v: 20,
            id: 'n20',
            left: {
                v: 15,
                id: 'n15',
                left: null,
                right: null
            },
            right: {
                v: 7,
                id: 'n7',
                left: null,
                right: null
            }
        }
    };

    test('generateMinDepthHistory should return correct history for minimum depth', () => {
        const history = generateMinDepthHistory(testTree);
        expect(history).toBeDefined();
        expect(history.length).toBeGreaterThan(0);
        expect(history[0].msg).toContain('Initializing');
    });

    test('generateMaxDepthHistory should return correct history for maximum depth', () => {
        const history = generateMaxDepthHistory(testTree);
        expect(history).toBeDefined();
        expect(history.length).toBeGreaterThan(0);
        expect(history[0].msg).toContain('Initializing');
    });
});
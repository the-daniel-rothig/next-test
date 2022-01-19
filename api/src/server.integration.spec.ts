import { response } from 'express';
import supertest, { SuperTest, Test } from 'supertest';
import { makeServer } from './server';

describe('Search API', () => {
    let testApp: SuperTest<Test>;

    async function performSearch(term: string, page?: number) {
        const query = page === undefined
            ? { q: term }
            : { q: term, page: page };

        return await testApp.get("/search").query(query);
    }

    beforeEach(() => {
        const app = makeServer();
        testApp = supertest(app);
    })

    it('returns 10 results', async () => {
        const response = await performSearch("muse");
        expect(response.body.length).toBe(10);
    });

    it('returns uses page=0 equivalently to no page parameter', async () => {
        const response1 = await performSearch("muse");
        const response2 = await performSearch("muse", 0);
        expect(response1.body).toStrictEqual(response2.body);
    });

    it('returns fully different results for the second page', async () => {
        const response1 = await performSearch("muse", 0);
        const response2 = await performSearch("muse", 1);
        
        for (let i = 0; i < response1.body.length; i++) {
            for (let j = 0; j < response2.body.length; j++) {
                expect(response1.body[i]).not.toStrictEqual(response2.body[j]);
            }
        }
    });

    it('gracefully returns an empty result set', async () => {
        const response = await performSearch("jawiejfaoewrghiorf");
        expect(response.body.length).toBe(0);
    });

    it('gracefully returns no results when it runs out of matches', async () => {
        const response = await performSearch("muse", 9999);
        expect(response.body.length).toBe(0);
    });

    it('returns nontransparently on Apple API server errors', async () => {
        const response = await performSearch("muse", 9999999);
        expect(response.text).toBe("Internal server error");
        expect(response.statusCode).toBe(500);
    });
});

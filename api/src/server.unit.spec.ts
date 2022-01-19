import supertest, { SuperTest, Test } from 'supertest';
import { makeServer } from './server';
import axios from 'axios';
import { mapResult } from './mapResult';

jest.mock("axios");

jest.mock("./mapResult");

describe('Search API (unit test)', () => {
    let testApp: SuperTest<Test>;

    beforeEach(() => {
        (axios.get as any).mockReset();
        const app = makeServer();
        testApp = supertest(app);
    });

    it('returns an informative error when the query is missing from the request', async () => {
        const response = await testApp.get("/search");
        expect(response.text).toBe("Missing required query parameter 'q'");
        expect(response.statusCode).toBe(400);
    });

    it('parameterises the external request as expected (no page parameter)', async () => {
        (axios.get as any).mockResolvedValue({data: {results: []}});

        await testApp.get("/search").query({q: "muse"});
        
        const calls = (axios.get as any).mock.calls;
        expect(calls.length).toBe(1);
        expect(calls[0][0]).toBe("https://itunes.apple.com/search?term=muse&limit=10&page=0&offset=0&country=GB&lang=en_gb&media=music&entity=musicArtist%2CmusicTrack%2Calbum");
    });

    it('parameterises the external request as expected (with page parameter)', async () => {
        (axios.get as any).mockResolvedValue({data: {results: []}});

        await testApp.get("/search").query({q: "muse", page: "0"});
        
        const calls = (axios.get as any).mock.calls;
        expect(calls.length).toBe(1);
        expect(calls[0][0]).toBe("https://itunes.apple.com/search?term=muse&limit=10&page=0&offset=0&country=GB&lang=en_gb&media=music&entity=musicArtist%2CmusicTrack%2Calbum");
    });
    
    it('maps results using mapResults', async () => {
        (axios.get as any).mockResolvedValue({data: {results: [
            {expected: "input"}
        ]}});

        (mapResult as any).mockReturnValue({
            expected: "output"
        });;

        const result = await testApp.get("/search").query({q: "muse", page: "0"});
        
        expect((mapResult as any).mock.calls[0][0]).toStrictEqual({
            expected: "input"
        });
        
        expect(result.body[0]).toStrictEqual({
            expected: "output"
        });
    });
});

import axios, { AxiosResponse } from 'axios';
import express, { Express } from 'express';
import cors from 'cors';
import { mapResult } from './mapResult';

export const makeServer = () : Express => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get("/search", async (req, res) => {
        if (!req.query.q) {
            res.status(400).end("Missing required query parameter 'q'");
            return;
        }
        
        const term = `${req.query.q}`;
        const page = req.query.page && Number.parseInt(`${req.query.page}`) || 0;
        const pageSize = 10;
        const offset = page*pageSize;

        const query = new URLSearchParams({
            term,
            limit: `${pageSize}`,
            page: `${page}`,
            offset: `${offset}`,
            country: "GB",
            lang: "en_gb",
            media: "music",
            entity: "musicArtist,musicTrack,album"
        });
    
        const uri = `https://itunes.apple.com/search?${query.toString()}`;

        let result: AxiosResponse;
        
        try {
            result = await axios.get(uri);
        } catch (e) {
            res.status(500).end("Internal server error");
            return;
        }

        const formatted = result.data.results.map(mapResult);
        res.json(formatted);
    });

    return app;
}

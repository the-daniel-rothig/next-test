import { mapResult } from "./mapResult";

describe('mapResult', () => {
    it('maps artists correctly', async () => {
        const input = {
            wrapperType: 'artist',
            artistName: 'artistName',
            artistViewUrl: 'artistViewUrl'
        }

        expect(mapResult(input)).toMatchSnapshot();
    });

    it('maps albums correctly', async () => {
        const input = {
            wrapperType: 'collection',
            collectionName: 'collectionName',
            artistName: 'artistName',
            collectionViewUrl: 'collectionViewUrl',
            artworkUrl60: 'artworkUrl60'
        }

        expect(mapResult(input)).toMatchSnapshot();
    });
    it('maps tracks correctly', async () => {
        const input = {
            wrapperType: 'track',
            trackName: 'trackName',
            artistName: 'artistName',
            trackViewUrl: 'trackViewUrl',
            artworkUrl60: 'artworkUrl60'
        }

        expect(mapResult(input)).toMatchSnapshot();
    });
});

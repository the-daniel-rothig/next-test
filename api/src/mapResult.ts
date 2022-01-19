export type Result = {
    kind: "Artist" | "Album" | "Song",
    name: string,
    url: string,
    artwork: string | null,
}

export const mapResult = (res: any): Result => {
    if (res.wrapperType === "artist") {
        return {
            kind: "Artist",
            name: res.artistName,
            url: res.artistViewUrl,
            artwork: null
        }
    }
    if (res.wrapperType === "collection") {
        return {
            kind: "Album",
            name: `${res.collectionName} by ${res.artistName}`,
            url: res.collectionViewUrl,
            artwork: res.artworkUrl60,
        }
    }
    if (res.wrapperType === "track") {
        return {
            kind: "Song",
            name: `${res.trackName} by ${res.artistName}`,
            url: res.trackViewUrl,
            artwork: res.artworkUrl60,
        }        
    }

    throw `Wrapper type not supported: ${res.wrapperType}`;
}
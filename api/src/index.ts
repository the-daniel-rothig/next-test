import { makeServer } from "./server";

const app = makeServer();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
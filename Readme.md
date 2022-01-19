# NextTrack (code submission by Daniel Rothig)

## Quick start

run

```
docker-compose up --build
```

in the repository root. Then navigate to http://localhost:80 to see the resulting UI.

Alternatively, the test suites can be run by running

```
npm i && npm t
```

in the `api` and `ui` subfolders.

## Discussion

In contradiction to the assignment I implemented the UI as a self-hosted solution, since hosting a static SPA on a dynamic webserver would not be how I would recommend structuring the project in real life (static apps can be hosted in a CDN, which simplifies scalability).

I have had less time than I expected to complete the task so cut corners in the UI testing department - however I believe the separation of concerns I arrived at (presentation vs data retrieval vs state management) outlines units that can be tested with the same paradigms as I've demonstrated elsewhere.

In real life, I would also implement some end-to-end tests in cypress but ran out of time before I could demo this.

One omission was a decent debouncer on the search input - I worked around this by adding a check whether the query has changed since beginning the data fetch. This leads to extraneous web requests and could be improved. It does, however, generate the desired result that only data fetched for the last user input enters the state and UI.
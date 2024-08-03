# Music Streaming App

This is a dedicated music streaming service for users to upload, manage and play back their own music files.

## Features

- Play back uploaded music tracks from anywhere
- Fully self hosted i.e. not tied to any major streaming service
- Clean UI

### Description

I've built this as a full-stack project both for my portfolio, but also as an attempt to disengage from streaming services like Spotify and Apple Music. The ongoing turmoil in the music industry, the terrible royalties musicians receive, and the general failing of the Spotify algorithm to provide me with music I enjoy has left me disillusioned with streaming, and I'm rebuilding a personal library. Being able to stream that library would be very handy! Of course, there are easier ways of doing this - a UPnP server might work - but that's not quite as fun.

### Installation

See the client and server README files for instructions on setting up each of those. Both a client and server are required to use this project at full functionality.

### Tests

I use Jest and React Testing library for my testing suite - to run tests, enter the following commands.

```
cd client
```

```
npm test
```

### Technology

This project was built with React.js and TailwindCSS for the frontend. Handling requests to the database is done using Axios. The backend is built with Node.js and Express.js, as well as a Docker container running a postgreSQL database.

#### Todo

- [ ] Hit basic feature complete status - playback of music, upload of tracks
- [ ] Dark mode
- [ ] Significant work to be done on backend handling
- [ ] Equally significant work to be done on tidying up the frontend design and code
- [ ] Polish language option
- [ ] README files for server and client
- [ ] Major overhaul of Jest tests

#### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

#### Licence

This project is licensed under the MIT License - see the LICENSE file for details.

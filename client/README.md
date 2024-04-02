# Music Streaming App

This is a dedicated music streaming service for users to upload, manage and play back their own music files.

## Features

- Play back uploaded music tracks from anywhere
- Fully self hosted i.e. not tied to any major streaming service
- Clean UI

### Description

I've built this as a full-stack project both for my portfolio, but also as an attempt to disengage from streaming services like Spotify and Apple Music. The ongoing turmoil in the music industry, the terrible royalties musicians receive, and the general failing of the Spotify algorithym to provide me with music I enjoy has left me disillusioned with streaming, and I'm rebuilding a personal library. Being able to stream that library would be very handy!

### Installation

Clone the GitHub repo with

```
git clone https://github.com/Korjubzot/music-streamer
```

Enter client directory

```
cd express-music-streamer/client
```

Install dependencies

```
npm install
```

Run npm start

```
npm start
```

This will create a React client at localhost:3000 for testing purposes. A matching backend (under the `server` directory) as well as a Docker container for the database will need to be spun up as well.

A more specific rundown on how to use this project for your own purposes will come when the project is better developed.

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
- [ ] Polish language option
- [ ] Polish README

#### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

#### Licence

This project is licensed under the MIT License - see the LICENSE file for details.

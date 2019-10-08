# Click-Chord

## What is Click-Chord?

Click-Chord is an app that allows users to build synthesizer chord progressions by clicking boxes. Each box, when clicked, triggers a different chord within its respecive major scale. Users can build chord progressions in any key they like.

In addition to building chord progressions, users can also build drum their own drum loops to accompany their compositions. Or, if they don't want to build drum loops, they can choose pre-built drum loops from the "rhythm player".

## How can I run Click-Chord locally?

After cloning the Click-Chord repo, run `npm install` and then `npm start`. The app will be served up at http://localhost:8080/.

## How was Click-Chord made?

To build Click-Chord I relied heavily on a library called [Tone.js](https://tonejs.github.io/). Tone.js allows you to write code that makes music in the browser. It's built on top of the [Web Audio API](https://webaudio.github.io/web-audio-api/), which I became really interested in exploring.

The Web Audio API

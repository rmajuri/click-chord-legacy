# Click-Chord

## What is Click-Chord?

Click-Chord is an app that allows users to build synthesizer chord progressions by clicking boxes. Each box, when clicked, triggers a different chord within its respecive major scale. Users can build chord progressions in any key they like.

In addition to building chord progressions, users can also build drum their own drum loops to accompany their compositions. Or, if they don't want to build drum loops, they can choose pre-built drum loops from the "rhythm player".

## How can I run Click-Chord locally?

After cloning the Click-Chord repo, run `npm install` and then `npm start`. The app will be served up at http://localhost:8080/.

## How was Click-Chord made?

To build Click-Chord, I relied heavily on a library called [Tone.js](https://tonejs.github.io/). Tone.js allows you to write code that makes music in the browser. It's built on top of the [Web Audio API](https://webaudio.github.io/web-audio-api/), which I became really interested in exploring.

The Web Audio API offers you the ability to create [oscillator nodes](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode) using vanilla JavaScript. Oscillator nodes literally oscillate, or vibrate, creating sound that in its raw form is honestly rather grating on the ears. When you're phone alerts you of a flash flood with a sudden, piercing noise - that's what an oscillator node sounds like.

You can adjust the tone of oscillator nodes by manipulating details about them like their gain, their frequency, the shape of their wave, and more. You can make some really cool sounds using pure JS.

Or you can use Tone.

Tone's library abstracts the granular audio-tweaking details away from you by giving you easy-to-use API's that start and stop synth sounds with some pretty cool textures. And, if you want to play a musical chord using JS, instead of having to specify the exact frequency of each oscillator node and starting and stopping them at the same time, you can use Tone's [polysnyth API](https://tonejs.github.io/docs/13.8.25/PolySynth), which exposes a function that allows you to tell it exactly which nodes to play at which octave (e.g., C4, E4, G4).

This is the real magic going on behind Click-Chord.

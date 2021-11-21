# Interactive Piano

Play piano sounds with your keyboard! An idea from [@colboyfayock](https://twitter.com/colbyfayock)'s [50 React Projects](https://50reactprojects.com/). This was a really exciting project for me, since I started learning to play the piano for fun on the side.

**Fun fact**: The song in the demo is one of the first songs I learned to play on the piano! ([A Thousand Years - Christina Perri](https://www.youtube.com/watch?v=rtOvBOTyX00))

Initially created in VanillaJS following [@DevSimplified](https://twitter.com/devsimplified)'s [JavaScript tutorial](https://www.youtube.com/watch?v=vjco5yKZpU8).

Then ported to React with `soundfont-player` by [@danigb](https://github.com/danigb/soundfont-player), sound fonts originally by [@gleitz](https://github.com/gleitz/midi-js-soundfonts).

### Project Demo

**VanillaJS Piano**: https://github.com/geraldiner/piano/tree/main/vanillajs-piano

**React Piano**: https://geraldiner.github.io/piano

[![React Piano demo](https://res.cloudinary.com/marcomontalbano/image/upload/v1628839075/video_to_markdown/images/streamable--1od18g-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://streamable.com/vvkeks "React Piano demo")

## How It's Made

**Tech used:** HTML, CSS, JavaScript, ReactJS

### VanillaJS Piano

The VanillaJS version was pretty straightforward. I remember doing a similar project in [@wesbos](https://twitter.com/wesbos)'s [JavaScript30](https://javascript30.com/) course. Instead of a piano it was a drum kit.

I remembered that this project relied on `data-` attributes to map the keyboard keys to the sound files for each note. And there are `eventListeners` on every keyboard key that has a note, so that every time the keyboard key is pressed, the sound file starts playing.

### React Piano

I'll admit, I referenced a lot of existing code by [@lillydinhle](https://github.com/lillydinhle/react-piano-component) and [@ganeshmani](https://github.com/ganeshmani/react-piano-hooks). And I'll further admit, that it was kind of hard to follow because both repos are 2-3 years old and written with class-based components. I'd only started learning React recently, so I jumped straight into learning and using functional components.

This whole process ended up being an exercise in pseudo-reverse engineering and translating the relatively older React syntax to the more recent one. In particular, @lillydinhle's code is for a package that could be included in a project and used out-of-the-box. I had found other packages like this, but I avoided them because I wanted to learn how to build it from scratch.

**Playing Audio from SoundFont-Player**

For the initial audio functionality setup, I referenced @ganeshmani's code to set up `AudioContext`, `AudioPlayer`, and `InstrumentAudio`. The core of the app lives in `AudioPlayer`, which sets up the `SoundFontPlayer`, ie. the sound fonts from @geitz. The `AudioContext` makes use of the Web Audio API so that sounds can be played in the browser. The `AudioPlayer` and `AudioContext` come together in `InstrumentAudio` to create the component that handles playing the audio for this React piano.

**`Piano` and `Key` Components**

The `Piano` component is made up of `Key`s, which are determined to be either natural (white) or accidental (black) based on the note they represent. It also handles the `eventListener`s for keyboard keys with notes tied to them.

When a keyboard key with a note is pressed, the corresponding note will be played, and feedback is given (the key turns to a blue-ish color). When the note is done playing, the key returns to its initial color.

## Optimizations

In the initial stages of prototyping the project, I hard-coded the notes and keyboard keys to test for the audio functionality. But for the final product, I used the `array` method `map` that is common in React projects to loop over the notes/keys being rendered.

Because the `Piano` takes in a `startNote` and `endNote`, you could make a `Piano` with as many and as little notes/keys as you want. This comes from a `NOTES` file that lists out all the possible letter notes for each octave. Having a constant file like this reduces the amount of errors that can come from mistyping something.

Similarly, I put the note-to-keyboard and keyboard-to-note mapping in its own file to keep it constant. While this does make the mapping fairly permanent, I lessen the risk of typing out the wrong keyboard key or note anywhere else in the code.

## Lessons Learned

Here's another admission: I had about 3 false starts on this project, meaning I restarted from a blank slate about 3 times. The most difficult part was definitely setting up the `AudioContext` and `InstrumentAudio`. I'd only been exposed to React Contexts very briefly, so I had to spend a lot of time reading the documentation and referencing the existing code, translating it from `class` based components to functional components.

With each false start, it really drove the lesson home of taking everything piece by piece and testing along the way. Every time I implemented something new, I would stop and test the piano to make sure it didn't have any unintended consequences.

This project has made me curious about new projects, like the [Sound Alerts Twitch Extension](https://soundalerts.com/). I can see how you could make a budget version by setting up a similar project with your own audio files and play them from your keyboard.








## Other Projects

Check out other stuff I've worked on:

**Minute To Win It Games API & Wiki**: https://github.com/geraldiner/min-to-win

**Rehabitter:** https://github.com/geraldiner/rehabitter

**Snapchat Clone:** https://github.com/geraldiner/snapchat-clone

**K.K. Radio:** https://github.com/geraldiner/kk-radio

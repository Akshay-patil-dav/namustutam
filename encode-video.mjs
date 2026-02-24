/**
 * encode-video.mjs
 * Re-encodes HeroSection.mp4 with a keyframe every 15 frames (~0.5 s at 30 fps).
 * Dense keyframes let the browser seek to any frame instantly with no stutter.
 *
 * Run:  node encode-video.mjs
 */
import { execFile } from 'node:child_process';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const ffmpegPath = require('ffmpeg-static');

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT = path.join(__dirname, 'src/assets/Videos/HeroSection.mp4');
const OUTPUT = path.join(__dirname, 'src/assets/Videos/HeroSection_scrub.mp4');

console.log('🎬  Re-encoding video for smooth scroll-scrub...');
console.log('    Input :', INPUT);
console.log('    Output:', OUTPUT);
console.log('    This may take a minute for large files.\n');

const args = [
    '-y',               // overwrite without asking
    '-i', INPUT,

    /* Video codec — H.264, same quality as source */
    '-c:v', 'libx264',
    '-crf', '20',       // quality (18=near-lossless, 23=default, 28=smaller file)
    '-preset', 'fast',  // encoding speed vs compression trade-off

    /*
      KEY FIX: force a keyframe every 15 frames.
      At 30 fps that's one keyframe every 0.5 seconds.
      The browser can seek to within 0.5 s of any frame instantly.
    */
    '-g', '15',
    '-sc_threshold', '0',   // disable scene-cut keyframes (keep interval exact)
    '-keyint_min', '15',

    /* Web-optimised: moov atom at front for instant start */
    '-movflags', '+faststart',

    /* Keep original audio */
    '-c:a', 'aac',
    '-b:a', '128k',

    OUTPUT,
];

execFile(ffmpegPath, args, (err, stdout, stderr) => {
    if (err) {
        console.error('❌  ffmpeg error:\n', stderr || err.message);
        process.exit(1);
    }
    console.log('✅  Done! Scrub-optimised video saved to:');
    console.log('   ', OUTPUT);
    console.log('\n👉  Update App.jsx import to use HeroSection_scrub.mp4');
});

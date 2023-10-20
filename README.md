# my-youtube-utils

A utility to extract YouTube video IDs from URLs.

## Installation

You can install this package using npm: npm i youtube_video_id_extractor


Usage
To use this package in your Node.js application, follow these steps:

Import the package into your JavaScript or TypeScript file:


const { extractVideoIdFromUrl } = require('youtube-video-id-extractor');
// or, if you're using ES6 modules:
// import { extractVideoIdFromUrl } from 'youtube-video-id-extractor';


Use the extractVideoIdFromUrl function to extract a YouTube video ID from a URL:


const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';
const videoId = extractVideoIdFromUrl(videoUrl);

if (videoId) {
  console.log(`Extracted YouTube Video ID: ${videoId}`);
} else {
  console.error('Invalid YouTube URL');
}

Replace VIDEO_ID with the actual video ID you want to extract.

You can also use the package to extract video IDs from short URLs or YouTube Shorts URLs

Example:

const shortUrl = 'https://youtu.be/VIDEO_ID_SHORT';
const videoIdShort = extractVideoIdFromUrl(shortUrl);
if (videoIdShort) {
  console.log(`Extracted YouTube Video ID (Short): ${videoIdShort}`);
} else {
  console.error('Invalid YouTube Short URL');
}


const shortsUrl = 'https://www.youtube.com/shorts/VIDEO_ID_SHORTS?';
const videoIdShorts = extractVideoIdFromUrl(shortsUrl);
if (videoIdShorts) {
  console.log(`Extracted YouTube Video ID (Shorts): ${videoIdShorts}`);
} else {
  console.error('Invalid YouTube Shorts URL');
}



Run your application, and you'll be able to extract YouTube video IDs from the provided URLs.
License
This package is distributed under the MIT License. See the LICENSE file for more details.

Issues and Contributions
If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.


Credits
This package was created by Super Nived.

Support
For questions or support, you can reach out to  nivedchandran7@gmail.com


In the `README.md` template above:

- The package name, installation instructions, and a description are provided.
- Detailed usage instructions for using your `extractVideoIdFromUrl` function are included, covering standard YouTube URLs, short URLs, and YouTube Shorts URLs.
- Users are informed about the license, how to report issues, and contribute to the project.
- Credit to the author and a support contact email are provided.

Make sure to replace the placeholders with your actual package details, and customize the content as needed. This `README.md` provides comprehensive information on how users can install and use your package and encourages contributions and support inquiries.




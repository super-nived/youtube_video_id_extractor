# youtube-video-id-extractor

A utility to extract YouTube video IDs from URLs.

## Installation

```

 npm i youtube_video_id_extractor

```

## Usage


To use this package in your Node.js application, follow these steps:

Import the package into your JavaScript or TypeScript file:

``` 
const { extractVideoIdFromUrl } = require('youtube-video-id-extractor');

```

if you're using ES6 modules:

```
 import { extractVideoIdFromUrl } from 'youtube-video-id-extractor';

```




Use the extractVideoIdFromUrl function to extract a YouTube video ID from a URL :

```
const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';
const videoId = extractVideoIdFromUrl(videoUrl);

if (videoId) {
  console.log(`Extracted YouTube Video ID: ${videoId}`);
} else {
  console.error('Invalid YouTube URL');
}

 ```
Replace VIDEO_ID with the actual video ID you want to extract.

You can also use the package to extract video IDs from short URLs or YouTube Shorts URLs


Example:


```
const shortUrl = 'https://youtu.be/VIDEO_ID_SHORT';
const videoIdShort = extractVideoIdFromUrl(shortUrl);
if (videoIdShort) {
  console.log(`Extracted YouTube Video ID (Short): ${videoIdShort}`);
} else {
  console.error('Invalid YouTube Short URL');
}

 ```





Run your application, and you'll be able to extract YouTube video IDs from the provided URLs.


## License



This package is distributed under the MIT License. See the LICENSE file for more details.

## Issues and Contributions

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.


## Credits

This package was created by Super Nived.

## Support

For questions or support, you can reach out to  nivedchandran7@gmail.com





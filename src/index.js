/**
 * Extracts a YouTube video ID from a URL.
 * @param {string} url - The YouTube video URL.
 * @returns {string|null} - The extracted video ID or null if not found.
 */
const extractVideoIdFromUrl = (url) => {
    const regexFullUrl = /[?&]v=([^&#]*)/;
    const regexShortUrl = /youtu.be\/([^&#]*)/;
    const regexShortsUrl = /shorts\/([a-zA-Z0-9_-]+)\?/;
    const matchFullUrl = url.match(regexFullUrl);
    const matchShortUrl = url.match(regexShortUrl);
    const matchShortsUrl = url.match(regexShortsUrl);
  
    if (matchFullUrl && matchFullUrl[1]) {
      return matchFullUrl[1];
    } else if (matchShortUrl && matchShortUrl[1]) {
      return matchShortUrl[1];
    } else if (matchShortsUrl && matchShortsUrl[1]) {
      return matchShortsUrl[1];
    }
  
    return null;
  };
  
  module.exports = {
    extractVideoIdFromUrl,
  };
  
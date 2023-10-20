const { extractVideoIdFromUrl } = require('../src/index');
const { expect } = require('chai');

describe('extractVideoIdFromUrl', () => {
  it('should extract video ID from a full URL', () => {
    const url = 'https://www.youtube.com/watch?v=VIDEOID123';
    const videoId = extractVideoIdFromUrl(url);
    expect(videoId).to.equal('VIDEOID123');
  });

  it('should extract video ID from a short URL', () => {
    const url = 'https://youtu.be/VIDEOID456';
    const videoId = extractVideoIdFromUrl(url);
    expect(videoId).to.equal('VIDEOID456');
  });

  it('should extract video ID from a shorts URL', () => {
    const url = 'https://www.youtube.com/shorts/VIDEOID789?';
    const videoId = extractVideoIdFromUrl(url);
    expect(videoId).to.equal('VIDEOID789');
  });

  it('should return null for an invalid URL', () => {
    const url = 'https://example.com/video';
    const videoId = extractVideoIdFromUrl(url);
    expect(videoId).to.be.null;
  });
});

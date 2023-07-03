module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("video.mp4");
    eleventyConfig.addPassthroughCopy("tour.mp4");
};

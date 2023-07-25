module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/video.mp4");
    eleventyConfig.addPassthroughCopy("assets/tour.mp4");
    eleventyConfig.addPassthroughCopy("assets/favicon.png");
    eleventyConfig.addPassthroughCopy("./main.css");
   
};

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/video.mp4");
    eleventyConfig.addPassthroughCopy("assets/tour.mp4");
    eleventyConfig.addPassthroughCopy("assets/favicon.png");
    eleventyConfig.addPassthroughCopy("./main.css");
    eleventyConfig.addPassthroughCopy("Image1.png");
    eleventyConfig.addPassthroughCopy("Image2.png");
    eleventyConfig.addPassthroughCopy("Image3.png");
    eleventyConfig.addPassthroughCopy("Image4.png");
   
};

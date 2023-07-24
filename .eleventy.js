module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/video.mp4");
    eleventyConfig.addPassthroughCopy("assets/tour.mp4");
    eleventyConfig.addPassthroughCopy("assets/favicon.png");
    eleventyConfig.addPassthroughCopy("./main.css");
    
      eleventyConfig.addPassthroughCopy("src");
    return { 
    templateFormats: ["html", "liquid", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    
}; 
};

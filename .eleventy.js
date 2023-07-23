module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/video.mp4");
    eleventyConfig.addPassthroughCopy("assets/tour.mp4");
    eleventyConfig.addPassthroughCopy("assets/favicon.png");
    eleventyConfig.addPassthroughCopy("./main.css");
    
      eleventyConfig.addPassthroughCopy("src");
    return { 
        dir: { 
        input: "src", 
        includes:"../_includes",
        output: "_site" ,
        layout: "layouts/travel_root.njk"
    },
    templateFormats: ["html", "liquid", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    
}; 
};

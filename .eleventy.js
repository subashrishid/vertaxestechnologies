module.exports = function (eleventyConfig) {
    // Pass through static assets
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("videos");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("_redirects");

    // Watch for changes
    eleventyConfig.addWatchTarget("css/");
    eleventyConfig.addWatchTarget("js/");
    eleventyConfig.addWatchTarget("_data/");

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "../_data"
        },
        templateFormats: ["njk", "html", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};

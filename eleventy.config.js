const nunjucks = require('nunjucks');

module.exports = function(eleventyConfig) {
    // Copy govuk-frontend CSS
    eleventyConfig.addPassthroughCopy({
        "node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.css": "assets/css/govuk-frontend.min.css",
        "node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.css.map": "assets/css/govuk-frontend.min.css.map",
    });
    
    // Copy govuk-frontend JavaScript
    eleventyConfig.addPassthroughCopy({
        "node_modules/govuk-frontend/dist/govuk/all.bundle.js": "assets/js/all.bundle.js",
        "node_modules/govuk-frontend/dist/govuk/all.bundle.js.map": "assets/js/all.bundle.js.map",
    });
    
    // Copy govuk-frontend assets (images, fonts, etc.)
    eleventyConfig.addPassthroughCopy({
        "node_modules/govuk-frontend/dist/govuk/assets": "assets",
    });

    // Configure Nunjucks to find govuk-frontend templates
    const nunjucksEnv = nunjucks.configure([
        "src/_includes",
        "node_modules/govuk-frontend/dist"
    ], {
        autoescape: true,
        throwOnUndefined: true
    });
    
    // Add govukRebrand global
    nunjucksEnv.addGlobal('govukRebrand', true);
    
    eleventyConfig.setLibrary("njk", nunjucksEnv);

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        },
        templateFormats: ["njk", "md", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};

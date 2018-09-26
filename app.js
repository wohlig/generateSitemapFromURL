var fs = require('fs');
var Sitemap = require('sitemap2');
var links = require("./links");
var host = 'http://pehlakadam.in';

var urls = new Sitemap({
    hostName: host
});

links.forEach(function (url) {
    urls.addUrl(url);
});

var files = urls.toXML();

files.forEach(function saveFileToDisk(file) {
    fs.writeFileSync(file.fileName, file.xml);
});
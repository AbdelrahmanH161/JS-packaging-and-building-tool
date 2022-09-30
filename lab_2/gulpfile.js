const {src ,dest ,parallel} =require("gulp");
const htmlMin=require("gulp-htmlmin");
const cssmin=require("gulp-clean-css");
const minJs=require("gulp-terser")
const concat = require("gulp-concat");
const imgMin=require("gulp-imagemin");

function htmltask() {
    return src("*.html").pipe(htmlMin({collapseWhitespace:true,removeComments:true}))
    .pipe(dest("dist"))  
}

function cssMinify() {
return src("assets/css/*.css").pipe(concat("style.min.css"))
.pipe(cssmin()).pipe(dest("dist/Css"))    
}

function jsMinify() {
    return src("assets/js/*.js").pipe(concat("script.min.js"))
    .pipe(minJs())
    .pipe(dest("dist/Js"))
}

function imgMinify() {
return src("assets/imge/*").pipe(imgMin())
.pipe(dest("dist/imge"))    
}

exports.default=parallel(cssMinify,htmltask,jsMinify,imgMinify)
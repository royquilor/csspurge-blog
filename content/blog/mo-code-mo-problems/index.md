---
title: Mo CSS, Mo Problems
date: "2015-05-01T22:12:03.284Z"
description: "You may not know, but your CSS is getting out of control, it may even have a mind of its own."
---

- Contents
- [CSS filesize](#heading-1)
- [Highest specificity score](#heading-2)
- [CSS stats](#heading-3)
- [Case study - Unsplash](#heading-4)
- [Floats](#heading-5)
- [Colors](#heading-6)
- [Font sizes](#heading-7)
- [Font families](#heading-8)
- [Specificity](#heading-9)
- [Media queries](#heading-10)
- [Style links](#heading-11)
- [Resources](#heading-12)
- [More articles](#heading-13)
- [Talks](#heading-14)

You may not know, but your CSS is getting out of control, it may even have a mind of its own. The specificity war is happening right now and you might not even know it.

Is your file always getting bigger? Are you adding stuff to the end of the file? You are showing symptoms of CSSitis. May be linked to Divitis, you can get it treated, but you have to act fast.

Users time should be the highest priority. More code, more potential bugs, more time fixing things. A product should be fast, systematic and maintainable.

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

![Chinese Salty Egg](./salty_egg.jpg)

## 42 Popular sites and frameworks

### <a name="heading-1"></a> CSS File Size - kb

CSSitis is a condition that causes performance and maintainability issues. It may even keep you up at night, it's a scientific word for - too much css.

Chart

## <a name="heading-2"></a> Highest specificity score

Excessive use of nesting in sass and use of !important effects performance. Remember the Inception rule, three levels down, you could lose sight of what's real.

It will become hard to read for your team, so aim for two levels. Using too many ID's instead of classes will clog the users browser.

Chart

## <a name="heading-3"></a> CSS stats

Table

Stats gathered from CSS Stats. Have an idea? @csspurge, roy[at]csspurge.com and Github.

## <a name="heading-4"></a> Case study - Unsplash

How I reduced the total score from 252 to 61 with a 76% reduction.

## <a name="heading-5"></a> Highest floats

<big>462</big>
Did you know there are only three floats?

<pre><code>
  .fl { float: left; }
  .fr { float: right; }
  .fn { float: none; }
</code>
</pre>

## <a name="heading-6"></a> Highest colors

<big>462</big>
How many colours does a brand have? Fifty shades of grey is the exception. It's possible to just have one color for all tags and then one for links

<pre><code>
  $black: #111111;
  $blue:  #0074D9;

  body { color: $black; }
  a { color: $blue;  }
</code>
</pre>

## <a name="heading-7"></a> Highest font sizes

<big>89</big>
By default the web has provided 9 tags to give you a robust scale

<pre><code>
  body { font-size: 16px; }
  h1 { font-size: 2.25rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.25rem; }
  h5 { font-size: 1rem; }
  h6 { font-size: 0.875rem; }
  p { font-size: 1rem; }
  small { font-size: 0.875rem; }

  // On a large screen
  // Font size on the body with rem
  // set on elements will increase in size
  @media only screen and (min-width: 64em) {
   body {
    font-size: 18px;
   }
  }
</code>
</pre>

## <a name="heading-8"></a> Highest font families

<big>31</big>
It is recommended to have two fonts: one for the body and one for headings. Perhaps other fonts are used to support different languages?

<pre><code>
  $copy:      SF UI Text, Arial, sans-serif;
  $heading:   SF UI Display, Arial, sans-serif;

  body { font-family: $copy; }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-family: $heading;
  }
</code>
</pre>

## <a name="heading-9"></a> Highest specificity score

<big>512</big>
Frameworks are as low as 50. Too many declarations can lead to performance issues and bugs.

Some sites graph is very spikey at the beginning meaning a bigger hit on the site load when the user first visits.

o style an element that requires unique styling such as a sign up link, there are many ways to target it.

<pre><code>
  &lt;nav&gt;
      &lt;ul&gt;
          &lt;li&gt;&lt;a href="#"&gt;Features&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Products&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a class="btn" href="#"&gt;Sign Up&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
  &lt;/nav&gt;
</code>
</pre>

<pre><code>
    // A. You could do this
    nav ul li a.btn { }

    // B. or simply
    .btn { }
</code>
</pre>

According to the specificity war powers, option A would be Vader:

A:
<big>14</big>
1+1+1+1+10

B:
<big>10</big>
10

### Points

- (1) Element Selector
- (10) Class Selector
- (100) ID Selector

Another good reason to use classes over ID's

## <a name="heading-10"></a> Highest media queries

<big>74</big>
320 and up looks at 4 sizes on average. To cater for every screen is counter intuitive.

New devices and screens will emerge, then you have to code for another screen.

Take reference from Bruce Lee "be like water my friend".

<pre><code>
  $mw-s:  320px;
  $mw-m:  768px;
  $mw-l:  1024px;
  $mw-xl: 1382px;

  // Mobile
  @media screen and (min-width: $mw-s) {

  }

  // Tablets
  @media screen and (min-width: $mw-m) {

  }

  // iPads
  @media screen and (min-width: $mw-l) {

  }

  // Powerbooks
  @media screen and (min-width: $mw-xl) {

  }
</code>
</pre>

## <a name="heading-11"></a> Highest style links

<big>7</big>

More external stylesheets will mean more http requests, so page speed is effected.

<pre><code>
  &lt;!-- Good for maintanence but bad for performance --&gt;
  &lt;link rel="stylesheet" href="css/base.css"&gt;
  &lt;link rel="stylesheet" href="css/type.css"&gt;
  &lt;link rel="stylesheet" href="css/grid.css"&gt;
  &lt;link rel="stylesheet" href="css/colors.css"&gt;
  &lt;link rel="stylesheet" href="css/modules.css"&gt;
</code>
</pre>

Tools like Sass and Gulp can combine all stylesheets into one.

Example folder structure:

<kbd>project/</kbd>

<pre><code>
  css/
  node_modules/
  sass/
  gulpfile.js
  index.html
  package.json
</code>
</pre>

<kbd>sass/</kbd>

<pre><code>
  _base.scss
  _type.scss
  _grid.scss
  _colors.scss
  _modules.scss
  styles.scss
</code>
</pre>

<kbd>gulpfile.js</kbd>

<pre><code>
  // 1. Use gulpjs to get all your sass partials
  gulp.task('workflow', function () {
    gulp.src('sass/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(cssnano())
      .pipe(sourcemaps.write('./'))
      // 2. Output to a single css file
      .pipe(gulp.dest('css/'))
      .pipe(browserSync.reload({stream:true}));
  });
</code>
</pre>

<pre><code>
  &lt;!-- Voilà! --&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
</code>
</pre>

## <a name="heading-12"></a> Resources

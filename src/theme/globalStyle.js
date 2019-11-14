import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  :root {
    --sans-serif: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    --serif: 'minion pro',georgia,times,serif;
    --marvin: 'Marvin Visions Big';
    --orbitron: 'Orbitron';
    --code: Menlo, Consolas, monaco, monospace;
    --courier: 'Courier Next', courier, monospace;

    --f1: 3rem;
    --f2: 2rem;
    --f3: 1.5rem;
    --f4: 1.25rem;
    --f5: 1.125rem;
    --f6: 1rem;
    --f7: .875rem;
    --f8: .75rem;

    --lh-solid:   1;
    --lh-title:   1.25;
    --lh-copy:    1.6;

    --space-xxs:  .25rem;
    --space-xs:   .5rem;
    --space-sm:   .75rem;
    --space:      1rem;
    --space-md:   1.25rem;
    --space-lg:   1.5rem;
    --space-xl:   2rem;
    --space-xxl:  3rem;

    --gray-50:    #FAFAFA;
    --gray-6:     #757575;
    --gray-8:     #212121;
    --gray-9:     #333333;

    --orange-6:   #FB8C00;
    --red-6:      #E53935;
    --purple-6:   #8E24AA;
    --indigo-6:   #3949AB;
    --blue-6:     #1E88E5;
    --cyan-6:     #00ACC1;
    --teal-6:     #00897B;
    --green-6:    #43A047;
    --lime-6:     #C0CA33;
    --yellow-6:   #FDD835;
    --amber-6:    #FFB300;
    --deep-orange-6: #F4511E;
    --pink-6: #D81B60;
    --brown-6: #6D4C41;

  }

  @font-face {
    font-family: 'Marvin Visions Big';
    src: url('../../staticMarvinVisionsBig-Bold.woff2') format('woff2'),
        url('../../staticMarvinVisionsBig-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Orbitron';
    src: url('../../orbitron/Orbitron-Light.woff2') format('woff2'),
        url('../../orbitron/Orbitron-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
      font-family: 'Orbitron';
      src: url('../../orbitron/Orbitron-Medium.woff2') format('woff2'),
          url('../../orbitron/Orbitron-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Orbitron';
      src: url('../../orbitron/Orbitron-Bold.woff2') format('woff2'),
          url('../../orbitron/Orbitron-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
  }
  @font-face {
      font-family: 'Orbitron';
      src: url('../../orbitron/Orbitron-Black.woff2') format('woff2'),
          url('../../orbitron/Orbitron-Black.woff') format('woff');
      font-weight: 900;
      font-style: normal;
  }

  body {
    padding: 0;
    margin: 0;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
  h1 {
    font-family: var(--orbitron);
    font-size: 3rem;
    text-align: center;
  }
  h2 {
    font-weight: 600;
  }
  h2,h3,h4,h5,h6,p,li {
    font-family: var(--sans-serif);
    line-height: var(--lh-title);
  }
  h2 {
    font-size: var(--f2);
  }
  h3 {
    font-size: var(--f3);
  }
  h4 {
    font-size: var(--f4);
  }
  h5 {
    font-size: var(--f5);
  }
  h6 {
    font-size: var(--f6);
  }
  h2 {
    margin: var(--space-xxl) 0 var(--space);
  }
  p,
  li {
    font-size: var(--f3);
    line-height: var(--lh-copy);
  }
  article p {
    margin: 0 0 var(--space);
  }
  ol,
  ul {
    padding: 0;
    list-style-position: outside;
    margin: 0 0 var(--space);
  }
  blockquote p,
  article section blockquote p:only-child {
    font-size: var(--f1);
    font-family: var(--orbitron);
    line-height: var(--lh-title);
    padding-left: 5rem;
    color: var(--gray-6);
    margin: var(--space-xxl) auto;
    background: #8A2387;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #F27121, #E94057, #8A2387);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  article {
    position: relative;
  }
  article ul:first-child {
    position: fixed;
    left: 0;
    top: var(--space-xxl);
    padding: var(--space-xl);
    max-width: 100%;
    margin: 0;
    li {
      font-family: var(--code);
      font-size: var(--f8);
    }
    li:nth-child(2) a {
      color: var(--orange-6);
    }
    li:nth-child(3) a {
      color: var(--red-6);
    }
    li:nth-child(4) a {
      color: var(--purple-6);
    }
    li:nth-child(5) a {
      color: var(--indigo-6);
    }
    li:nth-child(6) a {
      color: var(--blue-6);
    }
    li:nth-child(7) a {
      color: var(--cyan-6);
    }
    li:nth-child(8) a {
      color: var(--teal-6);
    }
    li:nth-child(9) a {
      color: var(--green-6);
    }
    li:nth-child(10) a {
      color: var(--lime-6);
    }
    li:nth-child(11) a {
      color: var(--yellow-6);
    }
    li:nth-child(12) a {
      color: var(--amber-6);
    }
    li:nth-child(13) a {
      color: var(--deep-orange-6);
    }
    li:nth-child(14) a {
      color: var(--pink-6);
    }
    li:nth-child(15) a {
      color: var(--brown-6);
    }
  }
  article section p:first-of-type {
    font-size: var(--f3);
  }
  article section p:only-child {
    font-size: var(--f5);
  }
  article:first-child h3 a {
    color: var(--orange-6);
  }
  article:nth-child(2) h3 a {
    color: var(--red-6);
  }
  article:last-child h3 a {
    color: var(--purple-6);
  }
  big {
    display: block;
    font-size: var(--f1);
    font-family: var(--orbitron);
  }
  code {
    font-family: var(--code);
  }
  pre {
    // border: 1px solid rgba(0,0,0,.1);
    // background-color: #fdf9f6;
  }
  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }
  .gatsby-highlight {
  	position: relative;
  }

  .gatsby-highlight pre[class*="language-"]::before {
  		color: #232129;
      font-size: 0.75rem;
      font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      letter-spacing: 0.075em;
      line-height: 1;
      position: absolute;
      left: 1.5rem;
      text-align: right;
      text-transform: uppercase;
      top: 0px;
      border-radius: 0px 0px 4px 4px;
      padding: 0.25rem 0.5rem;
  }
  .gatsby-highlight pre[class="language-css"]::before {
      content: "css";
  }
  .gatsby-highlight pre[class="language-text"]::before {
      content: "text";
  }

`;

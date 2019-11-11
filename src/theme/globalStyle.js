import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  :root {
    --sans-serif: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    --serif: 'minion pro',georgia,times,serif;
    --marvin: 'Marvin Visions Big';
    --code: Menlo, Consolas, monaco, monospace;
    --courier: 'Courier Next', courier, monospace;

    --f1: 3rem;
    --f2: 2.25rem;
    --f3: 1.5rem;
    --f4: 1.25rem;
    --f5: 1rem;
    --f6: .875rem;
    --f7: .75rem;

    --lh-solid: 1;
    --lh-title: 1.25;
    --lh-copy: 1.6;

    --space-xxs: .25rem;
    --space-xs: .5rem;
    --space-sm: .75rem;
    --space: 1rem;
    --space-md: 1.25rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-xxl: 3rem;

    --gray-6: #757575;
    --gray-9: #333333;

  }

  @font-face {
    font-family: 'Marvin Visions Big';
    src: url('../../staticMarvinVisionsBig-Bold.woff2') format('woff2'),
        url('../../staticMarvinVisionsBig-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  body {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
  h1 {
    font-family: var(--marvin);
    font-size: 4rem;
    text-align: center;
  }
  h2,h3,h4,h5,h6,p,li {
    font-family: var(--serif);
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
    font-family: var(--serif);
    font-style: italic;
    line-height: var(--lh-title);
    color: var(--gray-6);
    margin: var(--space-xxl) auto;
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
      font-size: var(--f6);
    }
  }
  article section p:first-of-type {
    font-size: var(--f3);
  }
  article section p:only-child {
    font-size: var(--f4);
  }
`;

import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header>
        <nav className={styles.siteNav}>
          <ul>
            <li>
              <a href="/#">Logo - by thoughtbot</a>
            </li>
            <li>
              <a href="/#">Trails</a>
            </li>
            <li>
              <a href="/#">Videos</a>
            </li>
            <li>
              <a href="/#">Flashcards</a>
            </li>
            <li>
              <a href="/#">Forum</a>
            </li>
            <li>
              <a href="/#">Search</a>
            </li>
            <li>
              <a href="/#">About Us</a>
            </li>
            <li>
              <a href="https://thoughtbot.com/upcase/sign_in?return_to=%2Fupcase%3Fref%3Dlandingfolio">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className={styles.heroSection}>
          <section className="hero background background--upcase-logo-light background--dark-gradient-cover-top-half">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="93"
              height="93"
              role="presentation"
            >
              <defs>
                <linearGradient x1="50%" y1="84.287%" x2="50%" y2="0%" id="a">
                  <stop stop-color="#6F7378" offset="0%"></stop>
                  <stop stop-color="#29292C" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g fill-rule="nonzero" fill="none">
                <rect
                  fill-opacity=".1"
                  fill="#B7BDC5"
                  width="93"
                  height="93"
                  rx="46.5"
                ></rect>
                <path
                  d="M20.27 64.185a174.8 174.8 0 0 0 3.98 3.097 2.325 2.325 0 0 0 2.92-.092c8.474-7.28 10.234-8.625 15.437-13.337a5.443 5.443 0 0 1 7.242-.035c6.8 6.021 9.842 8.39 15.516 13.379a2.32 2.32 0 0 0 2.906.125c1.275-.94 2.96-2.19 4.157-3.123a2.123 2.123 0 0 0 .49-2.836c-4.795-7.46-19.576-28.946-24.742-36.439a2.192 2.192 0 0 0-3.608 0c-5.172 7.501-19.981 29.028-24.752 36.456a2.121 2.121 0 0 0 .454 2.805z"
                  fill-opacity=".5"
                  fill="url(#a)"
                ></path>
              </g>
            </svg>

            <h1 className="hero__tagline">Upcase by thoughtbot</h1>

            <h2 className="hero__uvp">
              <strong>We're not a bootcamp, we're a finishing school.</strong>{' '}
              Become an experienced developer and take "junior" out of your
              title.
            </h2>

            <a
              className="button button--large button--on-dark"
              href="/upcase/practice"
            >
              Start Learning Today!
            </a>
          </section>
        </section>
        <section>Section 2</section>
      </main>
      <footer>Footer</footer>
    </>
  );
}

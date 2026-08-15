import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Go Army Beat Navy, home">
      <span class="wordmark-mark" aria-hidden="true">A</span>
      <span>West Point<br><strong>Football</strong></span>
    </a>
    <nav aria-label="Main navigation">
      <a href="#legacy">Legacy</a>
      <a href="#game-day">Game day</a>
      <a href="#credits">Credits</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top" aria-labelledby="hero-title">
      <img class="hero-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Michie_Stadium_-_Army_Black_Knights_%2855195710308%29.jpg/1920px-Michie_Stadium_-_Army_Black_Knights_%2855195710308%29.jpg" alt="Michie Stadium at West Point viewed from above the stands" fetchpriority="high" />
      <div class="hero-scrim" aria-hidden="true"></div>
      <div class="hero-grid" aria-hidden="true"></div>
      <p class="hero-kicker reveal">United States Military Academy</p>
      <h1 id="hero-title" class="reveal">Go Army.<br><em>Beat Navy.</em></h1>
      <div class="hero-bottom reveal">
        <p>Duty. Honor. Country.<br>Four quarters. One mission.</p>
        <a class="primary-link" href="#legacy">Enter the rivalry</a>
      </div>
      <p class="photo-label">Michie Stadium / West Point, New York</p>
    </section>

    <div class="rally-strip" aria-hidden="true">
      <span>Go Army</span><b>Beat Navy</b><span>Sing Second</span><b>Go Army</b><span>Beat Navy</span>
    </div>

    <section class="manifesto" id="legacy" aria-labelledby="legacy-title">
      <div class="section-number" aria-hidden="true">01</div>
      <div class="manifesto-copy reveal">
        <p class="eyebrow">A rivalry since 1890</p>
        <h2 id="legacy-title">More than a game.<br>A standard.</h2>
        <p class="lead">Every December, the Corps comes together for college football's most enduring service-academy rivalry. The uniform means more. The last whistle means everything.</p>
      </div>
      <dl class="stats reveal">
        <div><dt>1890</dt><dd>First meeting</dd></div>
        <div><dt>126</dt><dd>Games played</dd></div>
        <div><dt>55</dt><dd>Army victories</dd></div>
      </dl>
    </section>

    <section class="battlefield" aria-label="Army football in action">
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Army_Football_v_Troy_University_Trojans_%28231014-A-YJ405-200%29.jpg" alt="An Army football player carries the ball through the rain at Michie Stadium" loading="lazy" />
      <div class="battlefield-type reveal" aria-hidden="true"><span>Every</span><strong>Yard</strong><span>Earned</span></div>
      <p class="photo-label">Michie Stadium / October 2023</p>
    </section>

    <section class="tradition" aria-labelledby="tradition-title">
      <div class="tradition-heading reveal">
        <p class="eyebrow">The final tradition</p>
        <h2 id="tradition-title">Sing<br>second.</h2>
      </div>
      <div class="tradition-copy reveal">
        <p>After the game, both teams stand for both alma maters. The winning academy sings last.</p>
        <p>Respect first. Victory second. That is the standard.</p>
      </div>
      <ol class="timeline" aria-label="Selected Army-Navy milestones">
        <li class="reveal"><time>1891</time><span>Army's first victory</span><strong>32-16</strong></li>
        <li class="reveal"><time>1945</time><span>No. 1 Army wins the game of the century</span><strong>32-13</strong></li>
        <li class="reveal"><time>2016</time><span>Fourteen-year drought broken</span><strong>21-17</strong></li>
        <li class="reveal"><time>2022</time><span>First overtime game in series history</span><strong>20-17</strong></li>
      </ol>
    </section>

    <section class="game-day" id="game-day" aria-labelledby="game-day-title">
      <div class="game-day-copy reveal">
        <p class="eyebrow">America's Game / 2026</p>
        <h2 id="game-day-title">The mission<br>has a date.</h2>
        <div class="game-meta">
          <p><span>Date</span><strong>December 12, 2026</strong></p>
          <p><span>Ground</span><strong>MetLife Stadium</strong></p>
          <p><span>Location</span><strong>East Rutherford, NJ</strong></p>
        </div>
      </div>
      <div class="countdown reveal" aria-label="Countdown to December 12, 2026">
        <p>Until Army-Navy</p>
        <div><span id="countdown-days">--</span><small>days</small></div>
      </div>
    </section>

    <section class="tunnel" aria-labelledby="tunnel-title">
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Beat_Navy_Tunnel%2C_West_Point.jpg" alt="The Beat Navy tunnel beneath Washington Road at West Point" loading="lazy" />
      <div class="tunnel-copy reveal">
        <p class="eyebrow">West Point, New York</p>
        <h2 id="tunnel-title">The message<br>is everywhere.</h2>
        <p>On the field. In the barracks. Under Washington Road. Some things do not need explaining.</p>
      </div>
    </section>

    <section class="final-call" aria-label="Go Army Beat Navy">
      <p aria-hidden="true">Go Army</p>
      <h2>Beat<br>Navy.</h2>
      <span>See you December 12.</span>
    </section>
  </main>

  <footer id="credits">
    <div class="footer-lockup"><span class="wordmark-mark" aria-hidden="true">A</span><strong>Go Army.<br>Beat Navy.</strong></div>
    <p>This independent fan site is not affiliated with, endorsed by, or sponsored by the United States Military Academy, the U.S. Army, Army West Point Athletics, or the Department of Defense.</p>
    <div class="credits">
      <p>Photography via Wikimedia Commons.</p>
      <a href="https://commons.wikimedia.org/wiki/File:Michie_Stadium_-_Army_Black_Knights_(55195710308).jpg" target="_blank" rel="noreferrer">Stadium: Ajay Suresh, CC BY 4.0</a>
      <a href="https://commons.wikimedia.org/wiki/File:Army_Football_v_Troy_University_Trojans_(231014-A-YJ405-200).jpg" target="_blank" rel="noreferrer">Football: John Pellino / USMA, public domain</a>
      <a href="https://commons.wikimedia.org/wiki/File:Beat_Navy_Tunnel,_West_Point.jpg" target="_blank" rel="noreferrer">Tunnel: Ahodges7, public domain</a>
    </div>
  </footer>
`

const gameDate = new Date('2026-12-12T00:00:00-05:00')
const daysRemaining = Math.max(0, Math.ceil((gameDate - new Date()) / 86400000))
document.querySelector('#countdown-days').textContent = String(daysRemaining)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.14 },
)

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

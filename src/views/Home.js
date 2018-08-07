import React from "react";
import { Link } from "react-router-dom";

const numberOfRaces = 'fifteen'
const numberOfGuilds = 'nine'

const Home = () => (

  <div className="view-root view-home">
    <h2>Once more unto the breach, dear friends...</h2>

    <div componentclasses="test">
      <h3>Welcome traveller, your sojourn awaits. Only a thin barrier remains between you and a realm where your mind can soar, unbound from the fetters of the mundane world.</h3>

      <p>Let your spirit take shape in one of { numberOfRaces } races, cast your will into one of { numberOfGuilds } guilds and begin your journey towards destiny. Forge friendships, gain power, work with allies and vanquish foes.</p>

      <p>Become part of the rich history of adventures who have made their home in a world that is both challenging and rewarding.</p>

      <p>Step through the portal and immerse yourself in the mythical realm of Astaria...</p>
    </div>

    {/*
    <div>
      <h2>New to the MUD gaming experience?</h2>
      <p>With countless graphic-based games out there, why would you want anything else?</p>

      <div className="panel-section">
        <h2>Simplicity</h2>
        <p>There's no graphics other than the occasional piece of <a href="https://en.wikipedia.org/wiki/ASCII_art" target="_blank" rel="noopener noreferrer">ASCII art</a>. Instead, people, stories and exploration comprise our realm, <Link to="/resources">just itching to be explored...</Link></p>
      </div>

      <div className="panel-section">
        <h2>The Annals History</h2>
        <p>MUDs have evolved like everything else on the internet. They began as rudimentary multi-user chat rooms as far back as 1975, some tied in with automated D&amp;D-style Dungeon Masters, some have since been adapted into graphical games which are still enjoyed today. <a href="http://en.wikipedia.org/wiki/MUD" target="_blank" rel="noopener noreferrer">Wikipedia's article on MUDs</a> contains more information.</p>
        <p>Astaria was first launched in 1994, between then and now we've had countless contributors and players, and we're still serving up good times.</p>
      </div>

      <div className="panel-section">
        <h2>It's free</h2>
        <p>Well, Astaria is. There do exist pay-to-play MUDs, but Astaria has and will always be free to play.</p>
      </div>
    </div>
    */}

    <div>
      <ul className="cta">
        <li>
          <Link to="/client">
            <span className="cta-label cta-label--secondary">Step 1: Get the game (it's free)</span>
          </Link>
        </li>
        <li>
          <Link to="/client">
            <span className="cta-label cta-label--primary">Explore!</span>
          </Link>
        </li>
        {/*
          This old ass link curently throws a malware warning in Chrome! No thanks. Leaving it here in case they ever fix it.

        <li><a href="http://www.mudconnect.com/mud-bin/vote_rank.cgi?mud=Astaria" target="_blank" rel="noopener noreferrer">Vote for Astaria!</a></li>
        <li>Donate &amp; save lives!</li>

        */}
      </ul>
    </div>

  </div>
);

export default Home;
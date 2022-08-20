import React from 'react'
import './css/portfolio.css'
import fylo from './img/fylo.JPG'
import gym2fit from './img/gym2fit.JPG'
import huddle from './img/huddle.JPG'
import clipboard from './img/clipboard.JPG'

const Portfolio = () => {
  return (
    <section id="portfolio">
        <div className="projects">
            <h2>PORTFOLIO</h2>
            <div className="project-item">
                <img src={fylo} alt="fylo website" />
                <h3>Fylo</h3>
                <p>
                  Fylo stores your most important files in one secure location.
                  Access them wherever you need, share and collaborate with
                  friends, family, and co-workers
                </p>
                <a href="https://austinet.github.io/fylo-dark-theme-landing-page-created-by-austinet">View Site</a>
            </div>
            <div className="project-item">
                <img src={gym2fit} alt="gym2fit website" />
                <h3>Gym2fit</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non earum repellat magni nemo, magnam alias maiores sequi ex atque quaerat adipisci nisi quibusdam, veritatis mollitia modi reiciendis ipsam, saepe natus.
                </p>
                <a href="https://austinet.github.io/gym2fit/">View Site</a>
            </div>
            <div className="project-item">
                <img src={huddle} alt="huddle website" />
                <h3>Huddle</h3>
                <p>
                   Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                </p>
                <a href="https://austinet.github.io/huddle-landing-page/">View Site</a>
            </div>
            <div className="project-item">
                <img src={clipboard} alt="clipboard website" />
                <h3>Clipboard</h3>
                <p>
                   Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices. Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. 
                </p>
                <a href="https://austinet.github.io/clipboard-landing-page/">View Site</a>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
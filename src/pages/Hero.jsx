import React from 'react'
import styles from "./Hero.module.css"
import get1 from '../assets/get1.png'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero-div1}>
        <div className={styles.hero-div2}>
          <h4>Proven strategies backed by science for success.</h4>
          <h2>Live life at the full potential</h2>
          <p>I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
          <button>Get your free guide now</button>
        </div>
        <div className={styles.hero-div3}>
          <img src={get1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero

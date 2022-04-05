class WebringBanner extends HTMLElement {
  constructor() {
    super();

    this.shadowObj = this.attachShadow({ mode: "open" });
    this.render();
  }

  getStyles() {
    return `
        <style>   
        .webring__box {
          height: 100px;
          width: 300px;
          background-color: rgb(230, 230, 230);
          margin-top: 1vh;
          margin-bottom: 1vh;
          text-align: center;
          padding: 3px 3px 3px 3px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        
          border-color: #da0000;
          border-radius: 10px;
          border-style: ridge;
          border-width: 0.3rem;
        }
        
        .webring__icon {
          width: 100px;
          height: 100px;
          position: relative;
          flex-shrink: 1;
        }
        
        .webring__description {
          flex-grow: 1;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }
        
        .webring__description p {
          flex-shrink: 1;
          margin: 0;
          font-family: "Courier New", Courier, monospace;
          text-align: center;
        }

        .webring__description a {
          color: #1460aa;
          flex-shrink: 1;
          flex-grow: 0;
        }
        .webring__description a:visited {
          color: #77448b;
        }
        </style>
      `;
  }

  getTemplate() {
    return `
          ${this.getStyles()}
          <div class="webring__box">
              <img class="webring__icon" src="https://blasebears.neocities.org/baseball.gif" alt="" />
              <div class="webring__description">
                <span>This site is part of</span>
                <a href="https://ring.yell.rocks/">Internet League Blaseball Fans Web Ring</a>
                <p>
                  <a href="https://ring.yell.rocks/prev">⬅️</a>
                  <a href="https://ring.yell.rocks/random">Random</a>
                  <a href="https://ring.yell.rocks/next">➡️</a>
                </p>
              </div>
            </div>
          </div>
        `;
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }
}

customElements.define("webring-banner", WebringBanner);

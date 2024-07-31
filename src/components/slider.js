import { LitElement, html } from 'lit';

class MySlider extends LitElement {
    static properties = {
        w: { type: Number },
        h: { type: Number },
    };

    constructor() {
        super();
        this.w = 800; // default width
        this.h = 400; // default height
    }

    render() {
        return html`
          <img
            class="slider-img"
            src="https://via.placeholder.com/${this.w}x${this.h}"
            width="${this.w}"
            height="${this.h}"
            alt="Slider Image"
          />
        `;
    }
}

customElements.define('my-slider', MySlider);

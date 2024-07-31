import { LitElement, html } from 'lit';

class myImg extends LitElement {
    static properties = {
        w: { type: Number },
        h: { type: Number },
        name: { type: String },
    };

    constructor() {
        super();
        this.w = 800; // default width
        this.h = 400; // default height
        this.name = '';
    }

    render() {
        return html`
            <img
            class=${this.name}
            src="https://placehold.co/${this.w}x${this.h}"
            width="${this.w}"
            height="${this.h}"
            alt=""
            />
        `;
    }
}

customElements.define('my-img', myImg);
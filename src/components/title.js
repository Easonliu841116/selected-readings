import { LitElement, html } from 'lit';
import '@/styles/title.scss';

class MyTitle extends LitElement {
    static properties = {
        title: { type: String },
        name: { type: String }
    };

    constructor() {
        super();
        this.title = '';
        this.name = '';
    }

    render() {
        return html`
            <h2 class="title ${this.name}">${this.title}</h2>
        `;
    }
}

customElements.define('my-title', MyTitle);

class MyTitleMore extends LitElement {
    static properties = {
        title: { type: String },
        name: { type: String }
    };

    constructor() {
        super();
        this.title = '';
        this.name = '';
    }

    render() {
        return html`
        <div class="title__wrapper">
            <h2 class="title ${this.name}">${this.title}</h2>
            <a href="#" class="more">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                height="3.828" viewBox="0 0 16 3.828">
                <g id="Group_11254" data-name="Group 11254">
                    <path id="Path_16206" data-name="Path 16206"
                        d="M1.914,0a1.914,1.914,0,0,0,0,3.828,1.737,1.737,0,0,0,1.34-.574,1.737,1.737,0,0,0,.574-1.34A1.811,1.811,0,0,0,3.254.574,1.737,1.737,0,0,0,1.914,0"
                        transform="translate(0 0)" fill="#7e7e7e" />
                    <path id="Path_16207" data-name="Path 16207"
                        d="M18.65,0a1.914,1.914,0,0,0,0,3.828,1.737,1.737,0,0,0,1.34-.574,1.737,1.737,0,0,0,.574-1.34A1.811,1.811,0,0,0,19.99.574,1.737,1.737,0,0,0,18.65,0"
                        transform="translate(-10.65 0)" fill="#7e7e7e" />
                    <path id="Path_16208" data-name="Path 16208"
                        d="M36.726.574A1.737,1.737,0,0,0,35.386,0a1.914,1.914,0,1,0,0,3.828,1.737,1.737,0,0,0,1.34-.574,1.737,1.737,0,0,0,.574-1.34,1.811,1.811,0,0,0-.574-1.34"
                        transform="translate(-21.3 0)" fill="#7e7e7e" />
                </g>
            </svg>
            </a>
        </div>
        `;
    }
}

customElements.define('my-title-more', MyTitleMore);
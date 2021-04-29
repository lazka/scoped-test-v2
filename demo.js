import {LitElement, html} from 'lit';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';

class Internal extends ScopedElementsMixin(LitElement) {
    constructor() {
        super();
    }

    render() {
        return html`world`;
    }
}

class DbpCommonDemo extends ScopedElementsMixin(LitElement) {
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();

        this.updateComplete.then(() => {
            let internal = this.shadowRoot.querySelector(this.getScopedTagName('something-internal'));
            internal.setAttribute('style', "font-size: 1.5em");
        });
    }

    static get scopedElements() {
        return {
            'something-internal': Internal,
        };
    }

    render() {
        return html`hello <something-internal></something-internal>`;
    }
}

customElements.define('dbp-common-demo', DbpCommonDemo);
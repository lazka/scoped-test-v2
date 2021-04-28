// uncomment to make things work
// import 'https://unpkg.com/@open-wc/scoped-elements@2.0.0-next.0/src/loadPolyfill.js';
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
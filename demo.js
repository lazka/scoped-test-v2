// uncomment to make things work
//import 'https://unpkg.com/@open-wc/scoped-elements@2.0.0-next.0/src/loadPolyfill.js';
import {LitElement, html} from 'lit';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';

class DbpCommonDemo extends ScopedElementsMixin(LitElement) {
    constructor() {
        super();
    }

    static get scopedElements() {
        return {
        };
    }

    render() {
        return html`hello`;
    }
}

customElements.define('dbp-common-demo', DbpCommonDemo);
import {LitElement} from 'lit';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';

class DbpCommonDemo extends ScopedElementsMixin(LitElement) {
    constructor() {
        super();
    }

    static get scopedElements() {
        return {
            //'something-different': customElements.get('something-different'),
        };
    }

    render() {
        return html`hello`;
    }
}

customElements.define('dbp-common-demo', DbpCommonDemo);
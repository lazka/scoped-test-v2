import {LitElement, html} from 'lit';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';

class SomethingDifferent extends LitElement
{
    render() {
        return html`works!`;
    }
}

customElements.define('something-different', SomethingDifferent);

class Demo extends ScopedElementsMixin(LitElement) {
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();

        this.updateComplete.then(() => {
            this.defineScopedElement('something-different', SomethingDifferent);
        });
    }

    render() {
        return html`This should say works: <something-different></something-different>`;
    }
}

customElements.define('some-demo', Demo);
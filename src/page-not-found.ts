import { LitElement, html, css, TemplateResult, CSSResultArray } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-not-found")
export class PageNotFound extends LitElement {
    static styles: CSSResultArray = [
        css`
            :host {
                display: block;
            }
        `,
    ];

    protected render(): TemplateResult {
        return html`Page not found`;
    }
}

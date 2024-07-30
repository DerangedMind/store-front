import { CSSResultGroup, LitElement, TemplateResult, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@vaadin/router";
import "./home/home-page";
import "./about/about-page";
import "./contact/contact-page";
import "./product/product-show-page";
import "./page-not-found";
import "./base-components/nav-bar";

const router = new Router(document.querySelector("page-wrapper"));
router.setRoutes([
    { path: "/", component: "home-page" },
    { path: "/about", component: "about-page" },
    { path: "/contact", component: "contact-page" },
    { path: "/product/(.*)", component: "product-show-page" },
    { path: "/(.*)", component: "page-not-found" },
]);

@customElement("page-wrapper")
export class PageWrapper extends LitElement {
    static styles?: CSSResultGroup = [
        css`
            :host {
                width: 100%;
            }
        `,
    ];
    protected render(): TemplateResult {
        return html`
            <nav-bar></nav-bar>
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "page-wrapper": PageWrapper;
    }
}

import { LitElement, html, css, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

const leafSVG = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
            d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
        />
    </svg>
`;

@customElement("nav-bar")
export class NavBar extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                width: 100%;
                position: fixed;
                z-index: 2;
                background-color: #242424;
            }
            nav {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                width: 100%;
            }

            nav::after {
                box-shadow: 0 1rem 2rem 1rem rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 0px 15px 32px 16px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 0px 15px 32px 16px rgba(0, 0, 0, 0.75);
            }

            .nav-logo {
                padding: 0.5rem 1rem;
            }

            .nav-logo a {
                text-decoration: none;
                font-size: 1.25rem;
                font-weight: 500;
                color: #e9e9e9;
            }

            .leaf-svg svg {
                fill: green;
                width: 1rem;
                height: 1rem;
            }

            nav .menu {
                display: flex;
                flex-direction: row;
            }

            nav .menu div {
                padding: 0.5rem 1rem;
            }
        `,
    ];

    // protected createRenderRoot(): HTMLElement | DocumentFragment {
    //     return this;
    // }

    protected render(): TemplateResult {
        return html`
            <nav>
                <div class="nav-logo">
                    <a href="/"><i class="leaf-svg">${leafSVG}</i> MyStore</a>
                </div>
                <div class="menu">
                    <div><a href="/">Home</a></div>
                    <div><a href="/about">About</a></div>
                    <div><a href="/contact">Contact</a></div>
                </div>
            </nav>
        `;
    }
}

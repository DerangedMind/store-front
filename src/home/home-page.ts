import {
    LitElement,
    html,
    css,
    TemplateResult,
    CSSResultArray,
    unsafeCSS,
} from "lit";
import { customElement, property } from "lit/decorators.js";
import splashImage from "../assets/stephanie-krist-zziuyr_T3jQ-unsplash.jpg";

@customElement("home-page")
export class HomePage extends LitElement {
    public static styles: CSSResultArray = [
        css`
            :host {
                display: block;
            }

            .hero {
                background-image: url(${unsafeCSS(splashImage)});
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                min-height: 80vh;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            .hero h1 {
                font-size: 2rem;
            }

            .hero h2 {
            }

            .hero .ctas a {
                text-decoration: none;
            }

            .hero .ctas .btn.store-link {
                padding: 1rem 1.5rem;
                background-color: rebeccapurple;
                border-radius: 1rem;
                color: #111;
                font-weight: 500;
                font-size: 1.125rem;
                box-shadow: 0.25rem 0.25rem 2rem 0.125rem rgba(0, 0, 0, 0.75);
            }

            .hero .ctas .btn.about-link {
                margin-top: 0.75rem;
                color: #111;
            }
        `,
    ];

    protected render(): TemplateResult {
        return html`
            <header>
                <section class="hero">
                    <div class="title">
                        <h1>MyStore</h1>
                        <h2>Selling you things you want or need</h2>
                    </div>
                    <div class="ctas">
                        <a href="/store">
                            <div class="btn store-link">Visit store</div>
                        </a>
                        <a href="about">
                            <div class="btn about-link">
                                Learn more about our products...
                            </div>
                        </a>
                    </div>
                </section>
            </header>
        `;
    }
}

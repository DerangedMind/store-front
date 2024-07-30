import { LitElement, html, css, TemplateResult, CSSResultArray } from "lit";
import { customElement } from "lit/decorators.js";
import bouquetImg from "../assets/annie-spratt-uiWIMe_dMHU-unsplash.jpg";
import pageCopy from "../i18n/en.json";

@customElement("product-show-page")
export class ProductShowPage extends LitElement {
    static styles: CSSResultArray = [
        css`
            :host {
                display: block;
            }

            main {
                margin: 4rem 2rem;
            }

            .product-summary {
                display: flex;
                gap: 4rem;
            }

            .product-summary .images {
                max-width: 30rem;
            }

            section img {
                width: 100%;
            }

            @media only screen and (max-width: 992px) {
                .product-summary {
                    flex-direction: column;
                }
            }
        `,
    ];

    protected render(): TemplateResult {
        return html`
            <main>
                <h2>Everyday Bouquets</h2>
                <section class="product-summary">
                    <div class="images">
                        <img src=${bouquetImg} />
                    </div>
                    <div class="summary">${pageCopy.product.summary}</div>
                </section>
                <section class="product-description">
                    <h3>Fresh seasonal bouquet</h3>
                    <p>${pageCopy.product.description}</p>
                </section>
            </main>
        `;
    }
}

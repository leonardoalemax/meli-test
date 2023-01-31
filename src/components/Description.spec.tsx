import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import "@testing-library/jest-dom";
import Description from "./Description";

test("Should render Default state of Description component", () => {
	const { baseElement } = render(
		<Router>
			<Description
				iten={{
					id: "MLB3085491614",
					title: "Test Item 2",
					thumbnail_id: "THUMB123215",
					price: 102,
					currency_id: "BRL",
					plain_text: "DESCRIPTION",
					warranty: "warranty",
					category_id: "CATID",
					shipping: {
						free_shipping: false,
					},
					permalink: "MELI.COM",
				}}
			/>
		</Router>
	);
	expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <div
          class="meli-breadcomb"
        >
          <a
            class="meli-breadcomb-iten"
            href="/"
          >
            Busca
          </a>
          <span>
             
            &gt;
             
          </span>
          <a
            class="meli-breadcomb-iten"
            href="/items?search=CATID"
          >
            CATID
          </a>
        </div>
        <div
          class="meli-product-description"
        >
          <div
            class="meli-product-header"
          >
            <div
              class="meli-product-description-thumb"
              data-index="0"
              tabindex="-1"
            >
              <img
                alt="Test Item 2"
                decoding="async"
                height="500"
                src="https://http2.mlstatic.com/D_NQ_NP_2X_THUMB123215-F.webp"
                width="410"
              />
            </div>
            <div
              class="meli-product-description-attributes"
            >
              <h4>
                Test Item 2
              </h4>
              <h1>
                R$ 102,00
              </h1>
              <p>
                warranty
              </p>
              <a
                href="MELI.COM"
              >
                Comprar agora
              </a>
            </div>
          </div>
          <div
            class="meli-product-description-text"
          >
            <h4>
              Descrição
            </h4>
            <p>
              DESCRIPTION
            </p>
          </div>
        </div>
      </div>
    </body>
  `);
});

test("Should render Description component with free shipping", () => {
	const { baseElement } = render(
		<Router>
			<Description
				iten={{
					id: "MLB3085491614",
					title: "Test Item 2",
					category_id: "CATID",
					thumbnail_id: "THUMB123215",
					price: 102,
					currency_id: "BRL",
					plain_text: "DESCRIPTION",
					warranty: "warranty",
					shipping: {
						free_shipping: true,
					},
					permalink: "MELI.COM",
				}}
			/>
		</Router>
	);
	expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <div
          class="meli-breadcomb"
        >
          <a
            class="meli-breadcomb-iten"
            href="/"
          >
            Busca
          </a>
          <span>
             
            &gt;
             
          </span>
          <a
            class="meli-breadcomb-iten"
            href="/items?search=CATID"
          >
            CATID
          </a>
        </div>
        <div
          class="meli-product-description"
        >
          <div
            class="meli-product-header"
          >
            <div
              class="meli-product-description-thumb"
              data-index="0"
              tabindex="-1"
            >
              <img
                alt="Test Item 2"
                decoding="async"
                height="500"
                src="https://http2.mlstatic.com/D_NQ_NP_2X_THUMB123215-F.webp"
                width="410"
              />
            </div>
            <div
              class="meli-product-description-attributes"
            >
              <h4>
                Test Item 2
              </h4>
              <h1>
                R$ 102,00
              </h1>
              <p>
                warranty
              </p>
              <h5>
                Frete grátis
              </h5>
              <a
                href="MELI.COM"
              >
                Comprar agora
              </a>
            </div>
          </div>
          <div
            class="meli-product-description-text"
          >
            <h4>
              Descrição
            </h4>
            <p>
              DESCRIPTION
            </p>
          </div>
        </div>
      </div>
    </body>
  `);
});

import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import "@testing-library/jest-dom";
import Showcase from "./Showcase";

test("Should render Default state of Showcase component", () => {
  const { baseElement } = render(
    <Router>
      <Showcase itens={[]} />
    </Router>
  );
  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <div
          class="meli-showcase"
        >
          <div
            class="meli-showcase-zero-state"
          >
            Não há anúncios que correspondem à sua busca.
          </div>
        </div>
      </div>
    </body>
  `);
});

test("Should render Showcase component with itens list", () => {
  const { baseElement } = render(
    <Router>
      <Showcase
        itens={[
          {
            id: "MLB3085491615",
            title: "Test Item 1",
            thumbnail_id: "THUMB123213",
            price: 123333,
            shipping: {
              free_shipping: true,
            },
            installments: {
              amount: 12333,
              currency_id: "BRL",
              quantity: 10,
              rate: 0,
            },
          },
          {
            id: "MLB3085491614",
            title: "Test Item 2",
            thumbnail_id: "THUMB123215",
            price: 102,
            currency_id: "BRL",
            shipping: {
              free_shipping: false,
            },
          },
        ]}
      />
    </Router>
  );

  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <div
          class="meli-showcase"
        >
          <a
            class="meli-showcase-iten"
            href="items/MLB3085491615"
          >
            <div
              class="meli-showcase-iten-thumb"
              data-index="0"
              tabindex="-1"
            >
              <img
                alt="Test Item 1"
                decoding="async"
                height="140"
                src="https://http2.mlstatic.com/D_NQ_NP_THUMB123213-V.webp"
                width="140"
              />
            </div>
            <div
              class="meli-showcase-iten-description"
            >
              <div
                class="meli-showcase-iten-description-col"
              >
                <div
                  class="meli-showcase-iten-description-title"
                >
                  <h4>
                    Test Item 1
                  </h4>
                </div>
                <h1>
                  R$ 123.333,00
                   
                </h1>
                <h5>
                  <span>
                     em 
                  </span>
                  10
                  x
                   
                  R$ 12.333,00
                   Sem Juros
                </h5>
                <h5>
                  Frete grátis
                </h5>
              </div>
              <div
                class="meli-showcase-iten-description-col"
              />
            </div>
          </a>
          <a
            class="meli-showcase-iten"
            href="items/MLB3085491614"
          >
            <div
              class="meli-showcase-iten-thumb"
              data-index="0"
              tabindex="-1"
            >
              <img
                alt="Test Item 2"
                decoding="async"
                height="140"
                src="https://http2.mlstatic.com/D_NQ_NP_THUMB123215-V.webp"
                width="140"
              />
            </div>
            <div
              class="meli-showcase-iten-description"
            >
              <div
                class="meli-showcase-iten-description-col"
              >
                <div
                  class="meli-showcase-iten-description-title"
                >
                  <h4>
                    Test Item 2
                  </h4>
                </div>
                <h1>
                  R$ 102,00
                   
                </h1>
                <h5 />
              </div>
              <div
                class="meli-showcase-iten-description-col"
              />
            </div>
          </a>
        </div>
      </div>
    </body>
  `);
});

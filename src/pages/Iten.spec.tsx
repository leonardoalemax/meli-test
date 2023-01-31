import React from "react";
import axios from "axios";
import { act, render, screen } from "@testing-library/react";
import { Route, BrowserRouter, MemoryRouter, Routes } from "react-router-dom";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

import "@testing-library/jest-dom";
import Iten from "./Iten";

test("Should render loading state of Iten component", () => {
	const { baseElement } = render(
		<BrowserRouter>
			<Iten />
		</BrowserRouter>
	);
	expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
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
                decoding="async"
                height="500"
                src="https://http2.mlstatic.com/D_NQ_NP_2X_undefined-F.webp"
                width="410"
              />
            </div>
            <div
              class="meli-product-description-attributes"
            >
              <h4 />
              <h1>
                R$ 0,00
              </h1>
              <p />
              <a>
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
            <p />
          </div>
        </div>
      </div>
    </body>
  `);
});

test("Should render normal state of Iten component", async () => {
	mockAxios.get.mockResolvedValue({
		data: {
			id: "MLB3085491614",
			title: "Test Item 2",
			thumbnail_id: "THUMB123215",
			price: 102,
			currency_id: "BRL",
			warranty: "warranty",
			shipping: {
				free_shipping: true,
			},
			permalink: "MELI.COM",
			plain_text: "DESCRIPTION",
		},
	});

	await act(() => {
		render(
			<BrowserRouter>
				<div data-testid='iten-element'>
					<Iten />
				</div>
			</BrowserRouter>
		);
	});

	expect(screen.queryByTestId("iten-element")).toMatchInlineSnapshot(`
    <div
      data-testid="iten-element"
    >
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
              decoding="async"
              height="500"
              src="https://http2.mlstatic.com/D_NQ_NP_2X_undefined-F.webp"
              width="410"
            />
          </div>
          <div
            class="meli-product-description-attributes"
          >
            <h4 />
            <h1>
              R$ 0,00
            </h1>
            <p />
            <a>
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
          <p />
        </div>
      </div>
    </div>
  `);
});

test("Should render zero state of Iten component", async () => {
	mockAxios.get.mockResolvedValue({
		data: {},
	});

	await act(() => {
		render(
			<MemoryRouter initialEntries={["/items/1"]}>
				<Routes>
					<Route
						path='/items/:productId'
						element={
							<div data-testid='iten-element'>
								<Iten />
							</div>
						}
					/>
				</Routes>
			</MemoryRouter>
		);
	});

	expect(screen.queryByTestId("iten-element")).toMatchInlineSnapshot(`
    <div
      data-testid="iten-element"
    >
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
              decoding="async"
              height="500"
              src="https://http2.mlstatic.com/D_NQ_NP_2X_undefined-F.webp"
              width="410"
            />
          </div>
          <div
            class="meli-product-description-attributes"
          >
            <h4 />
            <h1>
              R$ 0,00
            </h1>
            <p />
            <a>
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
          <p />
        </div>
      </div>
    </div>
  `);
});

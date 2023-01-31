import React from "react";
import axios from "axios";
import { act, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

import "@testing-library/jest-dom";
import Itens from "./Itens";

test("Should render loading state of Itens component", () => {
	const { baseElement } = render(
		<Router>
			<Itens />
		</Router>
	);
	expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <div
          class="meli-showcase"
        />
      </div>
    </body>
  `);
});

test("Should render Zero state of Itens component", async () => {
	mockAxios.get.mockResolvedValueOnce({ data: { results: [] } });

	await act(() => {
		render(
			<Router>
				<div data-testid='itens-element'>
					<Itens />
				</div>
			</Router>
		);
	});

	expect(screen.queryByTestId("itens-element")).toMatchInlineSnapshot(`
    <div
      data-testid="itens-element"
    >
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
  `);
});

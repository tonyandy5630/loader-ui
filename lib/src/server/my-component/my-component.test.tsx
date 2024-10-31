import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { MyComponent } from "./my-component";

describe.concurrent("my-component", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<MyComponent className={clx} />);
		expect(screen.getByTestId("my-component").classList).toContain(clx);
	});
});

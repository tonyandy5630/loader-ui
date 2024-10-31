import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Loader } from "./loader";

describe.concurrent("loader", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Loader className={clx} />);
    expect(screen.getByTestId("loader").classList).toContain(clx);
  });
});

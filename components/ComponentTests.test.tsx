import { render } from "@testing-library/react";
import About from "./about";

it("renders correctly", () => {
  const { asFragment } = render(<About />);
  expect(asFragment).toMatchSnapshot();
});

import { render } from "@testing-library/svelte";
import Main from "./Main.svelte";

describe("main Component", () => {
  it("renders without crashing", () => {
    expect.assertions(1);
    const { getByText } = render(Main);
    expect(getByText("Sean")).toBeTruthy();
  });

  it("renders the about sections correctly", () => {
    expect.assertions(2);
    const { getByText } = render(Main);
    expect(getByText("a developer")).toBeTruthy();
    expect(getByText("a student")).toBeTruthy();
  });

  it("renders the skills section correctly", () => {
    expect.assertions(2);
    const { getByText } = render(Main);
    expect(getByText("Programming languages")).toBeTruthy();
    expect(
      getByText("JavaScript, TypeScript, Java, HTML/CSS, Python, SQL/NoSQL")
    ).toBeTruthy();
  });

  it("renders the hobbies section correctly", () => {
    expect.assertions(2);
    const { getByText } = render(Main);
    expect(getByText("Hobbies")).toBeTruthy();
    expect(
      getByText("Mountain climbing, Hiking, Running, Weightlifting, Reading")
    ).toBeTruthy();
  });
});

import { render } from "@testing-library/svelte";
import Main from "./Main.svelte";

describe("Main Component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(Main);
    expect(getByText("Sean")).toBeTruthy();
  });

  it("renders the about sections correctly", () => {
    const { getByText } = render(Main);
    expect(getByText("a developer")).toBeTruthy();
    expect(getByText("a student")).toBeTruthy();
  });

  it("renders the skills section correctly", () => {
    const { getByText } = render(Main);
    expect(getByText("Programming languages")).toBeTruthy();
    expect(
      getByText("JavaScript, Java, HTML/CSS, Python, SQL/NoSQL"),
    ).toBeTruthy();
  });

  it("renders the hobbies section correctly", () => {
    const { getByText } = render(Main);
    expect(getByText("Hobbies")).toBeTruthy();
    expect(
      getByText("Mountain climbing, Hiking, Running, Weight lifting"),
    ).toBeTruthy();
  });
});

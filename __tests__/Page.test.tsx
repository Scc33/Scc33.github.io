import Home from "@/app/page";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { render } from "@testing-library/react";
import { it, expect, vi } from "vitest";

const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;
window.matchMedia = vi.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(), // Deprecated
  removeListener: vi.fn(), // Deprecated
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn()
}));

it("Renders page correctly", async () => {
  const { asFragment } = render(
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <Home />
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
  await expect(asFragment()).toMatchFileSnapshot(
    "./__snapshots__/Page.snap.html"
  );
});

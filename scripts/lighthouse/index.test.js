import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { formatLighthouseResults } from "./index";

describe("formatLighthouseResults", () => {
  const MOCK_LIGHTHOUSE_RESULT = `{
      "performance": {
        "title": "Performance",
        "id": "performance",
        "score": 0.65
      },
      "accessibility": {
        "title": "Accessibility",
        "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://developer.chrome.com/docs/lighthouse/accessibility/). Automatic detection can only detect a subset of issues and does not guarantee the accessibility of your web app, so [manual testing](https://web.dev/articles/how-to-review) is also encouraged.",
        "score": 0.75
      },
      "best-practices": {
        "id": "best-practices",
        "score": 1
      },
      "seo": {
        "title": "SEO",
        "description": "These checks ensure that your page is following basic search engine optimization advice. There are many additional factors Lighthouse does not score here that may affect your search ranking, including performance on [Core Web Vitals](https://web.dev/explore/vitals). [Learn more about Google Search Essentials](https://support.google.com/webmasters/answer/35769).",
        "id": "seo",
        "score": 1
      }
    }`;

  let mockCore, originalEnv;

  beforeEach(() => {
    mockCore = { setOutput: vi.fn() };
    originalEnv = process.env;
    process.env = {
      ...process.env,
      LIGHTHOUSE_RESULT: MOCK_LIGHTHOUSE_RESULT
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("formats stoplight colors correctly", () => {
    formatLighthouseResults({ core: mockCore });

    const expectations = [
      expect.stringContaining("🟢 100"),
      expect.stringContaining("🟠 75"),
      expect.stringContaining("🔴 65")
    ];

    expectations.forEach((expectation) => {
      expect(mockCore.setOutput).toBeCalledWith("comment", expectation);
    });
  });
});

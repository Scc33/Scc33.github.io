/* eslint-disable no-console */
/* eslint-disable jsdoc/require-param */
"use strict";

const stoplight = (res) => (res >= 90 ? "🟢" : res >= 75 ? "🟠" : "🔴");
const normalizeScore = (res) => Math.round(res * 100);
const formatScore = (res) => {
  const normalizedScore = normalizeScore(res);
  return `${stoplight(normalizedScore)} ${normalizedScore}`;
};

/**
 * `core` is in scope from https://github.com/actions/github-script
 */
export const formatLighthouseResults = ({ core }) => {
  console.log("LIGHTHOUSE_RESULT", process.env.LIGHTHOUSE_RESULT);
  // this will be the shape of https://github.com/treosh/lighthouse-ci-action#manifest
  const resultsJson = JSON.parse(process.env.LIGHTHOUSE_RESULT).categories;

  // start creating our markdown table
  const header = [
    "Lighthouse Results",
    "| Performance | Accessibility | Best Practices | SEO |",
    "| - | - | - | - |"
  ];

  // make each formatted score from our lighthouse properties
  const performanceScore = formatScore(resultsJson.performance.score);
  const accessibilityScore = formatScore(resultsJson.accessibility.score);
  const bestPracticesScore = formatScore(resultsJson["best-practices"].score);
  const seoScore = formatScore(resultsJson.seo.score);

  const results = `${performanceScore} | ${accessibilityScore} | ${bestPracticesScore} | ${seoScore}`;

  // join the header and  the rows together
  const finalResults = header + results;

  // return our output to the github action
  core.setOutput("comment", finalResults);
};

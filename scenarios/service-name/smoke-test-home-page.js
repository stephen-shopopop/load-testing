/**
 * @description Smoke test
 *
 * ```bash
 * k6 run -e HOST=<my_url> scenarios/service-name/smoke-test-home-page.js
 * ```
 *
 * @summary smoke test home-page
 * @author Stephen D.
 * @module service-sample/smoke-test-deliveries-around-me
 */

import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { check, fail, sleep } from 'k6';
import http from 'k6/http';

// Environment
const BASE_URL = __ENV.HOST || 'https://test-api.k6.io';

/**
 * @property {number} vus - 3
 * @property {string} duration - 1m
 */
export const options = {
  name: 'smoke-home-page',
  vus: 3, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '1m', // This can be shorter or just a few iterations
  thresholds: {
    http_req_failed: [{ threshold: 'rate<0.01', abortOnFail: true }], // http errors should be less than 1%, otherwise abort the test
    http_req_duration: ['p(99)<1000'] // 99% of requests should be below 1s
  }
};

export default () => {
  const response = http.get(`${BASE_URL}/`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (
    !check(response, {
      'response code was 200': (res) => res.status === 200
    })
  ) {
    fail(`status code was *not* 200 - status was ${response.status}`);
  }

  sleep(1);
};

// Custom summary
export function handleSummary(data) {
  return {
    'html-report.html': htmlReport(data),
    stdout: textSummary(data, { indent: ' ', enableColors: true })
  };
}

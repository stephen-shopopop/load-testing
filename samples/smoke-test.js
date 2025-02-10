/**
 * @description Smoke test
 * simple GET https://test-api.k6.io
 *
 * @summary smoke test
 * @author Stephen Deletang
 * @module samples/smoke-test
 */

import { check, sleep } from 'k6';
import http from 'k6/http';

/**
 * @property {number} vus - 3
 * @property {string} duration - 1m
 */
export const options = {
  name: 'Sample smoke test',
  vus: 3, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '1m' // This can be shorter or just a few iterations
};

export default () => {
  const response = http.get('https://test-api.k6.io');
  check(response, {
    'response code was 200': (res) => res.status === 200
  });
  sleep(1);
};

/**
 * @description Spike testing
 * simple GET https://test-api.k6.io
 *
 * @summary spike testing
 * @author Stephen Deletang
 * @module samples/spike-test
 */

import { check, sleep } from 'k6';
import http from 'k6/http';

/**
 * @property {string} ramp-up.duration - 2 min
 * @property {number} ram-up.users - 2O0O users
 * @property {string} stay.duration - No plateau
 * @property {number} stay.users - No plateau
 * @property {string} ran-down.duration - 1 min
 * @property {number} ramp-down.users - 0 users
 */
export const options = {
  name: 'Sample spike test',
  // Key configurations for spike in this section
  stages: [
    { duration: '2m', target: 2000 }, // fast ramp-up to a high point
    // No plateau
    { duration: '1m', target: 0 } // quick ramp-down to 0 users
  ]
};

export default () => {
  const response = http.get('https://test-api.k6.io');
  check(response, {
    'response code was 200': (res) => res.status === 200
  });
  sleep(1);
};

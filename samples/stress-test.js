/**
 * @description Stress testing
 * simple GET https://test-api.k6.io
 *
 * @summary stress testing
 * @author Stephen Deletang
 * @module samples/stress-test
 */

import { check, sleep } from 'k6';
import http from 'k6/http';

/**
 * @property {string} ramp-up.duration - 10 min
 * @property {number} ram-up.users - 2OO users
 * @property {string} stay.duration - 30 min
 * @property {number} stay.users - 2OO users
 * @property {string} ran-down.duration - 5 min
 * @property {number} ramp-down.users - 0 users
 */
export const options = {
  name: 'Sample stress test',
  // Key configurations for stress test in this section
  stages: [
    { duration: '10m', target: 200 }, // traffic ramp-up from 1 to higher 200 users over 1à minutes.
    { duration: '30m', target: 200 }, // stay at higher 200 users for 30 minutes
    { duration: '5m', target: 0 } // ramp-down to 0 users
  ]
};

export default () => {
  const response = http.get('https://test-api.k6.io');
  check(response, {
    'response code was 200': (res) => res.status === 200
  });
  sleep(1);
};

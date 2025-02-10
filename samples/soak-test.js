/**
 * @description Soak testing
 * simple GET https://test-api.k6.io
 *
 * @summary soak testing
 * @author Stephen Deletang
 * @module samples/soak-test
 */

import { check, sleep } from 'k6';
import http from 'k6/http';

/**
 * @property {string} ramp-up.duration - 5 min
 * @property {number} ram-up.users - 1OO users
 * @property {string} stay.duration - 8 h
 * @property {number} stay.users - 1OO users
 * @property {string} ran-down.duration - 5 min
 * @property {number} ramp-down.users - 0 users
 */
export const options = {
  name: 'Sample soak test',
  // Key configurations for soak test in this section
  stages: [
    { duration: '5m', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    { duration: '8h', target: 100 }, // stay at 100 users for 8 hours!!!
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

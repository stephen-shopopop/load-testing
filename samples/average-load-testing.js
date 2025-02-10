/**
 * @description Average load testing
 * simple GET https://test-api.k6.io
 *
 * @summary average load testing
 * @author Stephen Deletang
 * @module samples/average-load-test
 */

import { check, sleep } from 'k6';
import http from 'k6/http';

/**
 * @property {string} ramp-up.duration - 5 min
 * @property {number} ram-up.users - 1OO users
 * @property {string} stay.duration - 30 min
 * @property {number} stay.users - 1OO users
 * @property {string} ran-down.duration - 5 min
 * @property {number} ramp-down.users - 0 users
 */
export const options = {
  name: 'Sample average load test',
  // Key configurations for avg load test in this section
  stages: [
    { duration: '5m', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    { duration: '30m', target: 100 }, // stay at 100 users for 30 minutes
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

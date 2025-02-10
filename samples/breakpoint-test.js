/**
 * @description Breakpoint testing
 * simple GET https://test-api.k6.io
 *
 * @summary breakpoint testing
 * @author Stephen Deletang
 * @module samples/breakpoint-test
 */

import { check, sleep } from 'k6';
import http from 'k6/http';

/**
 * @property {string} execution - ramping-arrival-rate
 * @property {string} ramp-up.duration - 2 h
 * @property {number} ram-up.users - 20000 users
 */
export const options = {
  name: 'Sample breakpoint test',
  // Key configurations for breakpoint in this section
  executor: 'ramping-arrival-rate', // Assure load increase if the system slows
  stages: [
    { duration: '2h', target: 20000 } // just slowly ramp-up to a HUGE load
  ]
};

export default () => {
  const response = http.get('https://test-api.k6.io');
  check(response, {
    'response code was 200': (res) => res.status === 200
  });
  sleep(1);
};

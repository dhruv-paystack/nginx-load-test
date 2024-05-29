import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  systemTags: ['status', 'method', 'url', 'scenario'],
  //scenario to view contacts
  scenarios: {
    bad_gateway: {
      executor: 'constant-arrival-rate',
      exec: 'test_502',
      rate: 20,
      timeUnit: "1s",
      preAllocatedVUs: 100,
      duration: '5m',
    },
    //scenario to view news
    ok: {
      executor: 'constant-arrival-rate',
      exec: 'test_200',
      rate: 20,
      timeUnit: "1s",
      preAllocatedVUs: 100,
      duration: '5m',
    },
  },
};

export function test_502() {
  http.get('http://localhost:8080/502');
  sleep(0.1);
}

export function test_200() {
  http.get('http://localhost:8080/');
  sleep(0.1);
}

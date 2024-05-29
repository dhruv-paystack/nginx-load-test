# Instructions

```
$ brew install k6
$ docker-compose up -d
$ K6_WEB_DASHBOARD=true k6 run --out csv=test_results.csv script.js
```

Upload k6 to google drive and apply filters to see 502s returned on the 2xx response

# async
django asyncの動作確認


## uvicorn

```
 ab -c 3200 -n 3200 "http://127.0.0.1:8000/api/say-sync?delay=1&word=hello"
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)

mmmmkCompleted 320 requests
Completed 640 requests
Completed 960 requests
Completed 1280 requests
Completed 1600 requests
Completed 1920 requests
Completed 2240 requests
Completed 2560 requests
Completed 2880 requests
Completed 3200 requests
Finished 3200 requests


Server Software:        uvicorn
Server Hostname:        127.0.0.1
Server Port:            8000

Document Path:          /api/say-sync?delay=1&word=hello
Document Length:        19 bytes

Concurrency Level:      3200
Time taken for tests:   6.730 seconds
Complete requests:      3200
Failed requests:        0
Total transferred:      976000 bytes
HTML transferred:       60800 bytes
Requests per second:    475.49 [#/sec] (mean)
Time per request:       6729.846 [ms] (mean)
Time per request:       2.103 [ms] (mean, across all concurrent requests)
Transfer rate:          141.63 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   39   7.0     39      50
Processing:  1055 4379 872.8   3968    5668
Waiting:     1005 4305 864.5   3886    5642
Total:       1056 4418 869.6   4006    5715

Percentage of the requests served within a certain time (ms)
  50%   4006
  66%   5209
  75%   5230
  80%   5463
  90%   5670
  95%   5675
  98%   5679
  99%   5685
 100%   5715 (longest request)
```

## uwsgi
```
```
# mock-data
mock-data

### Guest data
```json
[
    {
        "uuid": "19be02a3-a9f9-49b8-aa63-0da32f2a9185",
        "name": "董子轩",
        "phone": "7469-54101493",
        "email": "44@gmail.com",
        "ip": "138.225.188.144",
        "mac": "94:3d:9b:ea:87:f6",
        "status": "offline",
        "location": {}
    },
    {
        "uuid": "b6f4cade-fe33-4302-92c5-2a5fd0ab2ee1",
        "name": "唐风华",
        "phone": "37183647944",
        "email": "_46@hotmail.com",
        "ip": "69.43.87.51",
        "mac": "de:e1:4f:a8:0f:f9",
        "status": "offline",
        "location": {}
    },
    {
        "uuid": "03f65774-7ac2-448d-89f0-16c5377f1c76",
        "name": "赵修洁",
        "phone": "38050515157",
        "email": "97@hotmail.com",
        "ip": "173.121.143.63",
        "mac": "43:29:1c:ce:51:97",
        "status": "offline",
        "location": {}
    },
    {
        "uuid": "cc6d5bfb-7990-47f9-959d-3b33a99101f4",
        "name": "刘天翊",
        "phone": "4689-45323707",
        "email": ".@hotmail.com",
        "ip": "68.123.52.10",
        "mac": "9b:14:5d:2b:fd:c5",
        "status": "offline",
        "location": {}
    },
    {
        "uuid": "970907e0-406c-4367-b62a-c6619cbf4c6f",
        "name": "刘瑾瑜",
        "phone": "1164-60376367",
        "email": ".@yahoo.com",
        "ip": "151.64.162.199",
        "mac": "55:22:16:0c:ba:72",
        "status": "offline",
        "location": {}
    },
    ...
```

### Driver data
```json
[
    {
        "uuid": "6098ad34-7257-43b3-b807-f0dcfc1c3210",
        "name": "崔泽洋",
        "phone": "068-54673444",
        "email": "99@hotmail.com",
        "ip": "0.240.228.188",
        "mac": "a0:5a:32:9c:8b:4b",
        "status": "online"
    },
    {
        "uuid": "d626e316-7a94-45d6-869f-5472f6ed3527",
        "name": "曹鸿煊",
        "phone": "85701576763",
        "email": "7@hotmail.com",
        "ip": "194.88.176.234",
        "mac": "2e:e7:48:b7:b2:71",
        "status": "online",
        "location": {
            "Latitude": 40.15911726,
            "Longitude": 116.83960114
        }
    },
    {
        "uuid": "29dbe68f-fae0-4a33-8102-7b7080e5ff11",
        "name": "熊思聪",
        "phone": "80558080789",
        "email": "39@gmail.com",
        "ip": "61.232.12.176",
        "mac": "d4:fd:7b:7a:84:bf",
        "status": "online"
    },
    {
        "uuid": "63767dce-d759-4adb-b096-36b969b2d6b4",
        "name": "高潇然",
        "phone": "05894161387",
        "email": ".70@gmail.com",
        "ip": "94.148.104.127",
        "mac": "b9:6e:7c:53:38:3e",
        "status": "online"
    },
    {
        "uuid": "bfd16913-938d-4fdd-83a3-0329be90c18b",
        "name": "苏笑愚",
        "phone": "57909732738",
        "email": "70@hotmail.com",
        "ip": "63.250.225.37",
        "mac": "df:fe:ad:b5:c8:f1",
        "status": "online"
    },
    ...
```

### Deal data
```json
[
    {
        "guest": {
            "uuid": "5b17bf49-9b30-46bb-ad66-8e66330fdaf5",
            "name": "宋雨泽",
            "phone": "45697624212",
            "email": "22@gmail.com",
            "ip": "65.188.221.244",
            "mac": "04:9b:02:58:6f:96",
            "status": "calling",
            "location": {}
        },
        "guest_uuid": "5b17bf49-9b30-46bb-ad66-8e66330fdaf5",
        "guest_name": "宋雨泽",
        "departure": {
            "Latitude": 40.20329487,
            "Longitude": 116.17469197
        },
        "destination": {
            "Latitude": 40.19566281,
            "Longitude": 116.16248541
        },
        "request_time": "2017-12-31T16:00:00.000Z",
        "status": "cancel"
    },
    {
        "guest": {
            "uuid": "48367455-1b00-42a6-bcd5-8d1cc9e0e41e",
            "name": "钱航",
            "phone": "5295-61418905",
            "email": ".2@yahoo.com",
            "ip": "130.196.37.164",
            "mac": "4a:4d:74:01:d4:7f",
            "status": "offline",
            "location": {}
        },
        "guest_uuid": "48367455-1b00-42a6-bcd5-8d1cc9e0e41e",
        "guest_name": "钱航",
        "departure": {
            "Latitude": 39.77509389,
            "Longitude": 116.57968821
        },
        "destination": {
            "Latitude": 40.0492334,
            "Longitude": 116.83718514
        },
        "request_time": "2017-12-31T16:10:00.000Z",
        "status": "finished",
        "driver": {
            "uuid": "3503278d-984b-4bf9-878d-98816adcde64",
            "name": "杜风华",
            "phone": "7249-34307955",
            "email": ".39@gmail.com",
            "ip": "101.68.89.171",
            "mac": "0a:1a:25:36:54:21",
            "status": "online"
        },
        "driver_uuid": "3503278d-984b-4bf9-878d-98816adcde64",
        "driver_name": "杜风华",
        "driver_arrive_time": "2017-12-31T16:15:00.000Z",
        "journey_start_time": "2017-12-31T16:22:00.000Z",
        "journey_end_time": "2017-12-31T16:59:00.000Z"
    },
    {
        "guest": {
            "uuid": "7d272510-bd8e-408d-a6ea-7b248e6a6a08",
            "name": "白弘文",
            "phone": "07313323805",
            "email": ".@yahoo.com",
            "ip": "241.175.148.239",
            "mac": "2d:17:a6:50:7d:5e",
            "status": "offline",
            "location": {}
        },
        "guest_uuid": "7d272510-bd8e-408d-a6ea-7b248e6a6a08",
        "guest_name": "白弘文",
        "departure": {
            "Latitude": 40.23433448,
            "Longitude": 116.05028036
        },
        "destination": {
            "Latitude": 39.54883177,
            "Longitude": 116.5350699
        },
        "request_time": "2017-12-31T17:09:00.000Z",
        "status": "finished",
        "driver": {
            "uuid": "28f1cc56-65ab-43ae-bb17-c47f9eaa79f3",
            "name": "于烨霖",
            "phone": "94524004745",
            "email": "_@yahoo.com",
            "ip": "239.78.191.102",
            "mac": "d8:20:15:b8:93:f5",
            "status": "online"
        },
        "driver_uuid": "28f1cc56-65ab-43ae-bb17-c47f9eaa79f3",
        "driver_name": "于烨霖",
        "driver_arrive_time": "2017-12-31T17:14:00.000Z",
        "journey_start_time": "2017-12-31T17:21:00.000Z",
        "journey_end_time": "2017-12-31T17:58:00.000Z"
    },
    ...
```

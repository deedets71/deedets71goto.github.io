var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-lobby-1",
      "name": "MAIN LOBBY 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.5739569890100027,
        "pitch": -0.009946555237192456,
        "fov": 0.7997878497421899
      },
      "linkHotspots": [
        {
          "yaw": 1.0007679203802518,
          "pitch": 0.111999376528372,
          "rotation": 0,
          "target": "1-lobby-conference"
        },
        {
          "yaw": 2.132047834446978,
          "pitch": 0.12005738575431302,
          "rotation": 0,
          "target": "4-goto-enterance-exibition"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lobby-conference",
      "name": "LOBBY CONFERENCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.5673833931166579,
        "pitch": 0.012997641556751205,
        "fov": 0.5796862624058423
      },
      "linkHotspots": [
        {
          "yaw": 1.3398239812350745,
          "pitch": 0.14266795747063554,
          "rotation": 0,
          "target": "2-maju-stage"
        },
        {
          "yaw": 1.8048977311511898,
          "pitch": 0.1477470937982357,
          "rotation": 0,
          "target": "3-digital-stage"
        },
        {
          "yaw": -0.7788139633758604,
          "pitch": 0.1267919208376611,
          "rotation": 0,
          "target": "0-main-lobby-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-maju-stage",
      "name": "MAJU STAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.583928334546382,
        "pitch": -0.047217261984528136,
        "fov": 0.5388902615998036
      },
      "linkHotspots": [
        {
          "yaw": 2.7618923566802813,
          "pitch": 0.05821002348641713,
          "rotation": 0,
          "target": "1-lobby-conference"
        },
        {
          "yaw": 0.15864115815654145,
          "pitch": 0.05423821908315141,
          "rotation": 0,
          "target": "1-lobby-conference"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-digital-stage",
      "name": "DIGITAL STAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.5593968080687226,
        "pitch": 0.03434611055508441,
        "fov": 0.6664752406305962
      },
      "linkHotspots": [
        {
          "yaw": 0.7373726594982095,
          "pitch": 0.11912738835190417,
          "rotation": 0,
          "target": "1-lobby-conference"
        },
        {
          "yaw": 2.3865493240878157,
          "pitch": 0.11462930213253308,
          "rotation": 0,
          "target": "1-lobby-conference"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-goto-enterance-exibition",
      "name": "GOTO ENTERANCE EXIBITION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.5893875205228412,
        "pitch": 0.01062142857577797,
        "fov": 0.9351013241918158
      },
      "linkHotspots": [
        {
          "yaw": -1.5691148698982058,
          "pitch": 0.2561037079365711,
          "rotation": 0,
          "target": "0-main-lobby-1"
        },
        {
          "yaw": 0.09191544938867224,
          "pitch": 0.08901537596944209,
          "rotation": 0,
          "target": "5-goto-exibition-a"
        },
        {
          "yaw": 3.081314695305627,
          "pitch": 0.09577920571040366,
          "rotation": 0,
          "target": "6-goto-exibition-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-goto-exibition-a",
      "name": "GOTO EXIBITION A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.401265125207935,
        "pitch": -0.014906982597487684,
        "fov": 0.5994603532709517
      },
      "linkHotspots": [
        {
          "yaw": -2.3531421150682945,
          "pitch": 0.08353739707435892,
          "rotation": 0,
          "target": "4-goto-enterance-exibition"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-goto-exibition-b",
      "name": "GOTO EXIBITION B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.8341377831519452,
        "pitch": 0.002383255144335905,
        "fov": 0.5745071889591212
      },
      "linkHotspots": [
        {
          "yaw": -0.8510420614983065,
          "pitch": 0.09507164701451032,
          "rotation": 0,
          "target": "4-goto-enterance-exibition"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};

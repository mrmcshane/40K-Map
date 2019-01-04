# 40K Map
3D interactive map of the imperium based on the work of gbiobob/ED3D-Galaxy-Map.

## Demo
* [40K Map](http://map.ns1.ovh/)

## Features
* JSON file to fill the map.
* Filter by Segmentum/Faction/Region.
* Selectable planets with information tab.

## Requirement
Require Three.js (r75) & JQuery

## To Update Planets

Map Labels are here: data/milkyway.json

Planet Listings are here: json_samples/known_space.json

Each planet is comprised of the following:

```
{
      "name": "Cadia",
      "coords": {
        "x": "-14500",
        "y": "1800",
        "z": "0"
      },
      "cat": [
        1,14,21
      ],
      "infos": "Cadia is a fortress planet outside the Eye of Terra"
    },
```

The `cat` section is the categories that the planet is listed under, the current list is:

```
    "Factions": {
      "1": {
        "name": "Imperial",
        "color": "5ABDFC"
      },
      "2": {
        "name": "Adeptus Astartes",
        "color": "774FD4"
      },
      "3": {
        "name": "Adeptus Mechanicus",
        "color": "957ADC"
      },
      "4": {
        "name": "Traitor",
        "color": "645C16"
      },
      "5": {
        "name": "Tau",
        "color": "4EB19A"
      },
      "6": {
        "name": "Eldar",
        "color": "4EB19A"
      },
      "7": {
        "name": "Tyranid",
        "color": "4EB19A"
      },
      "8": {
        "name": "Ork",
        "color": "4EB19A"
      }

    },
    "Segmentum": {
      "11": {
        "name": "Solar",
        "color": "5ABDFC"
      },
      "12": {
        "name": "Pacificus",
        "color": "774FD4"
      },
      "13": {
        "name": "Tempestus",
        "color": "957ADC"
      },
      "14": {
        "name": "Obscurus",
        "color": "645C16"
      },
      "15": {
        "name": "Ultima",
        "color": "4EB19A"
      }

    },
    "Regions": {
      "21": {
        "name": "Eye of Terror",
        "color": "5ABDFC"
      },
      "22": {
        "name": "Malestron",
        "color": "774FD4"
      },
      "23": {
        "name": "Sabbat Worlds",
        "color": "957ADC"
      },
      "24": {
        "name": "Ultramar",
        "color": "645C16"
      }

    }
```

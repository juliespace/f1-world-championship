# CIS550 Project

## Deploy

1. download f1-project-1.0.0.jar
2. run the following command
```shell
java -jar f1-project-1.0.0.jar
```
3. send a ping request
```shell
curl -XGET http://localhost:8000/f1/ping
```

## APIs

###  Constructors Having the Least Average Lap Time

**Query**

The top ten constructors that have the least average lap time from 1950 to 2020.

**Request URL**

```shell
# number: 		last n years
# start_year:	the start year of range
# end_year:		the end year of range
curl -XGET 'http://localhost:8000/f1/constructor/laptime?number=10&start_year=1990&end_year=2000'
```

**Successful Response**

```json
{
    "msg": "success",
    "code": 0,
    "data": [
        {
            "constructorName": "Jaguar",
            "averageLapTime": 91959
        },
        {
            "constructorName": "Prost",
            "averageLapTime": 92320
        },
        {
            "constructorName": "Arrows",
            "averageLapTime": 92320
        },
        {
            "constructorName": "Stewart",
            "averageLapTime": 92452
        }
    ]
}
```

### Constructor with the most points

**Query**

The constructor with the most points in history (top x constructors with the most points from YYYY to YYYY).

**Request URL**

```shell
# number: 		last n years
# start_year:	the start year of range
# end_year:		the end year of range
curl -XGET 'http://localhost:8000/f1/constructor/points?number=10&start_year=1990&end_year=2000'
```

**Successful Response**

```json
{
    "msg": "success",
    "code": 0,
    "data": [
        {
            "constructorName": "Williams",
            "points": 1157,
            "name": "Williams"
        },
        {
            "constructorName": "McLaren",
            "points": 1069,
            "name": "McLaren"
        },
        {
            "constructorName": "Ferrari",
            "points": 962,
            "name": "Ferrari"
        }
    ]
}
```

### Top Drivers Used the Least Average Lap Time

**Query**

The top X drivers that used the least average lap time in the selected season.

**Request URL**

```shell
# number: 		top n drivers
# season:		the selected season
curl -XGET 'http://localhost:8000/f1/driver/laptime?number=5&season=2015'
```

**Successful Response**

```json
{
    "msg": "success",
    "code": 0,
    "data": [
        {
            "forename": "Kimi",
            "surname": "Räikkönen",
            "milliseconds": 93498
        },
        {
            "forename": "Max",
            "surname": "Verstappen",
            "milliseconds": 95161
        },
        {
            "forename": "Jenson",
            "surname": "Button",
            "milliseconds": 95662
        },
        {
            "forename": "Fernando",
            "surname": "Alonso",
            "milliseconds": 95726
        },
        {
            "forename": "Felipe",
            "surname": "Massa",
            "milliseconds": 96249
        }
    ]
}
```

### Driver Gets the Most Points

**Query**

The driver that gets the most points in history, top x drivers with the most points from YYYY to YYYY

**Request URL**

```shell
# number: 		last n years
# start_year:	the start year of range
# end_year:		the end year of range
curl -XGET 'http://localhost:8000/f1/driver/points?number=5&start_year=2010&end_year=2015'
```

**Successful Response**

```json
{
    "msg": "success",
    "code": 0,
    "data": [
        {
            "forename": "Michael",
            "surname": "Schumacher",
            "points": 4204
        },
        {
            "forename": "Mika",
            "surname": "Häkkinen",
            "points": 2816
        },
        {
            "forename": "David",
            "surname": "Coulthard",
            "points": 2479
        },
        {
            "forename": "Damon",
            "surname": "Hill",
            "points": 1760
        },
        {
            "forename": "Jacques",
            "surname": "Villeneuve",
            "points": 1685
        }
    ]
}
```

### Top N% Players' Homeland Information

**Query**

Number of players in N% (user input) of all players who are top 10% players (by points), display their country’s GDP, group by country, GDP.

**Request URL**

```shell
# n:		n percentages
curl -XGET 'http://localhost:8000/f1/gdp/top_driver_homeland_gdp?n=3'
```

**Successful Response**

```json
{
    "msg": "success",
    "code": 0,
    "data": [
        {
            "totalGDP": 27070418951281.000000,
            "countryName": "Australia"
        },
        {
            "totalGDP": 10708137420132.000000,
            "countryName": "Austria"
        },
        {
            "totalGDP": 41960691577347.000000,
            "countryName": "Brazil"
        },
        {
            "totalGDP": 6864661908497.000000,
            "countryName": "Finland"
        },
        {
            "totalGDP": 73759061698186.000000,
            "countryName": "France"
        },
        {
            "totalGDP": 100757000000000.000000,
            "countryName": "Germany"
        },
        {
            "totalGDP": 27767040133318.000000,
            "countryName": "Mexico"
        },
        {
            "totalGDP": 148662811148.500000,
            "countryName": "Monaco"
        },
        {
            "totalGDP": 22244351872527.000000,
            "countryName": "Netherlands"
        },
        {
            "totalGDP": 34113761494830.000000,
            "countryName": "Spain"
        },
        {
            "totalGDP": 73726193017715.000000,
            "countryName": "United Kingdom"
        }
    ]
}
```

### GDP Trend

**Query**

The GDP trend within the last N (user input) years of the home country of player X (user input).

**Request URL**

```shell
# id: 		driver's id
# years: 	last n years:
curl -XGET 'http://localhost:8000/f1/gdp/homeland_gdp_trend?id=1&years=10'
```

**Successful Response**

```json
{
  "msg": "success",
  "code": 0,
  "data": {
    "first-year": "2008",
    "last-year": "2019",
    "gdp-trend": "-3%"
  }
}
```



### Top M% Drivers and Top N% Countries

**Query**

Countries with top N% (user input) GDP and number of top M% (user input) drivers whose nationality are these counties.

**Request URL**

```shell
# m: 		driver percentage
# n: 		country percentage
curl -XGET http://localhost:8000/f1/gdp/top_drivers_in_top_countries?m=10&n=8
If the previous url fails, try this:
curl -XGET 'http://localhost:8000/f1/gdp/top_drivers_in_top_countries?m=10&n=8'
```

**Successful Response**

```json
{
  "msg": "success",
  "code": 0,
  "data": [
    {
      "id": 207,
      "forename": "Mario",
      "surname": "Andretti",
      "totalPoints": 1594,
      "countryName": "United States",
      "gdp": 447230000000000
    },
    {
      "id": 155,
      "forename": "Kamui",
      "surname": "Kobayashi",
      "totalPoints": 1272,
      "countryName": "Japan",
      "gdp": 166881736395810
    }
  ]
}
```



### GDP Rankings of Countries

**Query**

GDP rankings of all countries hosting F1 in a year of chosen (user input) circuits

**Request URL**

```shell
# year: 	selected year
curl -XGET http://localhost:8000/f1/gdp/country_host_f1?year=2010
If the previous url fails, try this:
curl -XGET 'http://localhost:8000/f1/gdp/country_host_f1?year=2010'
```

**Successful Response**

```json
{
  "msg": "success",
  "code": 0,
  "data": [
    {
      "year": 2010,
      "gdp": 6090000000000,
      "countryName": "China"
    },
    {
      "year": 2010,
      "gdp": 5700000000000,
      "countryName": "Japan"
    },
    {
      "year": 2010,
      "gdp": 3400000000000,
      "countryName": "Germany"
    },
    {
      "year": 2010,
      "gdp": 2480000000000,
      "countryName": "United Kingdom"
    }
  ]
}
```

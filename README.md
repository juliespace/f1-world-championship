# CIS550 Project

## APIs

### GDP Trend

**Query**

The GDP trend within the last N (user input) years of the home country of player X (user input).

**Request URL**

```shell
# id: 		driver's id
# years: 	last n years
curl -XGET http://localhost:8000/f1/gdp/homeland_gdp_trend?id=1&years=10
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

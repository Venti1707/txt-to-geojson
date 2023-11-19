# What is this?
This is a JavaScript program that was derived from [here](https://gitlab.com/3nvy/gpx-route-generator-console) to help convert a text file which contains values that are separated by commas into a GEOJSON file.

# How should the text file look like?
The program *should* pick up any issues with the text file, but this is how you should format the text files
```txt
LatitudeOfPoint1,LongitudeOfPoint1,LocationOfPoint1
LatitudeOfPoint2,LongitudeOfPoint2,LocationOfPoint2
...
```

# What are the accepted values?
*  Latitude **must be** ≥ -90 or ≤ 90 (Decimals allowed.)
* Longitude **must be** ≥ -180 or ≤ 180 (Decimals allowed.)
* Location name *should* accept all values
* All duplicate values will be removed unless stated otherwise. Refer to line 154 of [index.js](index.js) if you wish to accept duplicate values.

# How will the output look like?
```json
{
	"type": "FeatureCollection",
	"features": [
		{
			"type": "Feature",
			"properties": {} // This is optional, read "The Properties Tag (I)" to see how you can add values to it
			"geometry": {
				"type": "LineString",
				"coordinates": [
					[
						LongitudeOfPoint1,
						LatitudeOfPoint1
					],
					[
						LongitudeOfPoint2,
						LatitudeOfPoint2
					],
					...
				]
			}
		},
		{
			"type": "Feature",
			"properties": { // You may add optional properties to this, read "The Properties Tag (II)" to see more details
				"name": "LocationOfPoint1"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					LongitudeOfPoint1,
					LatitudeOfPoint1
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "LocationOfPoint2",
				"marker-size": "small"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					LongitudeOfPoint2,
					LatitudeOfPoint2
				]
			}
		}
		...
	]
}
```

# The `Properties` Tag (I)
Under this `properties` tag, you may choose to add any of the following properties (Add it between Lines 25 and 26 of [index.js](index.js) and separated by commas, if you choose to go for multiple properties):
* `stroke` for the colour of the line; This requires a `"` on both ends of the key as it is a string
    * This can be defined how you usually define a colour in CSS
* `stroke-width` for the width of the line; This does not require `"` on both ends of the key as it is an integer
* `stroke-opacity` for the width of the line; This does not require `"` on both ends of the key as it is an integer

# The `Properties` Tag (II)
Under this `properties` tag, you may choose to add any of the following properties (These will affect all your coordinates, use it if you want common properties! Add it in between Lines 136 and 137) of [index.js](index.js) and separated by commas, if you choose to go for multiple properties):
* `marker-color` for the color of the marker; This requires a `"` on both ends of the key as it is a string
    * This can be defined how you usually define a colour in CSS
* `marker-size` for the width of the line; This requires a `"` on both ends of the key as it is a string
    * This can only take one of three values
        * `small`
        * `medium`
        * `large`
* `marker-symbol` for the symbol of the marker; This requires a `"` on both ends of the key as it is a string
    * This can only take one of 211 values
        * aerialway
        * airfield
        * airport
        * alcohol-shop
        * american-football
        * amusement-park
        * animal-shelter
        * aquarium
        * arrow
        * art-gallery
        * attraction
        * bakery
        * bank-JP
        * bank
        * bar
        * barrier
        * baseball
        * basketball
        * bbq
        * beach
        * beer
        * bicycle-share
        * bicycle
        * blood-bank
        * bowling-alley
        * bridge
        * building-alt1
        * building
        * bus
        * cafe
        * campsite
        * car-rental
        * car-repair
        * car
        * casino
        * castle-JP
        * castle
        * caution
        * cemetery-JP
        * cemetery
        * charging-station
        * cinema
        * circle-stroked
        * circle
        * city
        * clothing-store
        * college-JP
        * college
        * commercial
        * communications-tower
        * confectionery
        * construction
        * convenience
        * cricket
        * cross
        * dam
        * danger
        * defibrillator
        * dentist
        * diamond
        * doctor
        * dog-park
        * drinking-water
        * elevator
        * embassy
        * emergency-phone
        * entrance-alt1
        * entrance
        * farm
        * fast-food
        * fence
        * ferry-JP
        * ferry
        * fire-station-JP
        * fire-station
        * fitness-centre
        * florist
        * fuel
        * furniture
        * gaming
        * garden-centre
        * garden
        * gate
        * gift
        * globe
        * golf
        * grocery
        * hairdresser
        * harbor
        * hardware
        * heart
        * heliport
        * highway-rest-area
        * historic
        * home
        * horse-riding
        * hospital-JP
        * hospital
        * hot-spring
        * ice-cream
        * industry
        * information
        * jewelry-store
        * karaoke
        * landmark-JP
        * landmark
        * landuse
        * laundry
        * library
        * lift-gate
        * lighthouse-JP
        * lighthouse
        * lodging
        * logging
        * marker-stroked
        * marker
        * mobile-phone
        * monument-JP
        * monument
        * mountain
        * museum
        * music
        * natural
        * observation-tower
        * optician
        * paint
        * park-alt1
        * park
        * parking-garage
        * parking-paid
        * parking
        * pharmacy
        * picnic-site
        * pitch
        * place-of-worship
        * playground
        * police-JP
        * police
        * post-JP
        * post
        * prison
        * racetrack-boat
        * racetrack-cycling
        * racetrack-horse
        * racetrack
        * rail-light
        * rail-metro
        * rail
        * ranger-station
        * recycling
        * religious-buddhist
        * religious-christian
        * religious-jewish
        * religious-muslim
        * religious-shinto
        * residential-community
        * restaurant-bbq
        * restaurant-noodle
        * restaurant-pizza
        * restaurant-seafood
        * restaurant-sushi
        * restaurant
        * road-accident
        * roadblock
        * rocket
        * school-JP
        * school
        * scooter
        * shelter
        * shoe
        * shop
        * skateboard
        * skiing
        * slaughterhouse
        * slipway
        * snowmobile
        * soccer
        * square-stroked
        * square
        * stadium
        * star-stroked
        * star
        * suitcase
        * swimming
        * table-tennis
        * teahouse
        * telephone
        * tennis
        * theatre
        * toilet
        * toll
        * town-hall
        * town
        * triangle-stroked
        * triangle
        * tunnel
        * veterinary
        * viewpoint
        * village
        * volcano
        * volleyball
        * warehouse
        * waste-basket
        * watch
        * water
        * waterfall
        * watermill
        * wetland
        * wheelchair
        * windmill
        * zoo

# How do I view my output?
You can choose to
1. Download this [extension](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.geo-data-viewer) on Visual Studio Code, but this will prevent any `properties` from showing up

	**or**

2. Visit this [site](https://geojson.io) and drag and drop your generated GEOJSON file


# How do I begin using the program?
* Download Node.js [here](https://nodejs.org/en/)
* Clone the repository
* Use ```node generate input=INPUT_FILE_NAME output=OUTPUT_FILE_NAME``` to generate the GEOJSON file
    * ```INPUT_FILE_NAME``` is the name of the file to read the coordinates from (You can include the .txt or leave it out); It **must** be a .txt file
    * ```OUTPUT_FILE_NAME``` is the name of the output file; It is optional. If you choose to leave it blank, it will default to ```INPUT_FILE_NAME```

# Known bugs
* None so far!
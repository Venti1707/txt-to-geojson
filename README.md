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
* All duplicate values will be removed unless stated otherwise. Refer to line 133 of [index.js](index.js) if you wish to accept duplicate values.

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
			"properties": { // This is optional, read "The Properties Tag (II)" to see how you can add values to it
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
Under this `properties` tag, you may choose to add any of the following properties (Or add it between Lines 25 and 26 of [index.js](index.js) and separated by commas, if you choose to go for multiple properties):
* `stroke` for the colour of the line; This requires a `"` on both ends of the key as it is a string
    * This can be defined how you usually define a colour in CSS
* `stroke-width` for the width of the line; This does not require `"` on both ends of the key as it is an integer
* `stroke-opacity` for the width of the line; This does not require `"` on both ends of the key as it is an integer

# The `Properties` Tag (II)
Under this `properties` tag, you may choose to add any of the following properties (Or add it in between Lines line and line2) of [index.js] and separated by commas, if you choose to go for multiple properties):
* `marker-color` for the color of the marker; This requires a `"` on both ends of the key as it is a string
    * This can be defined how you usually define a colour in CSS
* `marker-size` for the width of the line; This requires a `"` on both ends of the key as it is a string
    * This can only take one of three values
        * `small`
        * `medium`
        * `large`

# How do I view my output?
You can choose to
1. Download this [extension](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.geo-data-viewer) on Visual Studio Code, but this will prevent any `properties` from showing up

	**or**

2. Visit this [site](https://geojson.io) and drag and drop your generated GEOJSON file


# How do I begin using the program?
* Download Node.js [here](https://nodejs.org/en/)
* Clone the repository
* Use ```node generate input=INPUT_FILE_NAME output=OUTPUT_FILE_NAME``` to generate the GEOJSON file
    * ```INPUT_FILE_NAME``` is the name of the file to read the coordinates from; It **must** be a .txt file
    * ```OUTPUT_FILE_NAME``` is the name of the output file

# Known bugs
* None so far!
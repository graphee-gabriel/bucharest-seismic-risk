// EXAMPLE USE
// npm run setApi preprod
// -> will set api to 'preprod'

const fs = require('fs')
const csv = require('csvtojson')

// const { argv } = process
// const APP_CONFIG = (argv.length > 1 && argv[2]) || 'prod' // default to prod
// const APP_SCHEME = (argv.length > 2 && argv[3]) || 'release' // default to prod

const filenameCsv = `./assets/data/building-list.csv`
const filenameJson = `./assets/data/building-list.json`

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}


try {
  // const csv = fs.readFileSync(filenameCsv, 'utf-8')
  csv()
    .fromFile(filenameCsv)
    .then((rawJson) => {
      const json = rawJson.map(({
        streetName,
        streetNumber,
        sector,
        certNumber,
        yearExpertise,
        expertName,
        yearBuilt: yearConstruction,
        heightRegime,
        area,
        apartmentCount,
        observations,
        category
      }) => ({
        address: {
          streetName: titleCase(streetName),
          streetNumber: titleCase(streetNumber),
          sector
        },
        expertise: {
          certNumber: certNumber.replace(/\./g, ''),
          yearExpertise,
          expertName: titleCase(expertName),
          observations,
          category
        },
        building: {
          yearConstruction,
          heightRegime,
          apartmentCount,
          area: area.replace(/\./g, '')
        },
      }))
  console.log(json);

  /**
   * [
   * 	{a:"1", b:"2", c:"3"},
   * 	{a:"4", b:"5". c:"6"}
   * ]
   */
  const data = JSON.stringify(json, null, 2)
  fs.writeFileSync(filenameJson, data, 'utf8')
})
} catch (e) {
  console.log(e)
}

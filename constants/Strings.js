const aboutDescription = `This application was built to provide a quick way to find out the seismic risk category of a building in Bucharest, from its address, and other details provided by the townhall.
The current data are based on the townhall list released in 2018. In other word, this application is a simpler way to browse this list.

It is important to understand that the absence of a building on this list is in no way a garranty that this building is safe. On the contrary, it only means it was never expertised and we have no information about its safety.
While there is no such thing as 'Risk 0' The higher in the RS category, the safer the building should be.

About the 'Urgenta' system, it was in place for the 2-3 first years and replaced by the RS system in 1996. 
It is not always linked to the imminent danger posed by a building, as it was made to define which building was going to be re-consolidated first, funded by state-money.
The fact that this program was then cancelled, on top of many suspicions of bribery to be the first to benefit of this state-funded program, make the Urgenta system worthless in the mind of many Romanian.
This is a myth as based on calculations most U1, U2 and U3 buildings should be regarded as high-risk 'RS 1' buildings. 
Some unclear situations remains but they are exceptions to the rule.

This Application was made by Gabriel Morin with the help of Jeremy de France.
GOOD ENOUGH S.R.L
`
const descriptionUrgenta = `Emergency categories have priority for the (re)consolidation process of analyzed buildings. The emergency category is determined accordingly to the level of importance of the building and the degree of assurance against seismic events, resulted from the computing. 

The maximum duration before starting the consolidation is: U1 – 2 years, U2 – 5 years, U3 – 10 years.

This categorization system was abandoned for the RS system in 1996.
Based on calculations the vast majority of them should be categorized as RS 1, the most vulnerable buildings in case of a significant earthquakes. 
Those buildings need to be analyzed again by an expert.
`
const descriptionConsolidated = `This building was consolidated. Consolidation can be partial or total. Have a look below, some obversvations might have been added by the town hall.`
const dangerToThePublic = 'Danger to the public'
const consolidatedBuilding = 'Consolidated Building'

const Strings = {
  about: {
    title: `BUCHAREST
SEISMIC 
RISK`,
    description: aboutDescription,
    urlCompany: `https://goodenough.solutions/`,
    urlZeceLaRece: `https://zecelarece.ro/`,
    nameCompany: `GOOD ENOUGH`,
    nameZeceLaRece: `Zece La Rece`,
    labelCompany: `If you'd like to help improving this app or for any other matter, contact us:`,
    labelZeceLaRece: `Our slightly more relaxed Bucharest project:`
  },
  search: {
    buildingListLabel: `Search for an address to find out the seismic risk category of the bulding.`,
    buildingListLabelNoResults: `Seems like no buildings at this adress were investigated. It does not mean the building is safe nor dangerous, but simply that we have no informations about it.`
  },
  category: {
    titleFallback: `Unknown category`,
    titleFromCategory: {
      'Rs1': dangerToThePublic,
      'Rs2': 'High Risk',
      'Rs3': 'Medium Risk',
      'Rs4': 'Lower Risk',
      'Consolidat': consolidatedBuilding,
      'Consolidated': consolidatedBuilding,
      'U1': dangerToThePublic,
      'U2': dangerToThePublic,
      'U3': dangerToThePublic,
      'U2. U3': dangerToThePublic,
      'U3. U2': dangerToThePublic,
    },
    descriptionFallback: `This category is not defined`,
    descriptionFromCategory: {
      'Rs1': 'Marks the buildings with a high risk of earthquake collapse, with intensities corresponding to the calculated seismic zones.',
      'Rs2': 'Marks the buildings which have a lower collapse probability, but to which major structural damage are expected to happen.',
      'Rs3': 'Marks the buildings which are expected to have non-structural damages that could be significant, but it will not affect its structural safety.',
      'Rs4': 'Marks the buildings where the expected seismic response is similar to that of new constructions, designed on updated guidelines.',
      'Consolidat': descriptionConsolidated,
      'Consolidated': descriptionConsolidated,
      'U1': descriptionUrgenta,
      'U2': descriptionUrgenta,
      'U3': descriptionUrgenta,
      'U2. U3': descriptionUrgenta,
      'U3. U2': descriptionUrgenta,
    },
  }
}

export default Strings
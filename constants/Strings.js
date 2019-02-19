const aboutDescription = `This application was built to provide a quick way to find out the seismic risk category of a building in Bucharest, from its address, and other details provided by the townhall.
The current data are based on the townhall list released in 2018. In other word, this application is a simpler way to browse this list.

It is important to understand that the absence of a building on this list is in no way a garranty that this building is safe. On the contrary, it only means it was never expertised and we have no information about its safety.
While there is no such thing as 'Risk 0' The higher in the RS category, the safer the building should be.

About the 'Urgenta' system, it was in place for the 2-3 first years. It is not always linked to the iminent danger posed by a building.
It was made to define which building was going to be re-inforced first, funded by state-money.
The fact that this program was then cancelled, on top of many suspicions of bribery to be the first to beneficiate of this state-funded program, make the Urgenta system close to null.
While we kept this information, it can be considerate as this building was not expertised, and should be investigated again with the newer RS system.

This Application was made by Gabriel Morin with the help of Jeremy de France.
GOOD ENOUGH S.R.L
`
const descriptionUrgenta = `Emergency categories have priority for the (re)consolidation process of analyzed buildings. The emergency category is determined accordingly to the level of importance of the building and the degree of assurance against seismic events, resulted from the computing. 

The maximum time to commence consolidation is: U1 – 2 years, U2 – 5 years, U3 – 10 years.`

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
    buildingListLabel: `Search for an address to find out the seismic risk category of the bulding.`
  },
  category: {
    titleFallback: `Undefined`,
    titleFromCategory: {
      'Rs1': 'Danger to the public',
      'Rs2': 'High Risk',
      'Rs3': 'Medium Risk',
      'Rs4': 'Lower Risk',
      'Consolidat': '',
      'Consolidated': '',
      'U1': 'Emergency 1/3',
      'U2': 'Emergency 2/3',
      'U3': 'Emergency 3/3',
    },
    descriptionFallback: `This category is not defined`,
    descriptionFromCategory: {
      'Rs1': 'Marks the buildings with a high risk of earthquake collapse, with intensities corresponding to the calculated seismic zones.',
      'Rs2': 'Marks the buildings which have a lower collapse probability, but to which major structural damage are expected to happen.',
      'Rs3': 'Marks the buildings which are expected to have non-structural damages that could be significant, but it will not affect its structural safety.',
      'Rs4': 'Marks the buildings where the expected seismic response is similar to that of new constructions, designed on updated guidelines.',
      'Consolidat': '',
      'Consolidated': '',
      'U1': descriptionUrgenta,
      'U2': descriptionUrgenta,
      'U3': descriptionUrgenta,
    },
  }
}

export default Strings
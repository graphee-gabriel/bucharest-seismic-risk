export const filterBuildings = searchText => item => {
  const { address, expertise } = item
  const searchTerms = searchText.split(' ').filter(term => !!term && term !== ' ')
  let matchScore = 0
  searchTerms.forEach(termDirty => {
    const term = termDirty.toLowerCase()
    // Search by street name or by expert name
    const streetName = (address || {}).streetName
    const expertName = (expertise || {}).expertName
    const searchableContent = streetName + ' ' + expertName
    const searchable = searchableContent.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    const searchableParts = searchable.split(' ')

    // if the Adress contains 2 times the same term, don't count it twice (ex: [Strada] xx, fosta [Strada] yy)
    const matchedTerms = []

    // Check for a street number match
    if ((address.streetNumber || "").indexOf(term) !== -1) {
      matchScore += 1
      matchedTerms.push(term)
    }

    // Check for a street name or expert name
    searchableParts.forEach((partDirty) => {
      const part = partDirty.toLowerCase()
      if (part.startsWith(term) && matchedTerms.indexOf(term) === -1) {
        matchedTerms.push(term)
        matchScore += 1
      }
    })
  })

  // keep only the one that have a match for every search term
  return searchTerms.length === matchScore
}

const extractFirstNumberFromStreetNumber = streetNumber => streetNumber.split(' - ')[0].replace(/\D/g, '')

export const sortByStreetNumber = (a, b) => (
  extractFirstNumberFromStreetNumber((a.address || {}).streetNumber)
  - extractFirstNumberFromStreetNumber((b.address || {}).streetNumber)
)
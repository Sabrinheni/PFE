export function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0
    }
    let varA = ""
    let varB = ""
    switch (typeof a[key]) {
      case "string":
        varA = a[key].toUpperCase()
        break
      case "date":
        varA = new Date(a[key])
        break

      default:
        varA = a[key]
        break
    }
    switch (typeof b[key]) {
      case "string":
        varB = b[key].toUpperCase()
        break
      case "date":
        varB = new Date(b[key])
        break

      default:
        varB = b[key]
        break
    }
    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }
    return order === "desc" ? comparison * -1 : comparison
  }
}

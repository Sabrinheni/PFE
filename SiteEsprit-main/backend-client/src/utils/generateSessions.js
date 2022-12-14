export default function generateSessions(startingFrom = 2012, until = "now", listOrKeyValue = "keyValue") {
  const end = typeof until === "number" ? until : new Date().getFullYear()
  const listOfSessions = []
  for (let index = startingFrom; index < end + 1; index++) {
    listOfSessions.push(index + "/" + (index + 1))
  }
  if (listOrKeyValue === "keyValue") {
    const obj = {}
    for (let index = 0; index < listOfSessions.length; index++) {
      obj[listOfSessions[index]] = listOfSessions[index]
    }
    return obj
  }
  return listOfSessions
}

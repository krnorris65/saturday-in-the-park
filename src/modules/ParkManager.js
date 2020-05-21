const baseUrl = "http://localhost:8000"
const token = `Token ${sessionStorage.getItem("kennywood-token")}`
const ParkManager = {
    getParkAreas() {
        return fetch(`${baseUrl}/parkareas`, {
            "method": "GET",
            "headers": {
              "Accept": "application/json",
              "Authorization": `${token}`
            }
          })
            .then(response => response.json())
    },
    getAttractions() {
        return fetch(`${baseUrl}/attractions`, {
            "method": "GET",
            "headers": {
              "Accept": "application/json",
              "Authorization": `${token}`
            }
          })
            .then(response => response.json())
    },
    getAttractionsByArea(areaId) {
        return fetch(`${baseUrl}/attractions?area=${areaId}`, {
            "method": "GET",
            "headers": {
              "Accept": "application/json",
              "Authorization": `${token}`
            }
          })
            .then(response => response.json())
    }
}

export default ParkManager
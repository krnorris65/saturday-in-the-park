const baseUrl = "http://localhost:8000"
const token = `Token ${sessionStorage.getItem("kennywood-token")}`

const ItineraryManager = {
    getItinerary() {
        return fetch(`${baseUrl}/itineraries`, {
            "method": "GET",
            "headers": {
              "Accept": "application/json",
              "Authorization": `${token}`
            }
          })
            .then(response => response.json())
    },
}

export default ItineraryManager
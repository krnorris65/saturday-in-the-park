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
    getItineraryItem(itemId) {
        return fetch(`${baseUrl}/itineraries/${itemId}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `${token}`
            }
        })
            .then(response => response.json())
    },
    createItineraryItem(item) {
        return fetch(`${baseUrl}/itineraries`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `${token}`
            },
            body: JSON.stringify(item)
        })
            .then(response => response.json())
    },
    editItineraryItem(item) {
        return fetch(`${baseUrl}/itineraries/${item.id}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `${token}`
            },
            body: JSON.stringify(item)
        })
    },
    deleteItineraryItem(itemId) {
        return fetch(`${baseUrl}/itineraries/${itemId}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `${token}`
            }
        })
    },
}

export default ItineraryManager
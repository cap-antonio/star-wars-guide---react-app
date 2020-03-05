export default class SwapiService {
    _baseUrl = `https://swapi.co/api`
    getResource = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`)
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` + `received ${res.status}`)
        }
        return await res.json()
    }
    getAllPeople = async () => {
        const res = await this.getResource(`/people/`)
        return res.results
    }
    getPerson = async (id) => {
        return await this.getResource(`/people/${id}/`)
    }
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`)
    }
    getPlanet = async (id) => {
        return await this.getResource(`/planets/${id}/`)
    }
    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`)
    }
    getStarship = async (id) => {
        return await this.getResource(`/starships/${id}/`)
    }
    getSpecies = async (id) => {
        return await this.getResource(`/species/${id}`)
    }
}

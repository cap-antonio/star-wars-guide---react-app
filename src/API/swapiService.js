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
        return res.results.map(this._transformPerson)
    }
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`)
        return this._transformPerson(person)
    }
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this._transformPlanet)
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }
    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`)
        return res.results.map(this._transformStarship)
    }
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`)
        return this._transformStarship(starship)
    }
    getSpecies = async (id) => {
        const species = await this.getResource(`/species/${id}`)
        return this._transformSpecies(species)
    }
    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }
    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _transformSpecies(species) {
        return {
            id: this._extractId(species),
            name: species.name,
            classification: species.classification,
            language: species.language,
            lifespan: species.average_lifespan,
            height: species.average_height
        }
    }
    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            starshipClass: starship.starship_class,
            manufacturer: starship.manufacturer,
            length: starship.length,
            cost: starship.costInCredits,
            crew: starship.crew,
            cargoCapacity: starship.cargoCapacity,
            passengers: starship.passengers

        }
    }
    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            height: person.height,
            mass: person.mass,
    }
}
}

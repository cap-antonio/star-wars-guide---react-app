export default class SwapiService {
    _baseUrl = `https://swapi.dev/api`
    _baseImageUrl = 'https://starwars-visualguide.com/assets/img'
    getResource = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`)
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
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
    getPersonAddInfo = async (id) => {
        const person = await this.getResource(`/people/${id}/`)
        return this._transformPersonAddInfo(person)
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
    getPersonImage = (id) => {
        return `${this._baseImageUrl}/characters/${id}.jpg`
    }
    getStarshipImage = (id) => {
        return `${this._baseImageUrl}/starships/${id}.jpg`
    }
    getPlanetImage = (id) => {
        return `${this._baseImageUrl}/planets/${id}.jpg`
    }
    getSpeciesImage = (id) => {
        return `${this._baseImageUrl}/species/${id}.jpg`
    }
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotation_period: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _transformSpecies = (species) => {
        return {
            id: this._extractId(species),
            name: species.name,
            classification: species.classification,
            language: species.language,
            lifespan: species.average_lifespan,
            height: species.average_height
        }
    }
    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            starship_class: starship.starship_class,
            manufacturer: starship.manufacturer,
            length: starship.length,
            cost_in_credits: starship.cost_in_credits,
            crew: starship.crew,
            cargo_capacity: starship.cargo_capacity,
            passengers: starship.passengers

        }
    }
    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            height: person.height,
            mass: person.mass,
            birth_year: person.birth_year,
            eye_color: person.eye_color,
            gender: person.gender,
            hair_color: person.hair_color,
            skin_color: person.skin_color
    }
}
    _transformPersonAddInfo = (person) => {
        return {
            id: this._extractId(person),
            homeworld: person.name,
}
}
}

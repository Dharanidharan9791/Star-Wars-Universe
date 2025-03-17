import axiosInstance from "../config/axiosConfig";
import { swapiRoutes } from "./routes/swapiRoutes";

export const getCharacters = async (pageno) => {
    const response = await axiosInstance.get(swapiRoutes.characters +`/?page=${pageno}`)
    return response.data
}

export const getCharacter = async (id) => {
    const response = await axiosInstance.get(swapiRoutes.character(id))
    return response.data
}

export const getPlanets = async () => {
    const response = await axiosInstance.get(swapiRoutes.planets)
    return response.data
}

export const getPlanet = async (id) => {
    const response = await axiosInstance.get(swapiRoutes.planet(id))
    return response.data
} 

export const getStarships = async () => {
    const response = await axiosInstance.get(swapiRoutes.starships)
    return response.data
}   

export const getStarship = async (id) => {
    const response = await axiosInstance.get(swapiRoutes.starship(id))
    return response.data
}   

export const getVehicles = async () => {
    const response = await axiosInstance.get(swapiRoutes.vehicles)
    return response.data
}      

export const getVehicle = async (id) => {
    const response = await axiosInstance.get(swapiRoutes.vehicle(id))
    return response.data
}      

export const getSpecies = async () => {
    const response = await axiosInstance.get(swapiRoutes.species)
    return response.data
}             

export const getASpecies = async (id) => {
    const response = await axiosInstance.get(swapiRoutes.species(id))
    return response.data
}
export const getFilms = async () => {
    const response = await axiosInstance.get(swapiRoutes.films)
    return response.data
}   

export const getFilmDetails = async (id) => {
    const response = await axiosInstance.get(swapiRoutes.film(id))
    return response.data
}   











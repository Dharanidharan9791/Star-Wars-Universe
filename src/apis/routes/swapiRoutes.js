export const swapiRoutes = {
    // Route for fetching all characters
    characters: '/people',
    // Route for fetching a specific character by ID
    character: (id) => `/people/${id}`,
    // Route for fetching all planets
    planets: '/planets',
    // Route for fetching a specific planet by ID
    planet: (id) => `/planets/${id}`,
    // Route for fetching all starships
    starships: '/starships',
    // Route for fetching a specific starship by ID
    starship: (id) => `/starships/${id}`,
    // Route for fetching all vehicles
    vehicles: '/vehicles',
    // Route for fetching a specific vehicle by ID
    vehicle: (id) => `/vehicles/${id}`,
    // Route for fetching all species
    species: '/species',
    // Route for fetching a specific species by ID
    species: (id) => `/species/${id}`,
};


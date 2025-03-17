import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './mocks/favoritesSlice';
import { vi } from 'vitest';
import axios from 'axios';

// Create a custom render function that includes Redux and Router providers
export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        favorites: favoritesReducer,
      },
      preloadedState,
    }),
    route = '/',
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          {children}
        </MemoryRouter>
      </Provider>
    );
  }

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

// Mock API responses for character tests
export const mockCharacterResponse = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: ['https://swapi.dev/api/films/1/'],
  vehicles: ['https://swapi.dev/api/vehicles/1/'],
  starships: ['https://swapi.dev/api/starships/1/'],
  url: 'https://swapi.dev/api/people/1/'
};

export const mockPlanetResponse = {
  name: 'Tatooine',
  climate: 'arid',
  terrain: 'desert',
  population: '200000'
};

export const mockFilmResponse = {
  title: 'A New Hope'
};

export const mockVehicleResponse = {
  name: 'Sand Crawler'
};

export const mockStarshipResponse = {
  name: 'X-wing'
};

// Helper to setup API mocks for both fetch and axios
export function setupApiMocks() {
  // Mock fetch API
  global.fetch = vi.fn().mockImplementation((url) => {
    if (url.includes('/people/')) {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: async () => mockCharacterResponse,
      });
    }
    
    if (url.includes('/planets/')) {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: async () => mockPlanetResponse,
      });
    }

    if (url.includes('/films/')) {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: async () => mockFilmResponse,
      });
    }

    if (url.includes('/vehicles/')) {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: async () => mockVehicleResponse,
      });
    }

    if (url.includes('/starships/')) {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: async () => mockStarshipResponse,
      });
    }
    
    return Promise.resolve({
      ok: true,
      status: 200,
      json: async () => ({}),
    });
  });

  // Mock axios
  vi.mock('axios');

  axios.get.mockImplementation((url) => {
    if (url.includes('/people/') || url.includes('people/')) {
      return Promise.resolve({ data: mockCharacterResponse });
    }
    
    if (url.includes('/planets/') || url.includes('planets/')) {
      return Promise.resolve({ data: mockPlanetResponse });
    }

    if (url.includes('/films/') || url.includes('films/')) {
      return Promise.resolve({ data: mockFilmResponse });
    }

    if (url.includes('/vehicles/') || url.includes('vehicles/')) {
      return Promise.resolve({ data: mockVehicleResponse });
    }

    if (url.includes('/starships/') || url.includes('starships/')) {
      return Promise.resolve({ data: mockStarshipResponse });
    }

    return Promise.resolve({ data: {} });
  });
}

// Helper to wait for suspense boundaries to resolve
export async function waitForSuspense() {
  return waitFor(
    () => {
      const loadingElements = document.querySelectorAll(':contains("Loading")');
      if (loadingElements.length > 0) {
        throw new Error('Still loading');
      }
    },
    { timeout: 1000 }
  );
}

import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders, setupApiMocks, waitForSuspense } from '../test-utils';
import FavoritesList from '../pages/FavoritesList';
import * as reactRouterDom from 'react-router-dom';
import { vi } from 'vitest';

describe('FavoritesList', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    setupApiMocks();
    // Mock useNavigate
    vi.mock('react-router-dom', async () => {
      const actual = await vi.importActual('react-router-dom');
      return {
        ...actual,
        useNavigate: () => vi.fn()
      };
    });
  });

  test('renders empty state', async () => {
    renderWithProviders(<FavoritesList />, {
      preloadedState: {
        favorites: { list: [] }
      }
    });
    expect(screen.getByText(/No favorites/i)).toBeInTheDocument();
  });

  test('renders favorite characters', async () => {
    const favorites = [
      {
        name: 'Luke Skywalker', 
        url: 'https://swapi.dev/api/people/1/',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        birth_year: '19BBY',
        hair_color: 'blond',
        height: '172',
        mass: '77'
      },
      { 
        name: 'Leia Organa', 
        url: 'https://swapi.dev/api/people/5/',
        gender: 'female',
        homeworld: 'https://swapi.dev/api/planets/2/',
        birth_year: '19BBY',
        hair_color: 'brown',
        height: '150',
        mass: '49'
      }
    ];
    
    renderWithProviders(<FavoritesList />, {
      preloadedState: {
        favorites: { list: favorites }
      }
    });
    
    // Wait for suspense to resolve
    await waitFor(() => {
      expect(screen.queryByText(/Loading Character/i)).not.toBeInTheDocument();
    });
    
    // Now check for the character names
    expect(screen.getAllByText(/Luke Skywalker/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Leia Organa/i)[0]).toBeInTheDocument();
  });

  test('removes a favorite character', async () => {
    const favorites = [
      {
        name: 'Luke Skywalker', 
        url: 'https://swapi.dev/api/people/1/',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        birth_year: '19BBY',
        hair_color: 'blond',
        height: '172',
        mass: '77'
      }
    ];
    
    renderWithProviders(<FavoritesList />, {
      preloadedState: {
        favorites: { list: favorites }
      }
    });
    
    // Wait for suspense to resolve
    await waitFor(() => {
      expect(screen.queryByText(/Loading Character/i)).not.toBeInTheDocument();
    });
    
    // Now find and click the Remove button
    const removeButton = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeButton);
    
    expect(screen.getByText(/No favorites/i)).toBeInTheDocument();
  });
});

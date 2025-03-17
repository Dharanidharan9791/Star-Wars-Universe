import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../test-utils';
import CharacterCard from '../components/CharacterCard';

describe('CharacterCard', () => {
  const character = {
    name: 'Luke Skywalker',
    url: 'https://swapi.dev/api/people/1/'
    // Add other properties as needed
  };

  test('renders character details', () => {
    renderWithProviders(<CharacterCard {...character} />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });

  test('toggles favorite status', () => {
    renderWithProviders(<CharacterCard {...character} />);
    const favoriteButton = screen.getByRole('button');
    fireEvent.click(favoriteButton);
  });
});

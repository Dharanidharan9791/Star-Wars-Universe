import React from 'react';
import CharacterCard from '../components/CharacterCard';

export default {
  title: 'Components/CharacterCard',
  component: CharacterCard,
  parameters: {
    // Optional: Add any story-specific parameters here
    actions: { argTypesRegex: '^on.*' },
  }
};

const Template = (args) => <CharacterCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Luke Skywalker',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  birthYear: '19BBY',
  hairColor: 'blond',
  height: '172',
  mass: '77',
  url: 'https://swapi.dev/api/people/1/',
};

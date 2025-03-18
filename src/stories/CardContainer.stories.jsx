import React from 'react';
import CardContainer from '../components/CardContainer';

export default {
  title: 'Components/CardContainer',
  component: CardContainer,
};

const Template = (args) => <CardContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div className="p-4 bg-gray-200">Card 1</div>
      <div className="p-4 bg-gray-200">Card 2</div>
      <div className="p-4 bg-gray-200">Card 3</div>
    </>
  ),
};

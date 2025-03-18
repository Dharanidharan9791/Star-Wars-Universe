import React from 'react';
import Pagination from '../components/Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 5,
  onPageChange: (page) => console.log('Page changed to:', page),
};

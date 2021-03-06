import React, { memo } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';
import * as d3 from 'd3';

function Graph ({ data }) {
  if (!data) {
    return null;
  }
  return (
    <BarChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 20, right: 0, left: 0, bottom: 0,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip formatter={d => d3.format('$,.2f')(d)} />
      <Legend />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>
  );
}

Graph.propTypes = {
  data: arrayOf(shape({
    name: string,
    revenue: number
  })),
};

export default memo(Graph);

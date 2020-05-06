import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import Card from './Card';
import Graph from './Graph';

const RevenueGraph = ({title, data}) => {
    return (
        <Card title={title}>
            <Graph data={data} />
        </Card>
    )
};

RevenueGraph.propTypes = {
    title: string,
    data: arrayOf(shape({
        name: string,
        revenue: number
    }))
};

export default RevenueGraph;

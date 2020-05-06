import React, {useEffect} from 'react';
import { number, string, array, func } from 'prop-types';
import { connect } from 'react-redux';
import RevenueGraph from '../Components/RevenueGraph';
import { loadRevenueData } from '../actions';

const RevenueGraphContainer = ({userId, role, data, getRevenue}) => {
    const title = `Revenue by ${role}`;
    // grabs data before mounting
    useEffect(() => getRevenue(role, userId), [getRevenue, role, userId]);

    return (
        <RevenueGraph title={title} data={data} />
    );
};

RevenueGraphContainer.propTypes = {
    userId: number,
    role: string,
    data: array,
    getRevenue: func,
};

const mapStateToProps = ({data}) => ({data});

const mapDispatchToProps = {
    getRevenue: loadRevenueData
};

export default connect(mapStateToProps, mapDispatchToProps)(RevenueGraphContainer);
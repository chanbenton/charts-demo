import React from 'react';
import RevenueGraph from './Containers/RevenueGraph';
import TabWrapper, { Tab } from './Components/TabWrapper';

const rep = "Sales Rep";
const manager = "Manager";
const director = "Director";

const App = () => {
    return (
        <TabWrapper>
            <Tab title={rep}>
                <RevenueGraph userId={203} role={rep} />
            </Tab>
            <Tab title={manager}>
                <RevenueGraph userId={32} role={manager} />
            </Tab>
            <Tab title={director}>
                <RevenueGraph userId={2} role={director} />
            </Tab>
        </TabWrapper>
    );
};

export default App;
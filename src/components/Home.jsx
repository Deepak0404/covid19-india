import React from 'react';

import Header from './Header';
import Cards from './Cards';
import HelpCard from './HelpCard';
import Charts from './Charts';
import DataTable from './DataTable';
import Footer from './Footer';

function Home() {
  return (
    <React.Fragment>
        <Header/>
        <Cards/>
        <DataTable />
        <HelpCard/>
        <Charts />
        {/* <StatePicker /> */}
        <Footer/>
    </React.Fragment>
  );
}

export default Home;

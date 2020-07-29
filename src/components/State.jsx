import React, {useState, useEffect} from 'react';
import Header from './Header';
import Cards from './Cards';
import HelpCard from './HelpCard';
import DataTable from './DataTable';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import { useParams } from 'react-router-dom';

const $ = require('jquery');
$.DataTable = require('datatables.net-responsive-bs4');

const State = (props) => {
    const stateCode = useParams().stateCode.toUpperCase();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.covid19india.org/v2/state_district_wise.json')
            .then(response => {
                // console.log(stateCode);
                // console.log(response.data);
                // console.log(response.data.filter(state => state==stateCode));
                const stateData = response.data.find((s) => s.statecode === stateCode);
                // console.log(stateData.districtData);
                setTableData(stateData.districtData);

                $('#tableData').DataTable({
                    responsive: true,
                    "pageLength": 25,
                    "order": [[ 1, "desc" ]] // 2nd column short
                });
                // moveFirstRow();
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return(
      <>
        <Header/>
        <Cards/>
        <section id="dataTable">
            <Container>
                <Card className="mb-4 border-0">
                    <Card.Header className="text-white">
                        Details of the ALL States
                    </Card.Header>
                    <Card.Body>
                        <Table responsive bordered hover id="tableData">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Districts</th>
                                    <th>Confirmed</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((tableUpdatedData, index) => (
                                    <tr key={index}>
                                        <td>{tableUpdatedData.district}</td>
                                        <td className="confirmed">
                                            <NumberFormat 
                                                value={tableUpdatedData.confirmed} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                        </td>
                                        <td className="recovered">
                                            <NumberFormat 
                                                value={tableUpdatedData.recovered} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                        </td>
                                        <td className="deceased">
                                            <NumberFormat 
                                                value={tableUpdatedData.deceased} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                        </td>
                                        <td className="active">
                                            <NumberFormat 
                                                value={tableUpdatedData.active} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </section>
        <Footer/>
      </>
    )
}

export default State;
import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import NumberFormat from 'react-number-format';

const $ = require('jquery');
$.DataTable = require('datatables.net-responsive-bs4');

const DataTable = () => {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.covid19india.org/data.json')
            .then(response => {
                // console.log(response.data.statewise);
                setTableData(response.data.statewise);

                $('#tableData').DataTable({
                    responsive: true,
                    "pageLength": 40,
                    "order": [[ 4, "desc" ]], // 2nd column short
                    "bPaginate": false, // hide pagination
                    "bInfo": false, // hide showing entries
                });
                moveFirstRow();
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function moveFirstRow(){
        let firstRow = $('#tableData tbody tr:first-child');
        let selectRowData = $(firstRow).html();
        $('#tableData tbody').append(selectRowData);
        $(firstRow).remove();
    }

    return(
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
                                    <th>States</th>
                                    <th>Confirmed</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((tableUpdatedData, index) => (
                                    <tr key={index}>
                                        <td>{tableUpdatedData.state}</td>
                                        <td className="confirmed">
                                            <NumberFormat 
                                                value={tableUpdatedData.confirmed} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                            <sub>
                                                &nbsp;
                                                <FontAwesomeIcon icon={faArrowUp}/>
                                                <NumberFormat 
                                                    value={tableUpdatedData.deltaconfirmed} 
                                                    thousandSeparator={true} 
                                                    thousandsGroupStyle="lakh"
                                                    displayType={'text'} />
                                            </sub>
                                        </td>
                                        <td className="recovered">
                                            <NumberFormat 
                                                value={tableUpdatedData.recovered} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                            <sub>
                                                &nbsp;
                                                <FontAwesomeIcon icon={faArrowUp}/>
                                                <NumberFormat 
                                                    value={tableUpdatedData.deltarecovered} 
                                                    thousandSeparator={true} 
                                                    thousandsGroupStyle="lakh"
                                                    displayType={'text'} />
                                            </sub>
                                        </td>
                                        <td className="deceased">
                                            <NumberFormat 
                                                value={tableUpdatedData.deaths} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                            <sub>
                                                &nbsp;
                                                <FontAwesomeIcon icon={faArrowUp}/>
                                                <NumberFormat 
                                                    value={tableUpdatedData.deltadeaths} 
                                                    thousandSeparator={true} 
                                                    thousandsGroupStyle="lakh"
                                                    displayType={'text'} />
                                            </sub>
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
    )
}

export default DataTable;
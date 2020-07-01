import React , { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { Line, Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartBar } from '@fortawesome/free-solid-svg-icons';
import bgImage from './../img/skyline-background.jpg';

const Charts = () => {

    const [lineChart, setLineChart] = useState({dataset:{},options:{}});
    const [barChart, setBarChart] = useState({dataset:{},options:{}});

    useEffect(() => {
        axios
            .get('https://api.covid19india.org/states_daily.json')
            .then(response => {
                // console.log(response.data);
                let total = 0;
                let totalRecover = 0;
                let totalDeaths = 0;
                const dateList = response.data.states_daily;
                const arr1 = dateList.filter((value, index, arr) => index % 3 === 0);
                const arr2 = dateList.filter((value, index, arr) => (index+1) % 3 === 0);
                const arr3 = dateList.filter((value, index, arr) => (index+2) % 3 === 0);

                const dates = arr1.map(chartData => chartData.date);
                const dailyConfirmed = arr1.map(caseData => Number(caseData.tt));
                const dailyDeaths = arr2.map(caseData => Number(caseData.tt)).map(value => totalDeaths += value);
                const dailyRecovered = arr3.map(caseData => Number(caseData.tt)).map(value => totalRecover += value);
                const confirmedCasesChart = dailyConfirmed.map(value => total += value);

                setLineChart({
                    dataset: {
                        labels: dates,
                        datasets: [
                        {
                            borderWidth: 2,
                            data: confirmedCasesChart,
                            borderCapStyle: 'round',
                            pointBackgroundColor: '#6c757d',
                            label: 'Confirmed',
                            borderColor: '#6c757d',
                            pointHoverRadius: 3,
                        },
                        {
                            borderWidth: 2,
                            data: dailyRecovered,
                            borderCapStyle: 'round',
                            pointBackgroundColor: '#7ebf80',
                            label: 'Recovered',
                            borderColor: '#7ebf80',
                            pointHoverRadius: 3,
                        },
                        {
                            borderWidth: 2,
                            data: dailyDeaths,
                            borderCapStyle: 'round',
                            pointBackgroundColor: '#ff6862',
                            label: 'Deceased',
                            borderColor: '#ff6862',
                            pointHoverRadius: 3,
                        },
                        ],
                    },
                    options: {
                        elements: {
                          point: {
                            radius: 0,
                          },
                          line: {
                            tension: 0.1,
                          },
                        },
                        scales: {
                          yAxes: [
                            {
                              scaleLabel: {
                                display: false,
                                labelString: 'Total Cases',
                              },
                            },
                          ],
                          xAxes: [
                            {
                              type: 'time',
                              time: {
                                unit: 'day',
                                tooltipFormat: 'MMM DD',
                                stepSize: 7,
                                displayFormats: {
                                  millisecond: 'MMM DD',
                                  second: 'MMM DD',
                                  minute: 'MMM DD',
                                  hour: 'MMM DD',
                                  day: 'MMM DD',
                                  week: 'MMM DD',
                                  month: 'MMM DD',
                                  quarter: 'MMM DD',
                                  year: 'MMM DD',
                                },
                              },
                            },
                          ],
                        },
                      }
                });

                setBarChart({
                    dataset: {
                        labels: dates,
                        datasets: [{
                            label: "Date",
                            backgroundColor: "#7cb5ec",
                            data: dailyConfirmed,
                        }],
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                time: {unit: 'date'},
                                gridLines: {display: false}
                            }],
                            yAxes: [{
                                gridLines: {display: true}
                            }],
                        },
                        legend: {display: false}
                    }
                });

            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return(
        <section id="charts" style={{backgroundImage : `url(${bgImage})`}}>
            <Container>
                <Row>
                    <div className="col-xl-6">
                        <Card className="cumulative-spread mb-4 border-0">
                            <Card.Header className="text-white">
                                <FontAwesomeIcon icon={faChartLine}/> Cumulative Spread
                            </Card.Header>
                            <Card.Body>
                                <Line data={lineChart.dataset} options={lineChart.options} />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-xl-6">
                        <Card className="daily-spread mb-4 border-0">
                            <Card.Header className="text-white">
                                <FontAwesomeIcon icon={faChartBar}/> Daily Spread
                            </Card.Header>
                            <Card.Body>
                                <Bar data={barChart.dataset} options={barChart.options} />
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Charts;
import React from "react";
import Chart from 'react-apexcharts';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
class UserChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: `Bills`,
                    data: [28, 29, 33, 36, 32, 32, 33],
                },
                {
                    name: `Total`,
                    data: [12, 11, 14, 18, 17, 13, 13]
                }
            ],
            options: {
                chart: {
                    height: 500,
                    type: 'line',
                    zoom: {
                        enabled: true
                    }
                },
                colors: ['#FFE700', '#00AA55'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    width: 4
                },
                title: {
                    text: `Orders In ${months[new Date().getMonth()]}`,
                    align: 'left',
                    margin: 50,
                    offsetY: -5,
                    style: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        fontFamily: "Poppins, sans-serif"
                    }
                },
                grid: {
                    borderColor: '#E4E8EB',
                },
                markers: {
                    size: 5
                },
                xaxis: {
                    categories: [...Array.from(Array(12).keys())].map(item => {
                        return item + 1
                    }),
                },
                yaxis: {
                    min: 5,
                    max: 50
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -25,
                    offsetX: -5,
                }
            },


        };
    }
    componentDidMount() {
        const { data } = this.props;
        let arrayData = [];

        data.forEach(item => {
            const time = new Date(item?.createdAt).getMonth() + 1;
            const year = new Date(item?.createdAt).getFullYear();
            const itemIsExisted = arrayData.findIndex(item => item?.month === time && item?.year === year);
            if(itemIsExisted === -1) {
                arrayData = [...arrayData, {
                    bills: 1,
                    total: item?.total,
                    month: time,
                    year: year
                }]
            } else {
                const getItemExisted = arrayData[itemIsExisted];
                getItemExisted.bills += 1;
                getItemExisted.total += item.total;
                arrayData[itemIsExisted] = getItemExisted;
            }
        });
        
    }
    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="line" height={500} />
            </div>


        );
    }
}

export default UserChart
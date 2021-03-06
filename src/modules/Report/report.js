import React, { Component } from 'react';

import Chart from './libraries/chart';
import Card from '../../shared/components/card/card';

class Report extends Component {
    constructor(){
        super();
        this.myChart = null; 
    }
    
    componentDidMount(){
        var ctx = document.getElementById('myChart').getContext('2d');
        this.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    componentWillUnmount(){
        this.myChart.destroy();
    }
    
    render(){
        return (        
            <React.Fragment>
                <h2>Report</h2>
                <Card>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </Card>
            </React.Fragment>
        );
    }
}

export default Report;


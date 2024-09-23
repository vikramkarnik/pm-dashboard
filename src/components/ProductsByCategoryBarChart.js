import React, { useState, useEffect } from 'react'
import { Bar } from "react-chartjs-2";
import { 
    Chart as ChartJS,
    BarElement,
    Legend,
    Tooltip,
    Title,
    LinearScale,
    CategoryScale
 } from "chart.js";

ChartJS.register(
    BarElement,
    Legend,
    Tooltip,
    Title,
    LinearScale,
    CategoryScale
);

const ProductsByCategoryBarChart = () => {
    const [chartData, setChartData] = useState([])
    var baseUrl = "http://localhost:32455/api/Products/ByCategory";

   
    useEffect(() => {
        const fetchChartData = async () => {
            await fetch(`${baseUrl}`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
                }
            }).then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                console.log(json);
                setChartData(json)
                });
            }
            }).catch((error) => {
            console.log(error);
            });
        };
        fetchChartData()
    }, [baseUrl]);

    var data = {
    labels: chartData.map((data) => data.category),
    datasets: [
      {
        label: "Products By Category",
        data: chartData.map((data) => data.count),
        backgroundColor: [
          'rgba(250, 92, 129, 0.6)',
          'rgba(88, 192, 199, 0.6)',
          'rgba(144, 99, 245, 0.6)',
          'rgba(62, 162, 230, 0.6)',
          'rgba(239, 159, 77, 0.6)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }
    ]};
    return  (
        <div className="chart-div">
            <Bar 
                data={data} 
                height={350}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                    },
                    legend: {
                    labels: {
                        fontSize: 25,
                    },
                    },
                }}
            />
        </div>
    )
}

export default ProductsByCategoryBarChart
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Chart,registerables} from 'Chart.js';
window.Chart = Chart;
Chart.register(...registerables);

export default function Chartwidget() {

    useEffect(() => {

        let chart = new Chart(document.getElementById("myChart"), {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                        label: "",
                        borderColor: "#7D83FF",
                        data: [100, 4300, 620, 300, 10000, 600],
                        fill: false,
                        pointBackgroundColor: "#4A5568",
                        borderWidth: "3",
                        pointBorderWidth: "",
                        pointHoverRadius: "8",
                        pointHoverBorderWidth: "2",
                        pointHoverBorderColor: "rgb(74,85,104,0.2)",
                        tension: 0.7,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: false,
                    },
                    tooltip: {
                        intersect: false,
                        mode: 'nearest',
                    },
                },
                scales: {
                    x: {
                        grid: {
                            color: "#F1F1F5",
                            display: true,
                        },
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        display: false,
                    },
                },
                elements: {
                    line: {
                        tension: 0.7,
                    },
                },
            },
        });

        return () => {
            if (chart) {
                chart.destroy();
            }
        };

    }, []);

    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
            </Helmet>
            <div className="flex items-center justify-center py-2 px-4 ">
                <div className="w-[25rem] md:w-[28rem] p-3 md:p-0 mt-5 md:mt-0 md:ml-[4rem] ">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <canvas id="myChart" width={1025} height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

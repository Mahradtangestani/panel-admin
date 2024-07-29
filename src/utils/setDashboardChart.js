import { Chart } from "chart.js/auto";

let chartInstance = null; // متغیری برای نگه‌داری نمونه چارت

export const setDashboardChart = (labels, datapoints) => {
    
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'فروش ماه',
                data: datapoints,
                borderColor: "#0062ff",
                fill: true,
                cubicInterpolationMode: 'monotone',
                tension: 0.4
            }
        ]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'نمودار فروش یک سال گذشته'
                },
            },
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        // text: 'زمان'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: ' میلیون تومان'
                    },
                    // suggestedMin: -10,
                    // suggestedMax: 200
                }
            }
        },
    };

    const ctx = document.getElementById('myChart').getContext('2d');

    // اگر نمونه چارت قبلی وجود داشت، آن را نابود کن
    if (chartInstance) {
        chartInstance.destroy();
    }

    // ساختن چارت جدید و ذخیره آن در متغیر chartInstance
    chartInstance = new Chart(ctx, config);
}
"use client";

import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


interface PieData {
  label: string;
    value: number;
    colour: string;
}

interface DonutChartProps {
  piedata: PieData[];
}
const DonutChart: React.FC<DonutChartProps> = ({piedata}) => {

    const labels = piedata.map(item => item.label);
    const values = piedata.map(item => item.value);
    const bgcolors = piedata.map(item => item.colour);

    const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: bgcolors,
        hoverOffset: 4, 
        borderWidth: 0,
      }
    ]
    };
    
   const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
       cutout: '70%',
   rotation: 135 * Math.PI / 2,
   };
    
    return (
      <div className="w-[173.47px] h-[173.47px]">
            
          <Doughnut data={data} options={options} />
      </div>
  )
}

export default DonutChart
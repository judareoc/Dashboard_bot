import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

function ChartLine({ title, dataValues }) {
  const data = {
    labels: ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'],
    datasets: [{
      label: title,
      data: dataValues,
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99,102,241,0.2)',
      tension: 0.4,
      fill: true,
    }],
  }

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
  }

  return <Line data={data} options={options} />
}

export default ChartLine
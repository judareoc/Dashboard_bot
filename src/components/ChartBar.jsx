import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

function ChartBar() {
  const data = {
    labels: ['Ene','Feb','Mar','Abr','May','Jun'],
    datasets: [{
      label: 'Usuarios',
      data: [50, 80, 65, 120, 140, 160],
      backgroundColor: '#22c55e',
    }],
  }

  return <Bar data={data} />
}

export default ChartBar

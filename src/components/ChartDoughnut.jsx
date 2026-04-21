import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

function ChartDoughnut() {
  const data = {
    labels: ['Atendidos', 'Pendientes'],
    datasets: [{
      data: [300, 50],
      backgroundColor: ['#4f46e5', '#f59e0b'],
    }],
  }

  return <Doughnut data={data} />
}

export default ChartDoughnut
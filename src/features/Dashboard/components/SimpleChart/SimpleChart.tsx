import withSimpleChart from '@features/Dashboard/components/SimpleChart/withSimpleChart'
import ReactECharts from 'echarts-for-react'

const SimpleChart = ({ chartOption }: any) => {
  return <ReactECharts option={chartOption} />
}

const WrappedComponent = withSimpleChart(SimpleChart)
export default WrappedComponent

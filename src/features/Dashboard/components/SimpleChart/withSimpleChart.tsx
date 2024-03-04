import React from 'react'

const withSimpleChart = (Component: React.FC) => {
  const Hoc = () => {
    const chartOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    }

    const newProps: any = {
      chartOption,
    }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withSimpleChart

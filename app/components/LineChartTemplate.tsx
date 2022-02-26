import * as React from 'react'
import { Typography } from '@mui/material'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type Data = {
  xval: number | string
  yval: number
}

const mockData: Data[] = [
  {
    xval: 'Page A',
    yval: 4000,
  },
  {
    xval: 'Page B',
    yval: 3000,
  },
  {
    xval: 'Page C',
    yval: 2000,
  },
  {
    xval: 'Page D',
    yval: 2780,
  },
  {
    xval: 'Page E',
    yval: 1890,
  },
  {
    xval: 'Page F',
    yval: 2390,
  },
  {
    xval: 'Page G',
    yval: 3490,
  },
]

interface LineChartTemplateProps {
  data: Data[]
  title?: string
  xlabel?: string
  ylabel?: string
  name?: string
}

// set ResponsiveContainer width=99% to respond to window size changes
// see https://github.com/recharts/recharts/issues/172#issuecomment-307858843
export default function LineChartTemplate({
  data = mockData,
  title = 'Title',
  xlabel = 'X-Axis',
  ylabel = 'Y-Axis',
  name = 'Line Legend',
}: LineChartTemplateProps) {
  return (
    <>
      <Typography variant='h6' sx={{ textAlign: 'center' }}>
        {title}
      </Typography>
      <ResponsiveContainer width='99%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='xval' label={{ value: xlabel, position: 'bottom' }} scale='band' />
          <YAxis label={{ value: ylabel, angle: -90, position: 'left' }} />
          <Tooltip />
          <Legend verticalAlign='middle' align='right' height={36} />
          <Line type='monotone' dataKey='yval' name={name} stroke='#82ca9d' activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

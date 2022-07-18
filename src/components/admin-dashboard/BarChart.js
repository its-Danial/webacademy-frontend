import React, { PureComponent } from "react";
import Title from "./Title";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Factory A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Factory B",
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Factory C",
    uv: -2000,
    pv: -9800,
    amt: 2290,
  },
  {
    name: "Factory D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Factory E",
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Factory F",
    uv: 2390,
    pv: -3800,
    amt: 2500,
  },
  {
    name: "Factory G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/bar-chart-with-positive-negative-i3b8b";

  render() {
    return (
      <React.Fragment>
        <Title>Customer Summary</Title>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}

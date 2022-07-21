import React, { PureComponent } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

import Title from "./Title";

const data = [
  {
    name: "2017",
    courses: 2,
  },
  {
    name: "2018",
    courses: 3,
  },
  {
    name: "2019",
    courses: 1,
  },
  {
    name: "2020",
    courses: 5,
  },
  {
    name: "2021",
    courses: 6,
  },
  {
    name: "2022",
    courses: 4,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/stacked-area-chart-ix341";

  render() {
    return (
      <React.Fragment>
        <Title>Number of courses created</Title>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="courses" stackId="1" stroke="#0060ff" fill="#0060ff" />
          </AreaChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}

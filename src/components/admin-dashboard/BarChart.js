import React, { PureComponent } from "react";
import Title from "./Title";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
const data = [
  {
    name: "Topics",
    Python: 5,
    Javascript: 7,
    Spring: 3,
    React: 4,
    HTML5: 6,
    CSS: 6,
    Django: 3,
    C: 2,
  },
];

const colors = ["#1984c5", "#22a7f0", "#63bff0", "#a7d5ed", "#e2e2e2", "#e1a692", "#de6e56", "#e14b31", "#c23728"];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/bar-chart-with-positive-negative-i3b8b";

  render() {
    return (
      <React.Fragment>
        <Title>Most liked course by topic</Title>
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

            <Bar dataKey="Python" fill={colors[0]} />
            <Bar dataKey="Javascript" fill={colors[1]} />
            <Bar dataKey="Spring" fill={colors[2]} />
            <Bar dataKey="React" fill={colors[3]} />
            <Bar dataKey="HTML5" fill={colors[4]} />
            <Bar dataKey="CSS" fill={colors[5]} />
            <Bar dataKey="C" fill={colors[6]} />
            <Bar dataKey="Django" fill={colors[7]} />
          </BarChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}

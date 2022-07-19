import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Title from "./Title";
// Note: number of students that bought this course with these categories
// Note: best selling courses by categories
const data = [
  // Web dev
  { name: "Group A", value: 19 },
  // programming languages
  { name: "Group B", value: 14 },
  //
  { name: "Group C", value: 9 },
  // { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";

  render() {
    return (
      <React.Fragment>
        <Title>Today</Title>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}

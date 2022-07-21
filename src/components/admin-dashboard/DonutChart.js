import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";

// Note: number of students that bought this course with these categories
// Note: best selling courses by categories
const data = [
  // Web dev
  { name: "Web dev", value: 19 },
  // programming languages
  { name: "Languages", value: 14 },
  // Data Sci
  { name: "Data Science", value: 9 },
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

let renderLabel = function (entry) {
  return entry.name;
};
export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";

  render() {
    return (
      <React.Fragment>
        <h5 className="font-semibold text-base text-gray-600">Best selling courses by categories</h5>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Legend layout="horizontal" verticalAlign="top" align="top" />
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
                <Cell label={renderLabel} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}

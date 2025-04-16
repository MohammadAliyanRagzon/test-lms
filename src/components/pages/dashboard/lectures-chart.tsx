import React from "react";
import {
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import FormSelect from "../../common/form-select";

const data = [
  { month: "Jan", area: 20, line: 10 },
  { month: "Feb", area: 45, line: 30 },
  { month: "Mar", area: 40, line: 35 },
  { month: "Apr", area: 70, line: 25 },
  { month: "May", area: 85, line: 10 },
  { month: "June", area: 50, line: 80 },
  { month: "July", area: 60, line: 20 },
  { month: "Aug", area: 75, line: 10 },

];

const LectureChart: React.FC = () => {
  return (
    <div className="w-full mx-auto bg-white p-5 border border-primary-border rounded-primary flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold !font-family-barlow flex items-center gap-2">
          Lectures
        </h2>
        <div className="w-28">
          <FormSelect
            props={{
              placeholder: "Select",
            }}
            options={[
              { value: "daily", label: "Daily" },
              { value: "week", label: "This Week" },
              { value: "month", label: "This Month" },
              { value: "year", label: "This Year" },
            ]}
          />
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="min-w-max sm:min-w-0">
          <ResponsiveContainer width="100%" height={383}>
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: -28, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1.2">
                  <stop offset="0%" stopColor="#A435F0" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#F4E3FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="area"
                stroke="#A435F0"
                fill="url(#colorArea)"
                strokeWidth={1}
              />
              <Line
                type="monotone"
                dataKey="line"
                stroke="black"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LectureChart;

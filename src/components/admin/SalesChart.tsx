import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

export const SalesChart = () => {
  const data = [
    { month: "Aug", sales: 60 },
    { month: "Jul", sales: 80 },
    { month: "Jun", sales: 85 },
    { month: "Maio", sales: 70 },
    { month: "Abr", sales: 90 },
    { month: "Mar", sales: 65 },
    { month: "Fev", sales: 95 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Visão geral de vendas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                fontSize={12}
                className="text-muted-foreground"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                fontSize={12}
                className="text-muted-foreground"
              />
              <Bar 
                dataKey="sales" 
                fill="hsl(var(--dashboard-blue))"
                radius={[4, 4, 0, 0]}
                className="hover:opacity-80"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

export const StatsCards = () => {
  const stats = [
    {
      title: "Vendas totais",
      value: "R$ 65.360,00",
      change: "+12%",
      trend: "up",
      color: "bg-gradient-to-br from-dashboard-purple to-purple-600",
      icon: "💰"
    },
    {
      title: "Comerciante total",
      value: "163",
      change: "-5%",
      trend: "down",
      color: "bg-gradient-to-br from-dashboard-pink to-pink-600",
      icon: "🏪"
    },
    {
      title: "Comissão total",
      value: "R$ 15.360,62",
      change: "+8%",
      trend: "up",
      color: "bg-gradient-to-br from-dashboard-blue to-blue-600",
      icon: "💎"
    },
    {
      title: "Total de assinaturas",
      value: "R$ 961,00",
      change: "+15%",
      trend: "up",
      color: "bg-gradient-to-br from-dashboard-orange to-orange-600",
      icon: "📊"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="relative overflow-hidden border-0 shadow-md">
          <div className={`absolute inset-0 ${stat.color}`} />
          <CardContent className="relative p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">{stat.icon}</div>
              <Badge 
                variant="secondary" 
                className={`bg-white/20 text-white border-0 ${
                  stat.trend === 'up' ? 'hover:bg-white/30' : 'hover:bg-white/30'
                }`}
              >
                {stat.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {stat.change}
              </Badge>
            </div>
            <div>
              <h3 className="text-sm font-medium opacity-90 mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
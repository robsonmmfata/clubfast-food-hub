import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const TopClients = () => {
  const clients = [
    {
      name: "Aydin Ameteran",
      subtitle: "Membro desde qui, junho 6, 2024 9:43 PM",
      orders: 168,
      avatar: "/api/placeholder/40/40"
    },
    {
      name: "bastii bach",
      subtitle: "Membro desde sáb, janeiro 29, 2022 11:10 AM",
      orders: 155,
      avatar: "/api/placeholder/40/40"
    },
    {
      name: "bastii bach", 
      subtitle: "Membro desde qui, fevereiro 19, 2024 9:15 AM",
      orders: 28,
      avatar: "/api/placeholder/40/40"
    },
    {
      name: "Ahmet Topaok",
      subtitle: "Membro desde qui, fevereiro 5, 2025 1:41 AM",
      orders: 24,
      avatar: "/api/placeholder/40/40"
    },
    {
      name: "Powani",
      subtitle: "Один из победителей",
      orders: 12,
      avatar: "/api/placeholder/40/40"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Principais clientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <Avatar className="h-10 w-10">
                <AvatarImage src={client.avatar} alt={client.name} />
                <AvatarFallback>{client.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{client.name}</p>
                <p className="text-xs text-muted-foreground truncate">{client.subtitle}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">{client.orders}</p>
                <p className="text-xs text-muted-foreground">pedidos</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Calendar, Clock, Users, MapPin, Phone } from "lucide-react";

const TableReservationAdmin = () => {
  const reservations = [
    { 
      id: "RES001", 
      restaurant: "McDonald's Centro", 
      customer: "João Silva", 
      phone: "(11) 99999-9999",
      date: "2024-01-20", 
      time: "19:30", 
      guests: 4, 
      table: "Mesa 12", 
      status: "Confirmada" 
    },
    { 
      id: "RES002", 
      restaurant: "Burger King Shopping", 
      customer: "Maria Santos", 
      phone: "(11) 88888-8888",
      date: "2024-01-20", 
      time: "20:00", 
      guests: 2, 
      table: "Mesa 5", 
      status: "Pendente" 
    },
    { 
      id: "RES003", 
      restaurant: "Pizza Hut Paulista", 
      customer: "Pedro Costa", 
      phone: "(11) 77777-7777",
      date: "2024-01-21", 
      time: "18:30", 
      guests: 6, 
      table: "Mesa 8", 
      status: "Cancelada" 
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Confirmada": return "default";
      case "Pendente": return "secondary";
      case "Cancelada": return "destructive";
      case "Finalizada": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reservas de Mesa</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Calendário
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Reservas ativas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Pendentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Aguardando confirmação</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Ocupação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">Taxa de ocupação</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Este Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">456</div>
            <p className="text-xs text-muted-foreground">Total de reservas</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Lista de Reservas</CardTitle>
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar reservas..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Restaurante</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Pessoas</TableHead>
                    <TableHead>Mesa</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reservations.map((reservation) => (
                    <TableRow key={reservation.id}>
                      <TableCell className="font-medium">{reservation.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{reservation.restaurant}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            Centro
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{reservation.customer}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {reservation.phone}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{reservation.date}</p>
                          <p className="text-xs text-muted-foreground">{reservation.time}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {reservation.guests}
                        </div>
                      </TableCell>
                      <TableCell>{reservation.table}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(reservation.status)}>
                          {reservation.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            Ver
                          </Button>
                          <Button variant="ghost" size="sm">
                            Editar
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Resumo do Dia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Confirmadas</span>
                <span className="text-lg font-bold text-green-600">15</span>
              </div>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Pendentes</span>
                <span className="text-lg font-bold text-yellow-600">8</span>
              </div>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Canceladas</span>
                <span className="text-lg font-bold text-red-600">3</span>
              </div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Finalizadas</span>
                <span className="text-lg font-bold text-blue-600">12</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Horários Mais Procurados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { time: "19:00 - 20:00", reservations: 45, percentage: 85 },
              { time: "20:00 - 21:00", reservations: 38, percentage: 72 },
              { time: "18:00 - 19:00", reservations: 32, percentage: 60 },
              { time: "21:00 - 22:00", reservations: 28, percentage: 53 },
              { time: "12:00 - 13:00", reservations: 22, percentage: 42 },
            ].map((slot, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{slot.time}</p>
                  <p className="text-sm text-muted-foreground">{slot.reservations} reservas</p>
                </div>
                <div className="w-20 bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary rounded-full h-2" 
                    style={{ width: `${slot.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Restaurantes Mais Reservados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "McDonald's Centro", reservations: 89, growth: "+12%" },
              { name: "Burger King Shopping", reservations: 67, growth: "+8%" },
              { name: "Pizza Hut Paulista", reservations: 54, growth: "+15%" },
              { name: "Subway Vila Madalena", reservations: 43, growth: "-2%" },
            ].map((restaurant, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">{restaurant.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {restaurant.reservations} reservas este mês
                  </p>
                </div>
                <Badge variant={restaurant.growth.startsWith('+') ? "default" : "destructive"}>
                  {restaurant.growth}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TableReservationAdmin;
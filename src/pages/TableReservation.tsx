import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Table as TableIcon, Plus, MapPin, QrCode, Wifi } from "lucide-react";

const TableReservation = () => {
  const tables = [
    { id: 1, number: "Mesa 01", capacity: 4, status: "Disponível", reservation: null, location: "Área interna" },
    { id: 2, number: "Mesa 02", capacity: 2, status: "Ocupada", reservation: "João Silva - 19:30", location: "Área interna" },
    { id: 3, number: "Mesa 03", capacity: 6, status: "Reservada", reservation: "Maria Santos - 20:00", location: "Área externa" },
    { id: 4, number: "Mesa 04", capacity: 4, status: "Disponível", reservation: null, location: "Área interna" },
    { id: 5, number: "Mesa 05", capacity: 8, status: "Manutenção", reservation: null, location: "Área externa" },
    { id: 6, number: "Mesa 06", capacity: 2, status: "Ocupada", reservation: "Pedro Costa - 18:45", location: "Varanda" }
  ];

  const reservations = [
    { id: "RES-001", date: "20/08/2024", time: "19:30", customer: "João Silva", phone: "(11) 99999-9999", guests: 4, table: "Mesa 02", status: "Confirmada" },
    { id: "RES-002", date: "20/08/2024", time: "20:00", customer: "Maria Santos", phone: "(11) 88888-8888", guests: 6, table: "Mesa 03", status: "Pendente" },
    { id: "RES-003", date: "21/08/2024", time: "19:00", customer: "Carlos Lima", phone: "(11) 77777-7777", guests: 2, table: "Mesa 06", status: "Confirmada" },
    { id: "RES-004", date: "21/08/2024", time: "20:30", customer: "Ana Costa", phone: "(11) 66666-6666", guests: 4, table: "Mesa 01", status: "Cancelada" }
  ];

  const getTableStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "disponível": return "bg-dashboard-green";
      case "ocupada": return "bg-red-500";
      case "reservada": return "bg-yellow-500";
      case "manutenção": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getReservationStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmada": return "bg-dashboard-green";
      case "pendente": return "bg-yellow-500";
      case "cancelada": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Reserva de Mesas</h1>
          <p className="text-muted-foreground">Gerencie mesas e reservas do restaurante</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <QrCode className="h-4 w-4 mr-2" />
            QR Code Mesa
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Reserva
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Mesas</p>
                <p className="text-2xl font-bold">{tables.length}</p>
              </div>
              <TableIcon className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Mesas Ocupadas</p>
                <p className="text-2xl font-bold">{tables.filter(t => t.status === "Ocupada").length}</p>
              </div>
              <Users className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Reservas Hoje</p>
                <p className="text-2xl font-bold">{reservations.filter(r => r.date === "20/08/2024").length}</p>
              </div>
              <Calendar className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Taxa Ocupação</p>
                <p className="text-2xl font-bold">75%</p>
              </div>
              <Clock className="h-8 w-8 text-dashboard-green" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="layout" className="space-y-6">
        <TabsList>
          <TabsTrigger value="layout">Layout do Salão</TabsTrigger>
          <TabsTrigger value="reservations">Reservas</TabsTrigger>
          <TabsTrigger value="manage">Gerenciar Mesas</TabsTrigger>
        </TabsList>

        <TabsContent value="layout">
          <Card>
            <CardHeader>
              <CardTitle>Layout do Restaurante</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6">
                {/* Área Interna */}
                <div className="col-span-2 border rounded-lg p-4">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Área Interna
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {tables.filter(t => t.location === "Área interna").map((table) => (
                      <div 
                        key={table.id}
                        className={`p-4 rounded-lg border-2 text-center cursor-pointer transition-colors ${
                          table.status === "Disponível" ? "border-green-200 bg-green-50" :
                          table.status === "Ocupada" ? "border-red-200 bg-red-50" :
                          table.status === "Reservada" ? "border-yellow-200 bg-yellow-50" :
                          "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <div className="font-medium">{table.number}</div>
                        <div className="text-sm text-muted-foreground">{table.capacity} lugares</div>
                        <Badge className={`mt-2 ${getTableStatusColor(table.status)}`}>
                          {table.status}
                        </Badge>
                        {table.reservation && (
                          <div className="text-xs mt-1 text-muted-foreground">
                            {table.reservation}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Área Externa */}
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Área Externa
                  </h3>
                  <div className="space-y-4">
                    {tables.filter(t => t.location === "Área externa").map((table) => (
                      <div 
                        key={table.id}
                        className={`p-3 rounded-lg border-2 text-center cursor-pointer ${
                          table.status === "Disponível" ? "border-green-200 bg-green-50" :
                          table.status === "Ocupada" ? "border-red-200 bg-red-50" :
                          table.status === "Reservada" ? "border-yellow-200 bg-yellow-50" :
                          "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <div className="font-medium">{table.number}</div>
                        <div className="text-sm text-muted-foreground">{table.capacity} lugares</div>
                        <Badge className={`mt-2 ${getTableStatusColor(table.status)}`}>
                          {table.status}
                        </Badge>
                      </div>
                    ))}
                    
                    {/* Varanda */}
                    {tables.filter(t => t.location === "Varanda").map((table) => (
                      <div 
                        key={table.id}
                        className="p-3 rounded-lg border-2 border-red-200 bg-red-50 text-center"
                      >
                        <div className="font-medium">{table.number}</div>
                        <div className="text-sm text-muted-foreground">{table.capacity} lugares</div>
                        <Badge className={getTableStatusColor(table.status)}>
                          {table.status}
                        </Badge>
                        {table.reservation && (
                          <div className="text-xs mt-1 text-muted-foreground">
                            {table.reservation}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reservations">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Reservas</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Telefone</TableHead>
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
                          <div>{reservation.date}</div>
                          <div className="text-sm text-muted-foreground">{reservation.time}</div>
                        </div>
                      </TableCell>
                      <TableCell>{reservation.customer}</TableCell>
                      <TableCell>{reservation.phone}</TableCell>
                      <TableCell>{reservation.guests}</TableCell>
                      <TableCell>{reservation.table}</TableCell>
                      <TableCell>
                        <Badge className={getReservationStatusColor(reservation.status)}>
                          {reservation.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">Confirmar</Button>
                          <Button variant="ghost" size="sm">Editar</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Adicionar Nova Mesa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="table-number">Número da Mesa</Label>
                  <Input id="table-number" placeholder="Ex: Mesa 07" />
                </div>
                
                <div>
                  <Label htmlFor="table-capacity">Capacidade</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a capacidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 pessoas</SelectItem>
                      <SelectItem value="4">4 pessoas</SelectItem>
                      <SelectItem value="6">6 pessoas</SelectItem>
                      <SelectItem value="8">8 pessoas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="table-location">Localização</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="interna">Área Interna</SelectItem>
                      <SelectItem value="externa">Área Externa</SelectItem>
                      <SelectItem value="varanda">Varanda</SelectItem>
                      <SelectItem value="vip">Área VIP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Mesa
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurações Avançadas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="reservation-time">Tempo de Reserva (minutos)</Label>
                  <Input id="reservation-time" type="number" defaultValue="120" />
                </div>

                <div>
                  <Label htmlFor="advance-booking">Antecedência para Reserva (dias)</Label>
                  <Input id="advance-booking" type="number" defaultValue="30" />
                </div>

                <div>
                  <Label htmlFor="min-advance">Antecedência Mínima (horas)</Label>
                  <Input id="min-advance" type="number" defaultValue="2" />
                </div>

                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4" />
                  <Label>QR Code para Comandas Digitais</Label>
                </div>
                
                <Button variant="outline" className="w-full">
                  <QrCode className="h-4 w-4 mr-2" />
                  Gerar QR Codes para Mesas
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TableReservation;
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Database, 
  Shield, 
  Download, 
  Upload, 
  RefreshCw, 
  Settings, 
  Activity, 
  HardDrive, 
  Cpu, 
  BarChart3,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

const UtilitiesAdmin = () => {
  const [isBackupRunning, setIsBackupRunning] = useState(false);
  const [systemStatus, setSystemStatus] = useState("normal");

  const systemStats = [
    { label: "CPU Usage", value: "45%", trend: "Normal", icon: Cpu, color: "text-green-600" },
    { label: "Memory Usage", value: "67%", trend: "Normal", icon: Activity, color: "text-blue-600" },
    { label: "Storage", value: "234 GB", trend: "78% usado", icon: HardDrive, color: "text-orange-600" },
    { label: "Uptime", value: "15 dias", trend: "Estável", icon: Clock, color: "text-green-600" },
  ];

  const backupHistory = [
    { id: 1, date: "2024-01-15", time: "03:00", type: "Completo", size: "2.3 GB", status: "Sucesso", duration: "45 min" },
    { id: 2, date: "2024-01-14", time: "03:00", type: "Incremental", size: "456 MB", status: "Sucesso", duration: "12 min" },
    { id: 3, date: "2024-01-13", time: "03:00", type: "Incremental", size: "234 MB", status: "Sucesso", duration: "8 min" },
    { id: 4, date: "2024-01-12", time: "03:00", type: "Completo", size: "2.1 GB", status: "Falha", duration: "30 min" },
  ];

  const scheduledTasks = [
    { id: 1, name: "Backup Automático", schedule: "Diário às 03:00", active: true, lastRun: "2024-01-15 03:00" },
    { id: 2, name: "Limpeza de Logs", schedule: "Semanal - Domingo", active: true, lastRun: "2024-01-14 02:00" },
    { id: 3, name: "Relatório Semanal", schedule: "Segunda-feira às 08:00", active: true, lastRun: "2024-01-15 08:00" },
    { id: 4, name: "Verificação de Integridade", schedule: "Mensal - Dia 1", active: false, lastRun: "2024-01-01 01:00" },
  ];

  const maintenanceTasks = [
    { name: "Otimizar Base de Dados", description: "Reorganizar índices e limpar dados órfãos", estimated: "30 min" },
    { name: "Limpar Cache Sistema", description: "Remover arquivos temporários e cache antigo", estimated: "5 min" },
    { name: "Verificar Integridade", description: "Verificar consistência dos dados", estimated: "15 min" },
    { name: "Atualizar Estatísticas", description: "Recalcular estatísticas do sistema", estimated: "10 min" },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Sucesso": return "default";
      case "Falha": return "destructive";
      case "Em Andamento": return "secondary";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Sucesso": return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Falha": return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case "Em Andamento": return <RefreshCw className="h-4 w-4 text-blue-600 animate-spin" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Utilitários do Sistema</h1>
          <p className="text-muted-foreground">Ferramentas de manutenção e administração</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Atualizar Status
          </Button>
          <Button variant="destructive">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Modo Manutenção
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-xs ${stat.color}`}>{stat.trend}</p>
                </div>
                <stat.icon className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="backup" className="space-y-6">
        <TabsList>
          <TabsTrigger value="backup">Backup & Restore</TabsTrigger>
          <TabsTrigger value="maintenance">Manutenção</TabsTrigger>
          <TabsTrigger value="tasks">Tarefas Agendadas</TabsTrigger>
          <TabsTrigger value="system">Sistema</TabsTrigger>
        </TabsList>

        <TabsContent value="backup">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Backup Manual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <Button 
                    className="w-full" 
                    disabled={isBackupRunning}
                    onClick={() => setIsBackupRunning(true)}
                  >
                    {isBackupRunning ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Executando Backup...
                      </>
                    ) : (
                      <>
                        <Database className="mr-2 h-4 w-4" />
                        Iniciar Backup Completo
                      </>
                    )}
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Backup Incremental
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Restaurar Backup
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Backup Automático</span>
                    <Switch defaultChecked />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Próximo backup: Hoje às 03:00
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Histórico de Backups</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {backupHistory.slice(0, 4).map((backup) => (
                    <div key={backup.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(backup.status)}
                        <div>
                          <p className="font-medium text-sm">{backup.date} {backup.time}</p>
                          <p className="text-xs text-muted-foreground">
                            {backup.type} - {backup.size} - {backup.duration}
                          </p>
                        </div>
                      </div>
                      <Badge variant={getStatusVariant(backup.status)}>
                        {backup.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="maintenance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tarefas de Manutenção</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {maintenanceTasks.map((task, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium">{task.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                          <p className="text-xs text-muted-foreground mt-2">
                            Tempo estimado: {task.estimated}
                          </p>
                        </div>
                        <Button size="sm" className="ml-4">
                          Executar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurações de Manutenção</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Manutenção automática</p>
                    <p className="text-sm text-muted-foreground">Executar tarefas automaticamente</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Modo de baixo impacto</p>
                    <p className="text-sm text-muted-foreground">Executar durante horário de menor uso</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notificações de manutenção</p>
                    <p className="text-sm text-muted-foreground">Alertar sobre tarefas concluídas</p>
                  </div>
                  <Switch />
                </div>

                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    Configurações Avançadas
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Tarefas Agendadas</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Agendamento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Última Execução</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scheduledTasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.name}</TableCell>
                      <TableCell>{task.schedule}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Switch checked={task.active} />
                          <span className="text-sm">{task.active ? "Ativo" : "Inativo"}</span>
                        </div>
                      </TableCell>
                      <TableCell>{task.lastRun}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Sistema</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Versão</p>
                    <p className="font-medium">2.0.4</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Banco de Dados</p>
                    <p className="font-medium">PostgreSQL 14.2</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">PHP</p>
                    <p className="font-medium">8.2.1</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Servidor</p>
                    <p className="font-medium">Apache 2.4</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">SSL</p>
                    <p className="font-medium text-green-600">Ativo</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Firewall</p>
                    <p className="font-medium text-green-600">Ativo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ações do Sistema</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Gerar Relatório de Performance
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="mr-2 h-4 w-4" />
                  Verificar Segurança
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar Logs do Sistema
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Limpar Arquivos Temporários
                </Button>

                <div className="pt-4 border-t">
                  <Button variant="destructive" className="w-full">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Reiniciar Sistema
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UtilitiesAdmin;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Database, HardDrive, Shield, RefreshCw, Download, Upload, Trash2, Settings } from "lucide-react";

const Utilities = () => {
  const systemStats = [
    { title: "Uso de CPU", value: "23%", change: "Normal", icon: Settings },
    { title: "Uso de Memória", value: "1.2 GB", change: "45%", icon: HardDrive },
    { title: "Armazenamento", value: "2.8 GB", change: "78%", icon: Database },
    { title: "Status Sistema", value: "Ativo", change: "Estável", icon: Shield },
  ];

  const backups = [
    {
      id: 1,
      name: "Backup Completo - Janeiro 2024",
      type: "Completo",
      size: "245 MB",
      date: "15/01/2024 03:00",
      status: "Concluído"
    },
    {
      id: 2,
      name: "Backup Incremental - Diário",
      type: "Incremental",
      size: "12 MB",
      date: "15/01/2024 23:30",
      status: "Concluído"
    },
    {
      id: 3,
      name: "Backup Base de Dados",
      type: "Banco de Dados",
      size: "89 MB",
      date: "14/01/2024 12:00",
      status: "Concluído"
    },
  ];

  const systemLogs = [
    {
      timestamp: "15/01/2024 14:30:15",
      level: "INFO",
      module: "Sistema",
      message: "Sistema iniciado com sucesso"
    },
    {
      timestamp: "15/01/2024 14:25:32",
      level: "WARN",
      module: "Impressora",
      message: "Impressora Cozinha offline temporariamente"
    },
    {
      timestamp: "15/01/2024 14:20:45",
      level: "ERROR",
      module: "Pagamento",
      message: "Falha na conexão com gateway de pagamento"
    },
    {
      timestamp: "15/01/2024 14:15:12",
      level: "INFO",
      module: "PDV",
      message: "Novo pedido processado com sucesso"
    },
  ];

  const maintenanceTasks = [
    { name: "Limpeza de Cache", description: "Remove arquivos temporários", lastRun: "Há 2 horas", nextRun: "Em 22 horas" },
    { name: "Otimização de Banco", description: "Otimiza performance do banco de dados", lastRun: "Há 1 dia", nextRun: "Em 6 dias" },
    { name: "Backup Automático", description: "Cria backup incremental dos dados", lastRun: "Há 30 min", nextRun: "Em 23h 30min" },
    { name: "Verificação de Segurança", description: "Verifica vulnerabilidades do sistema", lastRun: "Há 3 dias", nextRun: "Em 4 dias" },
  ];

  const getLogLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "info": return "text-blue-600";
      case "warn": return "text-yellow-600";
      case "error": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getLogLevelBg = (level: string) => {
    switch (level.toLowerCase()) {
      case "info": return "bg-blue-100 text-blue-800";
      case "warn": return "bg-yellow-100 text-yellow-800";
      case "error": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Utilitários do Sistema</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Backup Manual
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600">{stat.change}</p>
                </div>
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="system" className="space-y-4">
        <TabsList>
          <TabsTrigger value="system">Sistema</TabsTrigger>
          <TabsTrigger value="backup">Backup</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="maintenance">Manutenção</TabsTrigger>
        </TabsList>

        <TabsContent value="system" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Sistema</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Versão do Sistema</span>
                    <span className="font-medium">2.4.1</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Última Atualização</span>
                    <span className="font-medium">10/01/2024</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tempo de Atividade</span>
                    <span className="font-medium">7 dias, 12h</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Ambiente</span>
                    <span className="font-medium">Produção</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance do Sistema</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>CPU</span>
                      <span>23%</span>
                    </div>
                    <Progress value={23} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Memória</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Disco</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ferramentas do Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex-col">
                  <Trash2 className="h-6 w-6 mb-2" />
                  Limpar Cache
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Database className="h-6 w-6 mb-2" />
                  Otimizar BD
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Shield className="h-6 w-6 mb-2" />
                  Verificar Segurança
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <RefreshCw className="h-6 w-6 mb-2" />
                  Reiniciar Sistema
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Histórico de Backups
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Novo Backup
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {backups.map((backup) => (
                  <div key={backup.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Database className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{backup.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {backup.type} • {backup.size} • {backup.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">{backup.status}</Badge>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">Restaurar</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Logs do Sistema
                <div className="flex gap-2">
                  <Input placeholder="Filtrar logs..." className="w-64" />
                  <Button variant="outline">Limpar Logs</Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {systemLogs.map((log, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 border border-border rounded-lg text-sm">
                    <span className="text-muted-foreground font-mono text-xs">
                      {log.timestamp}
                    </span>
                    <Badge className={getLogLevelBg(log.level)}>
                      {log.level}
                    </Badge>
                    <span className="font-medium">{log.module}</span>
                    <span className="flex-1">{log.message}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tarefas de Manutenção</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenanceTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h3 className="font-medium">{task.name}</h3>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Última execução: {task.lastRun} • Próxima: {task.nextRun}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Executar Agora</Button>
                      <Button size="sm" variant="outline">Configurar</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Utilities;
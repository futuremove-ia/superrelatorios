import { useState, useEffect } from "react";
import {
  Bot,
  Send,
  Loader2,
  FileText,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { useCurrentOrganization } from "@/hooks/useCurrentOrganization";
import { ragApi } from "@/lib/api/rag";
import type { SearchResult } from "@/application/RagService";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Array<{
    documentId: string;
    title: string;
    score: number;
  }>;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "Como está a saúde do meu negócio?",
  "Quais riscos temos em aberto?",
  "Me dá um resumo executivo",
  "Quais ações estão atrasadas?",
  "Qual a tendência das nossas vendas?",
];

const AIAnalyst = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const { organization } = useCurrentOrganization();

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [queryHistory, setQueryHistory] = useState<string[]>([]);

  useEffect(() => {
    setQueryHistory(SUGGESTED_QUESTIONS);
  }, []);

  const handleSearch = async (query: string) => {
    if (!organization?.id || !query.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const results = await ragApi.search({
        organizationId: organization.id,
        query,
        topK: 5,
      });

      const responseText = generateResponse(results);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responseText,
        sources: results.map((r) => ({
          documentId: r.documentId,
          title: r.title,
          score: r.score,
        })),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: "Erro na busca",
        description: "Não foi possível buscar informações. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const generateResponse = (results: SearchResult[]): string => {
    if (results.length === 0) {
      return "Não encontrei informações relevantes sobre isso. Tente perguntar de outra forma ou importe mais dados.";
    }

    const topResult = results[0];
    const avgScore =
      results.reduce((acc, r) => acc + r.score, 0) / results.length;

    let response = `Com base nos seus dados:\n\n`;
    response += `**${topResult.title}**\n`;
    response += `${topResult.chunkText.substring(0, 500)}...\n\n`;

    if (avgScore > 0.7) {
      response += `✅ **Alta relevância** (${(avgScore * 100).toFixed(0)}% de confiança)\n\n`;
    } else if (avgScore > 0.4) {
      response += `⚠️ **Relevância moderada** (${(avgScore * 100).toFixed(0)}% de confiança)\n\n`;
    } else {
      response += `📝 **Relevância baixa** - pode não ser exatamente o que procura\n\n`;
    }

    if (results.length > 1) {
      response += `Outras fontes encontradas: ${results
        .slice(1)
        .map((r) => r.title)
        .join(", ")}`;
    }

    return response;
  };

  return (
    <div className="bg-gradient-subtle min-h-full">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            Analista de Negócios
          </h1>
          <p className="text-muted-foreground mt-1">
            Pergunte sobre a saúde do seu negócio em linguagem natural
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-4">
            <Card className="min-h-[500px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  Conversa
                </CardTitle>
                <CardDescription>
                  Tire dúvidas sobre seus dados, métricas e negócios
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ScrollArea className="flex-1 pr-4 mb-4">
                  {messages.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Faça uma pergunta sobre seu negócio</p>
                      <p className="text-sm mt-2">
                        Ex: "Como estão nossas vendas?"
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg px-4 py-3 ${
                              message.role === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <p className="whitespace-pre-wrap">
                              {message.content}
                            </p>
                            {message.sources && message.sources.length > 0 && (
                              <div className="mt-3 pt-3 border-t border-current/20">
                                <p className="text-xs font-medium mb-2">
                                  Fontes:
                                </p>
                                <div className="space-y-1">
                                  {message.sources.map((source, i) => (
                                    <div
                                      key={i}
                                      className="flex items-center gap-2 text-xs"
                                    >
                                      <FileText className="h-3 w-3" />
                                      <span>{source.title}</span>
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        {(source.score * 100).toFixed(0)}%
                                      </Badge>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            <p className="text-xs opacity-70 mt-2">
                              {message.timestamp.toLocaleTimeString("pt-BR")}
                            </p>
                          </div>
                        </div>
                      ))}
                      {loading && (
                        <div className="flex justify-start">
                          <div className="bg-muted rounded-lg px-4 py-3 flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Pensando...</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </ScrollArea>

                <div className="flex gap-2">
                  <Input
                    placeholder="Pergunte sobre seu negócio..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch(input)}
                    disabled={loading}
                  />
                  <Button
                    onClick={() => handleSearch(input)}
                    disabled={loading || !input.trim()}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Sugestões</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {queryHistory.map((question, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start h-auto py-2"
                    onClick={() => handleSearch(question)}
                    disabled={loading}
                  >
                    <Bot className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="line-clamp-2">{question}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Como funciona</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Faça perguntas em linguagem natural</p>
                <p>• Receba respostas baseadas nos seus dados</p>
                <p>• Clique nas fontes para ver o contexto original</p>
                <p>• Dados são mantidos seguros e privados</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalyst;

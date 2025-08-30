import { Card } from "@/components/ui/card";
import { FileSpreadsheet, FileText, ClipboardPaste, Upload } from "lucide-react";

const DocumentExamples = () => {
  const documentTypes = [
    {
      icon: FileSpreadsheet,
      name: "Excel / Planilhas",
      description: "Vendas, estoque, financeiro",
      formats: ".xlsx, .csv, .xls",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: FileText,
      name: "Word / Documentos",
      description: "Relatórios, atas, análises",
      formats: ".docx, .pdf, .txt",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: ClipboardPaste,
      name: "Texto Direto",
      description: "Cole dados do seu sistema",
      formats: "Copiar e colar",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Que tipo de dados você tem?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aceita qualquer formato de dados empresariais. Nossa IA entende e analisa automaticamente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {documentTypes.map((type, index) => (
            <Card key={index} className={`p-6 text-center border-2 ${type.borderColor} ${type.bgColor} hover:shadow-lg transition-all duration-300`}>
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${type.bgColor} border-2 ${type.borderColor}`}>
                  <type.icon className={`w-8 h-8 ${type.iconColor}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {type.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {type.description}
                </p>
                <span className="text-xs text-muted-foreground font-medium">
                  {type.formats}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
            <Upload className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Drag & Drop ou clique para enviar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentExamples;
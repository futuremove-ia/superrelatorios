import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import type { CompanyBlueprint } from "@/services/blueprintService"

const INDUSTRY_SECTORS = [
  "Tecnologia",
  "Saúde",
  "Financeiro",
  "Varejo",
  "Manufatura",
  "Educação",
  "Serviços",
  "Agricultura",
  "Construção",
  "Energia",
  "Transportes",
  "Mídia",
  "Telecomunicações",
  "Alimentação",
  "Cosméticos",
  "Outros",
]

const BUSINESS_MODELS = [
  "B2B",
  "B2C",
  "B2B2C",
  "C2C",
  "Marketplace",
  "SaaS",
  "Assinatura",
  "Freemium",
  "Licenciamento",
  "Consultoria",
  "Serviços",
  "E-commerce",
  " franchise",
  "Outros",
]

const COMPANY_STAGES = [
  "Ideação",
  "Validação",
  "Pré-seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C+",
  "PMF (Product-Market Fit)",
  "Escala",
  "Maturidade",
]

const EMPLOYEE_COUNT_RANGES = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1001-5000",
  "5000+",
]

const blueprintFormSchema = z.object({
  industry_sector: z.string().min(1, "Setor é obrigatório"),
  business_model: z.string().min(1, "Modelo de negócio é obrigatório"),
  company_stage: z.string().min(1, "Estágio da empresa é obrigatório"),
  employee_count_range: z.string().min(1, "Porte é obrigatório"),
  revenue_range: z.string().optional(),
  target_market: z.string().optional(),
  value_proposition: z.string().optional(),
  key_partners: z.string().optional(),
})

type BlueprintFormValues = z.infer<typeof blueprintFormSchema>

interface BlueprintFormProps {
  initialData?: CompanyBlueprint
  onSubmit: (data: BlueprintFormValues) => void
  onCancel?: () => void
  isLoading?: boolean
  className?: string
}

export function BlueprintForm({
  initialData,
  onSubmit,
  onCancel,
  isLoading,
  className,
}: BlueprintFormProps) {
  const form = useForm<BlueprintFormValues>({
    resolver: zodResolver(blueprintFormSchema),
    defaultValues: {
      industry_sector: initialData?.industry_sector || "",
      business_model: initialData?.business_model || "",
      company_stage: initialData?.company_stage || "",
      employee_count_range: initialData?.employee_count_range || "",
      revenue_range: initialData?.revenue_range || "",
      target_market: initialData?.target_market || "",
      value_proposition: initialData?.value_proposition || "",
      key_partners: initialData?.key_partners || "",
    },
  })

  const handleSubmit = (values: BlueprintFormValues) => {
    onSubmit({
      industry_sector: values.industry_sector,
      business_model: values.business_model,
      company_stage: values.company_stage,
      employee_count_range: values.employee_count_range,
      revenue_range: values.revenue_range || null,
      target_market: values.target_market || null,
      value_proposition: values.value_proposition || null,
      key_partners: values.key_partners || null,
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn("space-y-4", className)}
      >
        <FormField
          control={form.control}
          name="industry_sector"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Setor de Atuação *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {INDUSTRY_SECTORS.map((sector) => (
                    <SelectItem key={sector} value={sector}>
                      {sector}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="business_model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Modelo de Negócio *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o modelo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {BUSINESS_MODELS.map((model) => (
                    <SelectItem key={model} value={model}>
                      {model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company_stage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estágio da Empresa *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o estágio" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {COMPANY_STAGES.map((stage) => (
                    <SelectItem key={stage} value={stage}>
                      {stage}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="employee_count_range"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Porte (Número de Funcionários) *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o porte" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {EMPLOYEE_COUNT_RANGES.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range} funcionários
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="revenue_range"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Faixa de Faturamento</FormLabel>
              <FormControl>
                <Input placeholder="Ex: R$1M - R$5M/ano" {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="target_market"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mercado Alvo</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Brasil, América Latina" {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="value_proposition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proposta de Valor</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descreva a proposta de valor da empresa..."
                  className="min-h-[80px]"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="key_partners"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parceiros Estratégicos</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Liste os principais parceiros..."
                  className="min-h-[60px]"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2 pt-4">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
          )}
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Salvando..." : initialData ? "Atualizar Blueprint" : "Criar Blueprint"}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export { blueprintFormSchema }
export type { BlueprintFormValues }

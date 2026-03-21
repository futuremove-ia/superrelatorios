import React from 'react';
import { ReportBlock } from '@/types/reports';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, TrendingUp, TrendingDown, AlertCircle, FileText, CheckCircle2, List as ListIcon } from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  BarChart, 
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { cn } from '@/lib/utils';
import { Info, AlertTriangle, CheckCircle, Lightbulb, TrendingUp as TrendUpIcon, Target, Users as UsersIcon } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

// Hero Block: Title and main context
export const HeroBlock: React.FC<{ block: ReportBlock }> = ({ block }) => (
  <div className="py-6 border-b border-border/50 mb-6 transition-all animate-in fade-in slide-in-from-top-4 duration-500">
    <h1 className="text-3xl font-bold tracking-tight text-foreground">{block.content.title}</h1>
    {block.content.body && (
      <p className="mt-2 text-muted-foreground text-lg leading-relaxed">
        {block.content.body}
      </p>
    )}
  </div>
);

// KPI Grid Block
export const KPIBlock: React.FC<{ block: ReportBlock }> = ({ block }) => {
  const data = block.content.data || [];
  const columns = block.content.settings?.columns || 3;
  
  // Handle both array and object data formats
  const items = Array.isArray(data) 
    ? data 
    : Object.entries(data).map(([label, value]) => ({ label, value }));

  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4 my-6`}>
      {items.map((item: any, index: number) => {
        const isPositive = item.trend === 'up' || (typeof item.trend === 'number' && item.trend > 0);
        const isNegative = item.trend === 'down' || (typeof item.trend === 'number' && item.trend < 0);
        
        return (
          <Card key={index} className="p-5 card-hover border-border/40 bg-muted/20 relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{item.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-foreground">{item.value}</span>
                {item.change && (
                  <span className={cn(
                    "flex items-center text-xs font-bold",
                    isPositive ? "text-emerald-500" : isNegative ? "text-rose-500" : "text-muted-foreground"
                  )}>
                    {isPositive && <TrendingUp className="h-3 w-3 mr-0.5" />}
                    {isNegative && <TrendingDown className="h-3 w-3 mr-0.5" />}
                    {item.change}
                  </span>
                )}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

// Chart Block: Interactive data visualization
export const ChartBlock: React.FC<{ block: ReportBlock }> = ({ block }) => {
  const chartData = block.content.data || [];
  const type = block.content.settings.chartType || 'area';
  const height = block.content.settings.height || 300;
  const primaryColor = "hsl(var(--primary))";

  return (
    <Card className="my-8 border-border/40 overflow-hidden">
      <div className="p-6 pb-2">
        <h3 className="text-lg font-bold text-foreground">{block.content.title}</h3>
        {block.content.description && <p className="text-sm text-muted-foreground">{block.content.description}</p>}
      </div>
      <div className="p-4" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          {type === 'bar' ? (
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
              <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `R$${value/1000}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                itemStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Bar dataKey="value" fill={primaryColor} radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={primaryColor} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={primaryColor} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
              <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                 contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
              />
              <Area type="monotone" dataKey="value" stroke={primaryColor} fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

// Action Plan Block
export const ActionPlanBlock: React.FC<{ block: ReportBlock }> = ({ block }) => {
  const items = block.content.data || [];
  
  return (
    <div className="my-8 space-y-4">
      <h3 className="text-xl font-bold flex items-center gap-2">
        <CheckCircle2 className="h-5 w-5 text-primary" />
        {block.content.title}
      </h3>
      <div className="grid grid-cols-1 gap-3">
        {items.map((item: any, index: number) => {
          const text = typeof item === 'string' ? item : item.task || item.description;
          const priority = item.priority || 'medium';
          
          return (
            <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-colors group">
              <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-all",
                priority === 'high' ? "bg-rose-100 text-rose-600" : "bg-primary/10 text-primary"
              )}>
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-foreground">{text}</p>
                {item.priority && (
                  <span className={cn(
                    "text-[10px] uppercase font-bold tracking-tighter",
                    priority === 'high' ? "text-rose-500" : "text-muted-foreground"
                  )}>
                    Prioridade: {priority}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// AI Insight Block
export const AIInsightBlock: React.FC<{ block: ReportBlock }> = ({ block }) => {
  const text = block.content.body || block.content.data?.text || block.content.data || "Aguardando processamento de inteligência artificial...";

  return (
    <Card className="my-6 border-primary/20 bg-primary/5 overflow-hidden group">
      <div className="h-1 w-full bg-gradient-to-r from-primary/50 to-primary" />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <u className="h-5 w-5 text-primary animate-pulse flex items-center justify-center">
            <Sparkles className="h-4 w-4" />
          </u>
          <h3 className="font-bold text-lg text-foreground">{block.content.title}</h3>
        </div>
        <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
          {text}
        </div>
      </div>
    </Card>
  );
};

// Donnut Chart Block
export const DonnutChartBlock: React.FC<{ block: ReportBlock }> = ({ block }) => {
  const data = block.content.data || [];
  const height = block.content.settings.height || 300;

  return (
    <Card className="my-6 border-border/40 overflow-hidden">
      <div className="p-6 pb-2">
        <h3 className="text-lg font-bold text-foreground">{block.content.title}</h3>
        {block.content.description && <p className="text-sm text-muted-foreground">{block.content.description}</p>}
      </div>
      <div className="p-4" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
            />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

// Horizontal Bar Chart Block
export const HorizontalBarChartBlock: React.FC<{ block: ReportBlock }> = ({ block }) => {
  const data = block.content.data || [];
  const height = block.content.settings.height || 300;
  const primaryColor = "hsl(var(--primary))";

  return (
    <Card className="my-6 border-border/40 overflow-hidden">
      <div className="p-6 pb-2">
        <h3 className="text-lg font-bold text-foreground">{block.content.title}</h3>
        {block.content.description && <p className="text-sm text-muted-foreground">{block.content.description}</p>}
      </div>
      <div className="p-4" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 40 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--muted))" />
            <XAxis type="number" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis dataKey="name" type="category" fontSize={12} tickLine={false} axisLine={false} width={80} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
            />
            <Bar dataKey="value" fill={primaryColor} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

// Callout Block
export const CalloutBlock: React.FC<{ block: ReportBlock }> = ({ block }) => {
  const variant = block.content.settings.variant || 'info';
  
  const icons = {
    info: <Info className="h-5 w-5 text-blue-500" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-500" />,
    success: <CheckCircle className="h-5 w-5 text-emerald-500" />,
    insight: <Lightbulb className="h-5 w-5 text-primary" />
  };

  const bgColors = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    insight: 'bg-primary/5 border-primary/20 text-foreground'
  };

  return (
    <div className={cn(
      "p-4 rounded-xl border flex gap-3 my-6 animate-in fade-in zoom-in-95 duration-300",
      bgColors[variant as keyof typeof bgColors]
    )}>
      <div className="mt-0.5">{icons[variant as keyof typeof icons]}</div>
      <div>
        <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{block.content.title}</h4>
        <p className="text-sm leading-relaxed">{block.content.body}</p>
      </div>
    </div>
  );
};

// Markdown / Text Block
export const MarkdownBlock: React.FC<{ block: ReportBlock }> = ({ block }) => (
  <div className="my-8 prose prose-slate max-w-none prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed">
    {block.content.title && <h2 className="text-2xl font-bold mb-4">{block.content.title}</h2>}
    <div className="whitespace-pre-wrap">{block.content.body}</div>
  </div>
);

// Benchmark Comparison Block
export const BenchmarkComparisonBlock: React.FC<{ block: ReportBlock }> = ({ block }) => {
  const data = block.content.data || [];
  
  return (
    <Card className="my-6 border-border/40">
      <div className="p-6">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          {block.content.title}
        </h3>
        <div className="space-y-6">
          {data.map((item: any, idx: number) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{item.label}</span>
                <span className="text-muted-foreground">{item.value} vs {item.benchmark} (Meta)</span>
              </div>
              <div className="h-3 w-full bg-muted rounded-full overflow-hidden flex">
                <div 
                  className={cn(
                    "h-full transition-all duration-1000",
                    item.percent >= 100 ? "bg-emerald-500" : "bg-primary"
                  )} 
                  style={{ width: `${Math.min(item.percent, 100)}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

// Fallback Block for unknown types
export const FallbackBlock: React.FC<{ block: ReportBlock }> = ({ block }) => (
  <div className="p-8 border-2 border-dashed border-muted rounded-xl text-center my-4">
    <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
    <p className="text-muted-foreground">Tipo de bloco "{block.type}" em desenvolvimento.</p>
  </div>
);

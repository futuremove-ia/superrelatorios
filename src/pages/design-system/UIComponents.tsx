import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Skeleton } from '@/components/ui/skeleton';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calendar } from '@/components/ui/calendar';
import { Copy, Check, AlertCircle, Info, CheckCircle2, Settings, User, ChevronDown, ChevronRight, Plus, Minus, Calendar as CalendarIcon, CreditCard, Mail, Bell, MoreHorizontal, FileText, Trash, Edit, Star, Heart, ThumbsUp, ThumbsDown } from 'lucide-react';

function ComponentCard({ title, description, children, code }: { 
  title: string; 
  description?: string; 
  children: React.ReactNode;
  code?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {code && (
            <Button variant="ghost" size="sm" onClick={copyCode} className="h-8 w-8 p-0">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-muted/30">
            {children}
          </div>
          {code && (
            <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
              <code>{code}</code>
            </pre>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function UIComponentsSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">UI Components</h1>
        <p className="text-muted-foreground mt-2">
          Biblioteca completa de componentes reutilizáveis baseados em shadcn/ui
        </p>
      </div>

      <Tabs defaultValue="buttons" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="inputs">Inputs</TabsTrigger>
          <TabsTrigger value="display">Display</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="lists">Lists</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="overlays">Overlays</TabsTrigger>
        </TabsList>

        {/* Buttons Tab */}
        <TabsContent value="buttons" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ComponentCard 
              title="Button Variants" 
              description="Estilos visuais diferentes para diferentes contextos"
              code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}
            >
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Button Sizes" 
              description="Tamanhos para diferentes contextos de uso"
              code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Plus /></Button>`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Button States" 
              description="Estados interativos dos botões"
              code={`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`}
            >
              <div className="flex flex-wrap gap-2">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button variant="outline" disabled>Disabled Outline</Button>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Icon Buttons" 
              description="Botões com ícones"
              code={`<Button size="icon" variant="outline"><Settings /></Button>
<Button><User className="mr-2 h-4 w-4" /> Profile</Button>`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Button size="icon" variant="outline">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Toggle" 
              description="Botão de estado binário"
              code={`<Toggle aria-label="Toggle italic"><Bold className="h-4 w-4" /></Toggle>`}
            >
              <div className="flex flex-wrap gap-2">
                <Toggle aria-label="Toggle star">
                  <Star className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle heart" pressed>
                  <Heart className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline" aria-label="Toggle thumbs up">
                  <ThumbsUp className="h-4 w-4" />
                </Toggle>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Toggle Group" 
              description="Grupo de botões de seleção"
              code={`<ToggleGroup type="single">
  <ToggleGroupItem value="a">Option A</ToggleGroupItem>
  <ToggleGroupItem value="b">Option B</ToggleGroupItem>
</ToggleGroup>`}
            >
              <ToggleGroup type="single" defaultValue="center" className="inline-flex">
                <ToggleGroupItem value="left" aria-label="Align left">
                  <span className="text-sm">Left</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <span className="text-sm">Center</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <span className="text-sm">Right</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </ComponentCard>
          </div>
        </TabsContent>

        {/* Inputs Tab */}
        <TabsContent value="inputs" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ComponentCard 
              title="Input" 
              description="Campo de entrada de texto"
              code={`<Input placeholder="Enter your email" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled" />`}
            >
              <div className="space-y-3">
                <Input placeholder="Enter your email" />
                <Input type="password" placeholder="Password" />
                <Input disabled placeholder="Disabled input" />
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Email with icon" className="pl-9" />
                </div>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Textarea" 
              description="Área de texto multilinha"
              code={`<Textarea placeholder="Enter your message..." />`}
            >
              <div className="space-y-3">
                <Textarea placeholder="Enter your message..." />
                <Textarea placeholder="Disabled textarea" disabled />
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Select" 
              description="Menu dropdown de seleção"
              code={`<Select>
  <SelectTrigger><SelectValue placeholder="Select option" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>`}
            >
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                  <SelectItem value="3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </ComponentCard>

            <ComponentCard 
              title="Switch & Checkbox" 
              description="Controles de seleção booleana"
              code={`<Switch id="airplane" />
<Checkbox id="terms" />`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane" />
                  <Label htmlFor="airplane">Airplane Mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" disabled />
                  <Label htmlFor="newsletter" className="text-muted-foreground">Disabled checkbox</Label>
                </div>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Radio Group" 
              description="Grupo de seleção única"
              code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
</RadioGroup>`}
            >
              <RadioGroup defaultValue="comfortable" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default spacing</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable spacing</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact spacing</Label>
                </div>
              </RadioGroup>
            </ComponentCard>

            <ComponentCard 
              title="Slider" 
              description="Controle deslizante para valores numéricos"
              code={`<Slider defaultValue={[50]} max={100} step={1} />`}
            >
              <div className="space-y-4 pt-2">
                <Slider defaultValue={[50]} max={100} step={1} />
                <Slider defaultValue={[25, 75]} max={100} step={1} />
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Calendar" 
              description="Seletor de data"
              code={`<Calendar mode="single" selected={date} onSelect={setDate} />`}
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </ComponentCard>
          </div>
        </TabsContent>

        {/* Display Tab */}
        <TabsContent value="display" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ComponentCard 
              title="Avatar" 
              description="Avatar de usuário com imagem ou fallback"
              code={`<Avatar>
  <AvatarImage src="https://..." alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Badge" 
              description="Etiquetas de status e categorização"
              code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
            >
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Separator" 
              description="Divisor visual entre conteúdos"
              code={`<Separator />
<Separator orientation="vertical" />`}
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Horizontal</h4>
                  <Separator className="my-2" />
                  <p className="text-sm text-muted-foreground">Content below</p>
                </div>
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>Left</div>
                  <Separator orientation="vertical" />
                  <div>Right</div>
                </div>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Skeleton" 
              description="Placeholder de carregamento"
              code={`<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-12 w-12 rounded-full" />`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <Skeleton className="h-[125px] w-full rounded-xl" />
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Progress" 
              description="Indicador de progresso visual"
              code={`<Progress value={60} />`}
            >
              <div className="space-y-4">
                <Progress value={25} />
                <Progress value={50} />
                <Progress value={75} />
                <Progress value={100} />
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Accordion" 
              description="Conteúdo expansível"
              code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes...</AccordionContent>
  </AccordionItem>
</Accordion>`}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>Yes. It comes with default styles that matches the other components.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </ComponentCard>
          </div>
        </TabsContent>

        {/* Cards Tab */}
        <TabsContent value="cards" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ComponentCard 
              title="Card" 
              description="Container de conteúdo"
              code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>`}
            >
              <Card className="max-w-sm">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Card content goes here.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost">Cancel</Button>
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            </ComponentCard>

            <ComponentCard 
              title="Card Variants" 
              description="Diferentes estilos de cards"
            >
              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <p className="font-medium">Border accent</p>
                    <p className="text-sm text-muted-foreground">Left border highlight</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <p className="font-medium">Hover effect</p>
                    <p className="text-sm text-muted-foreground">Interactive card</p>
                  </CardContent>
                </Card>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Card with Image" 
              description="Card com imagem e conteúdo"
            >
              <Card className="max-w-sm overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-primary to-primary/50" />
                <CardHeader className="pb-2">
                  <CardTitle>Beautiful Landscape</CardTitle>
                  <CardDescription>Nature photography</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">A stunning view of nature captured in perfect lighting.</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="mr-1 h-4 w-4" /> 124
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </ComponentCard>
          </div>
        </TabsContent>

        {/* Lists Tab */}
        <TabsContent value="lists" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ComponentCard 
              title="Table" 
              description="Tabela de dados"
              code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700">Paid</Badge>
                    </TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700">Pending</Badge>
                    </TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-50 text-red-700">Overdue</Badge>
                    </TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ComponentCard>

            <ComponentCard 
              title="Scroll Area" 
              description="Área com scroll customizado"
              code={`<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Content here...
</ScrollArea>`}
            >
              <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                <div className="space-y-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">User {i + 1}</p>
                        <p className="text-xs text-muted-foreground">user{i + 1}@example.com</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </ComponentCard>

            <ComponentCard 
              title="Collapsible" 
              description="Conteúdo expansível"
              code={`<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>Yes...</CollapsibleContent>
</Collapsible>`}
            >
              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
                </CollapsibleContent>
              </Collapsible>
            </ComponentCard>

            <ComponentCard 
              title="Simple List" 
              description="Lista simples de itens"
            >
              <div className="space-y-2">
                {['Dashboard', 'Settings', 'Profile', 'Messages', 'Help'].map((item, i) => (
                  <div key={item} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </ComponentCard>
          </div>
        </TabsContent>

        {/* Navigation Tab */}
        <TabsContent value="navigation" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ComponentCard 
              title="Breadcrumb" 
              description="Navegação hierárquica"
              code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
            >
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Electronics</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </ComponentCard>

            <ComponentCard 
              title="Pagination" 
              description="Navegação de páginas"
              code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
            >
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </ComponentCard>

            <ComponentCard 
              title="Tabs" 
              description="Navegação por abas"
              code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
</Tabs>`}
            >
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <div className="mt-4 p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground">Tab content area</p>
                </div>
              </Tabs>
            </ComponentCard>

            <ComponentCard 
              title="Tooltip" 
              description="Dica de contexto"
              code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>Add to library</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
            >
              <TooltipProvider>
                <div className="flex gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to library</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete item</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit item</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </ComponentCard>

            <ComponentCard 
              title="Dropdown Menu" 
              description="Menu de ações contextuais"
              code={`<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Open Menu <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ComponentCard>
          </div>
        </TabsContent>

        {/* Feedback Tab */}
        <TabsContent value="feedback" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ComponentCard 
              title="Alert" 
              description="Mensagens de feedback ao usuário"
              code={`<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>This is an info message.</AlertDescription>
</Alert>`}
            >
              <div className="space-y-3">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>This is an informational message.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>Something went wrong! Please try again.</AlertDescription>
                </Alert>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Toast" 
              description="Notificações temporárias"
              code={`toast.success('Event has been created');
toast.error('Failed to save changes');`}
            >
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => toast.success('Event has been created')}>Success Toast</Button>
                <Button variant="destructive" onClick={() => toast.error('Failed to save changes')}>Error Toast</Button>
                <Button variant="outline" onClick={() => toast.info('New update available')}>Info Toast</Button>
              </div>
              <Toaster />
            </ComponentCard>

            <ComponentCard 
              title="Hover Card" 
              description="Card de pré-visualização"
              code={`<HoverCard>
  <HoverCardTrigger>@nextjs</HoverCardTrigger>
  <HoverCardContent>The React Framework...</HoverCardContent>
</HoverCard>`}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">@nextjs</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </ComponentCard>

            <ComponentCard 
              title="Alert Dialog" 
              description="Diálogo de confirmação"
              code={`<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Delete Account</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your
                      account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </ComponentCard>
          </div>
        </TabsContent>

        {/* Overlays Tab */}
        <TabsContent value="overlays" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ComponentCard 
              title="Dialog" 
              description="Modal para conteúdo importante"
              code={`<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">Name</Label>
                      <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">Username</Label>
                      <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </ComponentCard>

            <ComponentCard 
              title="Sheet" 
              description="Painel lateral deslizante"
              code={`<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
            >
              <div className="flex flex-wrap gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Open Left</Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Left Panel</SheetTitle>
                      <SheetDescription>
                        This sheet slides in from the left.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Open Right</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Right Panel</SheetTitle>
                      <SheetDescription>
                        This sheet slides in from the right.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Drawer" 
              description="Gaveta inferior (mobile)"
              code={`<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>`}
            >
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="text-left">
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>
                      Set your daily activity goal.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-full">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <div className="flex-1 text-center">
                        <div className="text-7xl font-bold tracking-tighter">350</div>
                        <div className="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
                      </div>
                      <Button variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-full">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button className="w-full">Set Goal</Button>
                  </div>
                </DrawerContent>
              </Drawer>
            </ComponentCard>

            <ComponentCard 
              title="Popover" 
              description="Conteúdo flutuante posicionado"
              code={`<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>`}
            >
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Width</Label>
                        <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxWidth">Max. width</Label>
                        <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </ComponentCard>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default UIComponentsSection;

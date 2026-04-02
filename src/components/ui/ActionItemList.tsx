import { useState, useMemo } from "react"
import { ActionItemCard } from "./ActionItemCard"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Plus, Filter, ArrowUpDown, Search } from "lucide-react"
import type { ActionItem } from "@/services/actionItemService"

export type SortField = "deadline" | "priority" | "created_at" | "title"
export type SortOrder = "asc" | "desc"
export type StatusFilter = "all" | ActionItem["status"]
export type PriorityFilter = "all" | ActionItem["priority"]

interface ActionItemListProps {
  actionItems: ActionItem[]
  onStatusChange?: (id: string, status: ActionItem["status"]) => void
  onClick?: (actionItem: ActionItem) => void
  onCreate?: () => void
  isLoading?: boolean
  className?: string
}

export function ActionItemList({
  actionItems,
  onStatusChange,
  onClick,
  onCreate,
  isLoading,
  className,
}: ActionItemListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all")
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("all")
  const [sortField, setSortField] = useState<SortField>("deadline")
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")

  const filteredAndSortedItems = useMemo(() => {
    let result = [...actionItems]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query)
      )
    }

    if (statusFilter !== "all") {
      result = result.filter((item) => item.status === statusFilter)
    }

    if (priorityFilter !== "all") {
      result = result.filter((item) => item.priority === priorityFilter)
    }

    const priorityOrder = { urgent: 4, high: 3, medium: 2, low: 1 }

    result.sort((a, b) => {
      let comparison = 0

      switch (sortField) {
        case "deadline":
          if (!a.deadline && !b.deadline) comparison = 0
          else if (!a.deadline) comparison = 1
          else if (!b.deadline) comparison = -1
          else comparison = new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
          break
        case "priority":
          comparison = priorityOrder[b.priority] - priorityOrder[a.priority]
          break
        case "created_at":
          comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          break
        case "title":
          comparison = a.title.localeCompare(b.title)
          break
      }

      return sortOrder === "asc" ? comparison : -comparison
    })

    return result
  }, [actionItems, searchQuery, statusFilter, priorityFilter, sortField, sortOrder])

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortOrder("asc")
    }
  }

  const stats = useMemo(() => ({
    total: actionItems.length,
    pending: actionItems.filter((i) => i.status === "pending").length,
    inProgress: actionItems.filter((i) => i.status === "in_progress").length,
    completed: actionItems.filter((i) => i.status === "completed").length,
    overdue: actionItems.filter(
      (i) =>
        i.deadline &&
        new Date(i.deadline) < new Date() &&
        i.status !== "completed" &&
        i.status !== "cancelled"
    ).length,
  }), [actionItems])

  return (
    <div className={className}>
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar tarefas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as StatusFilter)}>
            <SelectTrigger className="w-[140px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="in_progress">Em progresso</SelectItem>
              <SelectItem value="completed">Concluída</SelectItem>
              <SelectItem value="cancelled">Cancelada</SelectItem>
            </SelectContent>
          </Select>

          <Select value={priorityFilter} onValueChange={(v) => setPriorityFilter(v as PriorityFilter)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Prioridade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="urgent">Urgente</SelectItem>
              <SelectItem value="high">Alta</SelectItem>
              <SelectItem value="medium">Média</SelectItem>
              <SelectItem value="low">Baixa</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon" onClick={() => toggleSort("deadline")}>
            <ArrowUpDown className="h-4 w-4" />
          </Button>

          {onCreate && (
            <Button onClick={onCreate}>
              <Plus className="h-4 w-4 mr-2" />
              Nova Tarefa
            </Button>
          )}
        </div>
      </div>

      <div className="flex gap-4 text-sm text-muted-foreground mb-4 pb-2 border-b">
        <span>Total: {stats.total}</span>
        <span className="text-orange-600">Pendente: {stats.pending}</span>
        <span className="text-blue-600">Em progresso: {stats.inProgress}</span>
        <span className="text-green-600">Concluídas: {stats.completed}</span>
        {stats.overdue > 0 && (
          <span className="text-red-600 font-medium">Atrasadas: {stats.overdue}</span>
        )}
      </div>

      {isLoading ? (
        <div className="text-center py-8 text-muted-foreground">Carregando...</div>
      ) : filteredAndSortedItems.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          Nenhuma tarefa encontrada
        </div>
      ) : (
        <div className="grid gap-3">
          {filteredAndSortedItems.map((item) => (
            <ActionItemCard
              key={item.id}
              actionItem={item}
              onStatusChange={onStatusChange}
              onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}
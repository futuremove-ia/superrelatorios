import { cn } from "@/lib/utils"
import { Badge, badgeVariants } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react"
import type { ActionItem } from "@/services/actionItemService"

interface ActionItemCardProps {
  actionItem: ActionItem
  onStatusChange?: (id: string, status: ActionItem["status"]) => void
  onClick?: (actionItem: ActionItem) => void
  onDelete?: (id: string) => void
  className?: string
}

const statusConfig = {
  pending: {
    label: "Pendente",
    variant: "secondary" as const,
    icon: Clock,
  },
  in_progress: {
    label: "Em progresso",
    variant: "default" as const,
    icon: Clock,
  },
  completed: {
    label: "Concluída",
    variant: "outline" as const,
    icon: CheckCircle,
  },
  cancelled: {
    label: "Cancelada",
    variant: "destructive" as const,
    icon: AlertCircle,
  },
}

const priorityLabels = {
  low: "Baixa",
  medium: "Média",
  high: "Alta",
  urgent: "Urgente",
}

export function ActionItemCard({
  actionItem,
  onStatusChange,
  onClick,
  onDelete,
  className,
}: ActionItemCardProps) {
  const status = statusConfig[actionItem.status]
  const StatusIcon = status.icon

  const isOverdue =
    actionItem.deadline &&
    new Date(actionItem.deadline) < new Date() &&
    actionItem.status !== "completed" &&
    actionItem.status !== "cancelled"

  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline)
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  }

  const handleStatusToggle = () => {
    if (!onStatusChange) return
    const nextStatus: ActionItem["status"] =
      actionItem.status === "completed"
        ? "pending"
        : actionItem.status === "pending"
          ? "in_progress"
          : "completed"
    onStatusChange(actionItem.id, nextStatus)
  }

  return (
    <Card
      className={cn(
        "hover:shadow-md transition-shadow cursor-pointer",
        isOverdue && "border-red-300 bg-red-50/50",
        className
      )}
      onClick={() => onClick?.(actionItem)}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm line-clamp-2">
              {actionItem.title}
            </h4>
          </div>
          <Badge className={cn(
            actionItem.priority === "urgent" && "bg-red-100 text-red-800",
            actionItem.priority === "high" && "bg-orange-100 text-orange-800",
            actionItem.priority === "medium" && "bg-yellow-100 text-yellow-800",
            actionItem.priority === "low" && "bg-blue-100 text-blue-800"
          )}>
            {priorityLabels[actionItem.priority]}
          </Badge>
        </div>
      </CardHeader>

      {actionItem.description && (
        <CardContent className="pb-2">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {actionItem.description}
          </p>
        </CardContent>
      )}

      <CardFooter className="pt-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {actionItem.deadline && (
            <div
              className={cn(
                "flex items-center gap-1",
                isOverdue && "text-red-600 font-medium"
              )}
            >
              <Calendar className="h-3 w-3" />
              <span>{formatDeadline(actionItem.deadline)}</span>
            </div>
          )}
          <Badge variant="outline" className="text-xs">
            <StatusIcon className="h-3 w-3 mr-1" />
            {status.label}
          </Badge>
        </div>

        {onStatusChange && (
          <Button
            size="sm"
            variant={actionItem.status === "completed" ? "outline" : "default"}
            onClick={(e) => {
              e.stopPropagation()
              handleStatusToggle()
            }}
            className="h-7"
          >
            {actionItem.status === "completed" ? "Reabrir" : "Concluir"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
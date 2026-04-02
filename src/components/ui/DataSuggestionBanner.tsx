import { useRelevantKPIs } from "@/hooks/useRelevantKPIs";

interface DataSuggestionBannerProps {
  organizationId: string;
  sector?: string;
  companySize?: string;
}

export function DataSuggestionBanner({
  organizationId,
  sector,
  companySize,
}: DataSuggestionBannerProps) {
  const { kpis, isLoading } = useRelevantKPIs(
    organizationId,
    sector,
    companySize,
  );

  if (isLoading) return null;

  const suggestions = kpis?.filter((k) => k.next_action && k.priority <= 2);
  if (!suggestions?.length) return null;

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
      <div className="flex items-start gap-3">
        <span className="text-xl">💡</span>
        <div>
          <p className="font-medium text-blue-900 dark:text-blue-100">
            Sugestão
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            {suggestions[0].next_action}
          </p>
        </div>
      </div>
    </div>
  );
}

import { COMMON_FIELDS, SECTOR_FIELD_MAPPINGS, DataField } from "./dataFields";
import { Sector, Niche } from "./types";

export interface MappedData {
  mapped: Record<string, number | number[]>;
  unmapped: Record<string, number | number[]>;
  aliasesResolved: Record<string, string>;
  confidence: number;
  warnings: string[];
}

const normalizeKey = (key: string): string => {
  return key
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "_")
    .trim();
};

const findFieldByAlias = (
  normalizedKey: string,
  fields: DataField[],
): DataField | undefined => {
  for (const field of fields) {
    if (normalizeKey(field.name) === normalizedKey) {
      return field;
    }
    for (const alias of field.aliases) {
      if (normalizeKey(alias) === normalizedKey) {
        return field;
      }
    }
  }
  return undefined;
};

export const mapUserDataToKPIFields = (
  rawData: Record<string, number | number[]>,
  sector?: Sector,
): MappedData => {
  const allFields = [
    ...COMMON_FIELDS,
    ...(sector ? SECTOR_FIELD_MAPPINGS[sector] : []),
  ];
  const mapped: Record<string, number | number[]> = {};
  const unmapped: Record<string, number | number[]> = {};
  const aliasesResolved: Record<string, string> = {};
  const warnings: string[] = [];

  let resolvedCount = 0;
  const totalKeys = Object.keys(rawData).length;

  for (const [key, value] of Object.entries(rawData)) {
    if (value === null || value === undefined) {
      continue;
    }

    const normalizedKey = normalizeKey(key);
    const foundField = findFieldByAlias(normalizedKey, allFields);

    if (foundField) {
      const canonicalName = foundField.name;
      if (mapped[canonicalName] !== undefined) {
        warnings.push(
          `Conflito: múltiplas fontes para "${canonicalName}". Usando primeiro valor.`,
        );
        continue;
      }
      mapped[canonicalName] = value;
      aliasesResolved[canonicalName] = key;
      resolvedCount++;
    } else {
      unmapped[key] = value;
    }
  }

  const confidence = totalKeys > 0 ? resolvedCount / totalKeys : 0;

  if (confidence < 0.5 && totalKeys > 0) {
    warnings.push(
      `Apenas ${resolvedCount} de ${totalKeys} campos foram mapeados para o setor ${sector || "genérico"}`,
    );
  }

  return {
    mapped,
    unmapped,
    aliasesResolved,
    confidence,
    warnings,
  };
};

export const mapDataForKPI = (
  mappedData: MappedData,
  requiredFields: string[],
): Record<string, number | number[]> => {
  const result: Record<string, number | number[]> = {};
  const missing: string[] = [];

  for (const field of requiredFields) {
    if (mappedData.mapped[field] !== undefined) {
      result[field] = mappedData.mapped[field];
    } else {
      missing.push(field);
    }
  }

  return result;
};

export const getAvailableKPIs = (
  mappedData: MappedData,
  kpiFields: string[],
): string[] => {
  return kpiFields.filter((field) => mappedData.mapped[field] !== undefined);
};

export const enrichDataWithDefaults = (
  mappedData: MappedData,
  defaults: Record<string, number>,
): MappedData => {
  const enriched = { ...mappedData };

  for (const [field, defaultValue] of Object.entries(defaults)) {
    if (enriched.mapped[field] === undefined) {
      enriched.mapped[field] = defaultValue;
      enriched.warnings.push(
        `Usando valor padrão para "${field}": ${defaultValue}`,
      );
    }
  }

  return enriched;
};

export const validateMappedData = (
  mappedData: MappedData,
  requiredFields: string[],
): { isValid: boolean; missingFields: string[]; warnings: string[] } => {
  const missingFields: string[] = [];

  for (const field of requiredFields) {
    if (mappedData.mapped[field] === undefined) {
      missingFields.push(field);
    }
  }

  return {
    isValid: missingFields.length === 0,
    missingFields,
    warnings: mappedData.warnings,
  };
};

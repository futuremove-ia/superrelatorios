---
title: Debugging Guide
version: 1.0.0
updated: 2026-04-04
status: active
---

# 🐛 Debugging Guide - SuperRelatórios

## Quick Reference

| Issue       | Quick Fix                                 |
| ----------- | ----------------------------------------- |
| Build fails | `npm run build` - check TypeScript errors |
| Tests fail  | `npm test` - verify test setup            |
| Lint errors | `npx eslint src/` - fix warnings          |
| Type errors | Check `tsconfig.json` paths configuration |

---

## 🔧 Common Issues & Solutions

### 1. TypeScript Path Resolution

**Symptom:** `Cannot find module '@/types/financial-parser'`

**Solution:**

```bash
# Verify tsconfig.json has correct paths
cat tsconfig.json | Select-String "paths"

# Check file exists
ls src/types/financial-parser.ts
```

**Check:** Ensure `@/*` points to `./src/*`

---

### 2. Test Failures

**Symptom:** Tests failing with import errors

**Solution:**

```bash
# Run specific test
npm test -- --testPathPattern=universalParserService

# Run all service tests
npm test -- --testPathPattern=src/services
```

---

### 3. ESLint Errors

**Symptom:** Pre-commit hook fails with lint errors

**Common fixes:**

```bash
# Fix auto-fixable issues
npx eslint src/ --fix

# Check specific file
npx eslint src/services/universalParserService.ts
```

**Common issues:**

- Unused variables (`@typescript-eslint/no-unused-vars`)
- Missing dependencies in hooks (`react-hooks/exhaustive-deps`)
- Unnecessary escape in regex (`no-useless-escape`)

---

### 4. Build Warnings

**Symptom:** Large chunk warning

**Explanation:** Bundles >600KB - expected for this project (PDF, charts libraries)

**Mitigation:**

- Code splitting via dynamic imports
- Vendor chunk separation (already configured)

---

## 📁 Key Files

| File                                     | Purpose                |
| ---------------------------------------- | ---------------------- |
| `src/services/universalParserService.ts` | Main data parser       |
| `src/domain/shared/semanticTaxonomy.ts`  | Domain/KPI definitions |
| `src/lib/memory/sessionMemory.ts`        | Session memory         |
| `src/hooks/memory/useProjectMemory.ts`   | Memory hooks           |

---

## 🧪 Testing Commands

```bash
# All tests
npm test

# Watch mode
npm test -- --watch

# Coverage
npm test -- --coverage

# Specific service tests
npm test -- --testPathPattern=columnMappingEngine
```

---

## 📞 When to Escalate

- Database migration issues → Check Supabase dashboard
- Auth failures → Verify Supabase keys in `.env`
- Vercel deploy failures → Check build logs in Vercel dashboard

---

**Last Updated:** 2026-04-04  
**Status:** Active

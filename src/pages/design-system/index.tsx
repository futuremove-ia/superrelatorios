import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DesignSystemLayout } from '../../components/design-system/DesignSystemLayout';
import Overview from './Overview';
import Principles from './Principles';
import Colors from './Colors';
import Typography from './Typography';
import UIComponents from './UIComponents';
import BestPractices from './BestPractices';
import DomainCards from './DomainCards';

export function DesignSystem() {
  return (
    <Routes>
      <Route element={<DesignSystemLayout />}>
        <Route index element={<Overview />} />
        <Route path="principles" element={<Principles />} />
        <Route path="identity/logo" element={<Navigate to="/design-system/identity" replace />} />
        <Route path="identity/colors" element={<Colors />} />
        <Route path="identity/typography" element={<Typography />} />
        <Route path="identity/*" element={<Colors />} />
        <Route path="components/ui" element={<UIComponents />} />
        <Route path="components/cards" element={<DomainCards />} />
        <Route path="components/layout" element={<Navigate to="/design-system/guidelines/hierarchy" replace />} />
        <Route path="components/*" element={<UIComponents />} />
        <Route path="guidelines/hierarchy" element={<Principles />} />
        <Route path="guidelines/colors" element={<Colors />} />
        <Route path="guidelines/responsive" element={<Principles />} />
        <Route path="guidelines/a11y" element={<BestPractices />} />
        <Route path="guidelines/*" element={<Principles />} />
        <Route path="best-practices" element={<BestPractices />} />
        <Route path="*" element={<Overview />} />
      </Route>
    </Routes>
  );
}

export default DesignSystem;

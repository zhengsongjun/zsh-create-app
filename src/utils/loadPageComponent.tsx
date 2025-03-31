import React, { Suspense, type ReactNode } from 'react';

const modules = import.meta.glob('/src/page/**/index.tsx');

export const loadPageComponent = (components: string | React.FC): ReactNode => {
  if (typeof components === 'function') {
    return React.createElement(components);
  }

  const filePath = `/src/page/${components}/index.tsx`;
  const importer = modules[filePath];

  if (!importer) {
    return <div>页面 "{components}" 不存在</div>;
  }

  const LazyComp = React.lazy(() =>
    importer().then((mod) => ({ default: (mod as any).default }))
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComp />
    </Suspense>
  );
};

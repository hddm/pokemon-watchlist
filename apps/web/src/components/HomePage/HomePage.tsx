import { Button } from 'ui';
import { Page } from '@/components/Page';
import { ReactElement, useMemo, useState } from 'react';

export function HomePage(): ReactElement {

  return (
    <Page title="Home">
      <div
        className="tw-flex tw-gap-4 tw-items-center tw-mb-12"
        data-testid="dashboard-message-filter"
      ></div>
    </Page>
  )
}
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/svelte'

import Page from './+page.svelte';

test('renders without crashing', () => {
  render(Page)
  expect(screen.getByText('flash.comma.ai')).toBeInTheDocument()
})
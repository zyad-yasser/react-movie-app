import { FilterPlaceholder } from "../components/filter-placeholder/filter-placeholder.component";
import { Filter } from "../types/filters";

export const filters: Filter[] = [
  {
    name: 'Sort',
    component: FilterPlaceholder
  },
  {
    name: 'Filters',
    component: FilterPlaceholder
  },
  {
    name: 'Where To Watch',
    component: FilterPlaceholder
  }
]
import { filters } from '../../statics/filters';
import { FilterCard } from '../filter-card/filter-card.component';
import './side-filters.component.sass';

export const SideFilters = () => (
  <>
    {filters.map(({ name, component }, key) => (
      <FilterCard key={key} name={name}>{component()}</FilterCard>
    ))}
    <button disabled className="search-btn">
      Search
    </button>
  </>
);

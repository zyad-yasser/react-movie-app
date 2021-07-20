import './circle-rating.component.sass';

interface Props {
  rating: number;
}

export const CircleRating = ({ rating }: Props) => (
  <div className="rating-circle"></div>
);

import { useEffect, useRef } from 'react';
import './circle-rating.component.sass';

interface Props {
  rating: number;
}

export const CircleRating = ({ rating }: Props) => {

  const ratingColor = () => {
    return rating >= 7
      ? '96, 209, 123'
      : '210, 213, 67';
  };

  const configCircleRating = () => {
    const { current: element } = wrapperEl;
    if (element) {
      const { clientWidth } = element;
      element.style.setProperty('--size', `${clientWidth}px`);
      element.style.setProperty('--percentage', `${rating * 10}`);
      element.style.setProperty('--color', ratingColor());
    }    
  };
  const wrapperEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    configCircleRating();
  }, [rating]);
  return (
    <div className="rating-circle progress" ref={wrapperEl}>
      <div className="label d-flex align-items-center justify-content-center position-absolute w-100 h-100">
        <div className="d-flex align-items-center">
          <div>{rating * 10}</div>
          <div className="percentage">%</div>
        </div>
      </div>
      <div className="dimmed-pie" />
      <div className={`pie ${(rating * 10) < 50 ? 'lessThan50' : 'moreThan50'}`}>
        <div className="left-side half-circle"></div>
        <div className="right-side half-circle"></div>
      </div>
    </div>
  );
};

import React from 'react';
import Title from '../../components/Title';
import { useProfileContext } from '../../ProfileContext';

function Testimonial(): JSX.Element {
  const profile = useProfileContext();
  const reviews = profile.reviews.map((review, idx) => ({
    id: `review-id-${idx}`,
    ...review,
  }));

  const defaultReview = reviews.length > 0 ? reviews[0] : null;
  const [activeReview, setActiveReview] = React.useState(defaultReview);

  if (!activeReview) {
    return <></>;
  }

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
      <Title text="Testimonials" />

      <div className="text-center">
        <div className="h-48 flex items-center">
          <h1 className="italic font-semibold text-5xl text-indigo-500 mb-12 mx-auto w-full lg:w-3/5">
            &quot;
            {activeReview.quote}
            &quot;
          </h1>
        </div>
        <h2 className="font-bold text-xl">
          {activeReview.reviewer}
        </h2>
        <h3 className="text-lg">
          {activeReview.jobTitle}
          {' '}
          at
          {' '}
          {activeReview.companyName}
        </h3>
      </div>

      <div className="flex flex-row justify-center space-x-2 pt-4">
        {reviews.slice(0, 3).map((review) => {
          const isActive = review.id === activeReview.id;
          const backgroundColor = isActive ? 'bg-indigo-500' : 'bg-indigo-200';

          return (
            <span
              className={`${backgroundColor} rounded-full h-4 w-4 hover:bg-indigo-500`}
              onClick={() => setActiveReview(review)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;

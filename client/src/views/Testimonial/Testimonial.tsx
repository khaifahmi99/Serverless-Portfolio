import React from 'react';
import Title from '../../components/Title';

function Testimonial(): JSX.Element {
  // TODO: fetch from JSON
  const REVIEWS = [
    {
      id: '1',
      quote: 'Referree Quote a very very long one, how does the UI deals with this. Lets see it in action',
      author: {
        name: 'Gary Hendriksen',
        title: 'Sr. Manager',
        company: 'Gatsby',
      },
    },
    {
      id: '2',
      quote: 'A very talented person with great passion!',
      author: {
        name: 'Atlas Monagee',
        title: 'Software Engineer',
        company: 'Luca Studio',
      },
    },
  ];

  // TODO: check if we can access index 0
  const [activeReview, setActiveReview] = React.useState(REVIEWS[0]);

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
          {activeReview.author.name}
        </h2>
        <h3 className="text-lg">
          {activeReview.author.title}
          {' '}
          at
          {activeReview.author.company}
        </h3>
      </div>

      <div className="flex flex-row justify-center space-x-2 pt-4">
        {REVIEWS.slice(0, 3).map((review) => {
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

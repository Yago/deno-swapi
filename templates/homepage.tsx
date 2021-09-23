import React from 'https://esm.sh/react';

import Layout from '../components/Layout.tsx';
import { Starship } from '../types.ts';

type Props = {
  starships: Starship[];
};

const Homepage = ({ starships }: Props): JSX.Element => (
  <Layout>
    <h1 className="text-4xl font-bold">Starships</h1>

    <ul role="list" className="divide-y divide-gray-200 mt-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      {starships.map(starship => (
        <li
          key={`starship-${starship.name}`}
          className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
          <div className="flex justify-between space-x-3">
            <div className="min-w-0 flex-1">
              <a href={`/starships/${starship.name}`} className="block focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm font-medium text-gray-900 truncate">{starship.name}</p>
                <p className="text-sm text-gray-500 truncate">Class: {starship.starship_class}</p>
              </a>
            </div>
            <span className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">{starship.crew}p</span>
          </div>
        </li>
      ))}
    </ul>
  </Layout>
);


Homepage.getInitialProps = async (): Promise<Props> => {
  const starships = await fetch('https://yago.npkn.net/swapi')
    .then(res => res.json());

  return { starships };
};

export default Homepage;


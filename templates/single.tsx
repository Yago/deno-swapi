import React from 'https://esm.sh/react';

import Layout from '../components/Layout.tsx';
import { Starship } from '../types.ts';

type Props = {
  name: string;
  starship: Starship;
};

const Single = ({ starship }: Props): JSX.Element => (
  <Layout>
    <h1 className="text-4xl font-bold">{starship.name}</h1>

    <div className="flex flex-col mt-4">
      <div className="-my-2 overflow-hidden sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(starship).map(([key, value]) => (
                  <tr key={`spec-${key}`} >
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-500  text-gray-900">
                      {key.replace(/\_/g, ' ')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {JSON.stringify(value).replace(/"/g, '')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

Single.getInitialProps = async ({ name }: any): Promise<Pick<Props, 'starship'>> => {
  const starship = await fetch(`https://yago.npkn.net/swapi?name=${name}`)
    .then(res => res.json());

  return { starship };
};


export default Single;


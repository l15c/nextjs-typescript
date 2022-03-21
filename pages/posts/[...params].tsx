import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsPageProps {}

export default function ParamsPage(props: ParamsPageProps) {
  const params = useRouter();
  return (
    <>
      <h1>Params Page</h1>
      <p>Params: {JSON.stringify(params.query)}</p>
    </>
  );
}

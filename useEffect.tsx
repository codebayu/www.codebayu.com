'use client';

import { useEffect, useState } from 'react';

export default function Test() {
  const [state, setState] = useState('');

  function apapun() {
    setState('udin');
  }

  useEffect(() => {
    console.log('running');
  }, [state]);

  // [] -> array depedency

  return <button onClick={apapun}>apapun</button>;
}

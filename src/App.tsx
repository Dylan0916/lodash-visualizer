import {
  pick,
  chunk,
  compact,
  concat,
  difference,
  drop,
  fill,
  flatten,
  head,
  initial,
  intersection,
} from 'lodash-es';
// import pick from 'lodash/pick';
// import chunk from 'lodash/chunk';
// import compact from 'lodash/compact';
// import concat from 'lodash/concat';
// import difference from 'lodash/difference';
// import drop from 'lodash/drop';
// import fill from 'lodash/fill';
// import flatten from 'lodash/flatten';
// import head from 'lodash/head';
// import initial from 'lodash/initial';
// import intersection from 'lodash/intersection';
import './App.css';

const obj = { a: 1, b: 2 };

function App() {
  // const picked = pick(obj, 'b');

  const ary = [
    pick(obj, 'b'),
    chunk(['a', 'b', 'c', 'd'], 2),
    compact([0, 1, false, 2, '', 3]),
    concat([1, 2, 3], [0, 5, 'a', 'b']),
    difference([2, 1], [2, 3]),
    drop([1, 2, 3]),
    fill([1, 2, 3], 'a'),
    flatten([1, [2, [3, [4]], 5]]),
    head([1, 2, 3]),
    initial([1, 2, 3]),
    intersection([2, 1], [2, 3]),
  ];

  ary.forEach((v) => console.log(v));

  return <div className="App">123</div>;
}

export default App;

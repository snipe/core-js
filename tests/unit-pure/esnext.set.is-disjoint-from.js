import { createSetLike } from '../helpers/helpers';

import Set from 'core-js-pure/full/set';

QUnit.test('Set#isDisjointFrom', assert => {
  const { isDisjointFrom } = Set.prototype;

  assert.isFunction(isDisjointFrom);
  assert.arity(isDisjointFrom, 1);
  assert.name(isDisjointFrom, 'isDisjointFrom');
  assert.nonEnumerable(Set.prototype, 'isDisjointFrom');

  assert.true(new Set([1]).isDisjointFrom(new Set([2])));
  assert.false(new Set([1]).isDisjointFrom(new Set([1])));
  assert.true(new Set([1, 2, 3]).isDisjointFrom(new Set([4, 5, 6])));
  assert.false(new Set([1, 2, 3]).isDisjointFrom(new Set([5, 4, 3])));
  assert.true(new Set([1]).isDisjointFrom(createSetLike([2])));
  assert.false(new Set([1]).isDisjointFrom(createSetLike([1])));
  assert.true(new Set([1, 2, 3]).isDisjointFrom(createSetLike([4, 5, 6])));
  assert.false(new Set([1, 2, 3]).isDisjointFrom(createSetLike([5, 4, 3])));

  assert.throws(() => new Set([1, 2, 3]).isDisjointFrom(), TypeError);
  assert.throws(() => isDisjointFrom.call({}, new Set([1, 2, 3])), TypeError);
  assert.throws(() => isDisjointFrom.call(undefined, new Set([1, 2, 3])), TypeError);
  assert.throws(() => isDisjointFrom.call(null, new Set([1, 2, 3])), TypeError);
});

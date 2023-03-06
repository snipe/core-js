import { createSetLike } from '../helpers/helpers';

QUnit.test('Set#symmetricDifference', assert => {
  const { symmetricDifference } = Set.prototype;
  const { from } = Array;

  assert.isFunction(symmetricDifference);
  assert.arity(symmetricDifference, 1);
  assert.name(symmetricDifference, 'symmetricDifference');
  assert.looksNative(symmetricDifference);
  assert.nonEnumerable(Set.prototype, 'symmetricDifference');

  const set = new Set([1]);
  assert.notSame(set.symmetricDifference(new Set()), set);

  assert.deepEqual(from(new Set([1, 2, 3]).symmetricDifference(new Set([4, 5]))), [1, 2, 3, 4, 5]);
  assert.deepEqual(from(new Set([1, 2, 3]).symmetricDifference(new Set([3, 4]))), [1, 2, 4]);
  assert.deepEqual(from(new Set([1, 2, 3]).symmetricDifference(createSetLike([4, 5]))), [1, 2, 3, 4, 5]);
  assert.deepEqual(from(new Set([1, 2, 3]).symmetricDifference(createSetLike([3, 4]))), [1, 2, 4]);

  assert.throws(() => new Set([1, 2, 3]).symmetricDifference(), TypeError);

  assert.throws(() => symmetricDifference.call({}, new Set([1, 2, 3])), TypeError);
  assert.throws(() => symmetricDifference.call(undefined, new Set([1, 2, 3])), TypeError);
  assert.throws(() => symmetricDifference.call(null, new Set([1, 2, 3])), TypeError);
});

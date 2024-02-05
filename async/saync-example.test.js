import { expect, it } from 'vitest';

import { generateToken } from './async-example';

it('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com';

  generateToken(testUserEmail, (err, token) => {
    expect(token).toBe(2);
  });
});

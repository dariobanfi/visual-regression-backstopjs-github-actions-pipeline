import * as backstop from 'backstopjs';

describe('workspace-project App', () => {
  it('should run backstop tests', async () => {
    await backstop('test')
      .then(() => {
        console.log('backstop test succesful');
      })
      .catch(() => {
        console.error('there was some visual changes, please review');
        // fail();
      });
  });
});

import { getFileData } from './files';

describe('getFileData method', () => {
  it('should return the file data as a string', async () => {
    const mockBlob = new Blob(['foo'], { type: 'text/plain' });
    const result = await getFileData(mockBlob);

    expect(result).toEqual('foo');
  });

  it('should return null on error', async () => {
    const mockBlob = new Blob([''], { type: 'text/plain' });
    const result = await getFileData(mockBlob);

    expect(result).toBeNull();
  });
});

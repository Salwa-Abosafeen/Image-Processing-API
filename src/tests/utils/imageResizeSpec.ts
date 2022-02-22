import { resizeImage } from '../../utils/imageResize';

describe('Test Image Resize Process', () => {
  it('gets thumbnail image that already exists', async () => {
    const result = await resizeImage('fjordTest', 200, 200, true);
    expect(result.status).toBe(200);
  });

  it('resize image process', async () => {
    const result = await resizeImage('fjordTest', 400, 200, true);
    expect(result.status).toBe(200);
  });
});

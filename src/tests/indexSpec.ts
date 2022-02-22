import supertest from 'supertest';
import app from '../index';
import { resizeImage } from '../utils/imageResize';

const request = supertest(app);

describe('Test endpoint response', () => {

    it('gets api/images endpoint', async () => {
        const response = await request.get('/api/images?filename=fjord&width=200&height=200');
        expect(response.status).toBe(200);
       
    })

    it('gets api/images throw missing filename error', async () => {
        const response = await request.get('/api/images?filename=fffff&width=200&height=200');
        expect(response.status).toBe(404);
    })

    it('gets api/images endpoint file not found error', async () => {
        const response = await request.get('/api/images?width=200&height=200');
        expect(response.status).toBe(403);
    })

});


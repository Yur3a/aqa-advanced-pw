import { test, expect } from '@playwright/test';
import { mainUserEmail, mainUserPassword } from '../../../test-data/credentials';
import AuthController from '../../../api-controllers/AuthController';
import CarsController from '../../../api-controllers/CarsController';

test.describe('API requests', () => {
    let carsController: CarsController;

    test('get models', async ({ request }) => {
        const response = await request.get('/api/cars/models');
        const body = await response.json();
        const carTitle = body.data[3].title;
        expect(carTitle).toEqual('A6');
    })

    test('get brands', async ({ request }) => {
        const response = await request.get('/api/cars/brands');
        const body = await response.json();
        const brandTitle = body.data[2].title;
        expect(brandTitle).toEqual('Ford');
    })

    let sid: string;

    test.beforeAll(async ({ request }) => {
        const authController = new AuthController(request);
        sid = await authController.signInAndGetCookies(mainUserEmail, mainUserPassword);

    })

    test.beforeEach(async ({ request }) => {
        carsController = new CarsController(request);
    })

    test('private get cars 1', async ({ request }) => {
        console.log(await request.storageState());

        const response = await carsController.getUserCars(sid);
        const body = await response.json();
        expect(body.data.length).toBeGreaterThan(0);
        console.log(body)
    })

    test('private get cars 2', async ({ request }) => {


        const response = await request.get('/api/cars', {
            headers: {
                'Cookie': `sid=${sid}`
            }
        });
        const body = await response.json();
        expect(body.data.length).toBeGreaterThan(0);
    })

    test('private get cars 3', async ({ request }) => {


        const response = await request.get('/api/cars', {
            headers: {
                'Cookie': `sid=${sid}`
            }
        });
        const body = await response.json();
        expect(body.data.length).toBeGreaterThan(0);
    })

    test('private get cars 4', async ({ request }) => {

        const response = await request.get('/api/cars', {
            headers: {
                'Cookie': `sid=${sid}`
            }
        });
        const body = await response.json();
        expect(body.data.length).toBeGreaterThan(0);
    })

    test('private get cars 5', async ({ request }) => {

        const response = await request.get('/api/cars', {
            headers: {
                'Cookie': `sid=${sid}`
            }
        });
        const body = await response.json();
        expect(body.data.length).toBeGreaterThan(0);
    })
})

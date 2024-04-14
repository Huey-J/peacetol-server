import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

describe('HelloController', () => {
  let helloController: HelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();

    helloController = app.get<HelloController>(HelloController);
  });

  describe('root', () => {
    it('should return "Hello World! This is Service Class"', () => {
      expect(helloController.returnWithService()).toBe('Hello World! This is Service Class');
    });

    it('ttt', () => {
        expect(helloController.findOne('5')).toBe('say hello 5 times');
    })
  });
});

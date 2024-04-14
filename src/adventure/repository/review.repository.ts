import { Injectable } from '@nestjs/common';
import { Review } from '@prisma/client';
import prisma from '../../../prisma/context';

@Injectable()
export class ReviewRepository {
  async createReview(star: number, adventureId: number): Promise<Review> {
    const review = prisma.review.create({
      data: {
        adventureId: adventureId,
        star: star,
      },
    });

    return await review;
  }

  async findStarByAdventureId(adventureId: number): Promise<number> {
    const review = prisma.review.findFirst({
      where: {
        adventureId: adventureId,
      },
    });

    return (await review).star;
  }
}

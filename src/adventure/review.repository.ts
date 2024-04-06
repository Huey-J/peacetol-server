import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/context';
import { Review } from '@prisma/client';

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

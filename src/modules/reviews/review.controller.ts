import { Request, Response } from "express";
import { ReviewServices } from "./review.service";

const addReview = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const reviewData = req.body;
  const result = await ReviewServices.addReview(slug, reviewData);

  res.json({
    success: true,
    message: "Review is created successfully!",
    data: result,
  });
};

// const getAllReviews = async (req: Request, res: Response) => {
//   try {
//     const result = await ReviewServices.getAllReviews();

//     res.status(200).json({
//       success: true,
//       message: "Reviews are fetched successfully !",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch movies!",
//       error: err,
//     });
//   }
// };

// const getReviewBySlug = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;
//     const result = await ReviewServices.getReviewBySlug(slug);

//     res.status(200).json({
//       success: true,
//       message: "Reviews are fetched successfully !",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch movies!",
//       error: err,
//     });
//   }
// };

export const ReviewControllers = {
  addReview,
  //  getAllReviews,
  //   getReviewBySlug,
};

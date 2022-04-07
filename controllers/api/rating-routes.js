const router = require("express").Router();
const { Favorite, User, Rating } = require("../../models");
module.exports = router;

// ~~ /api/ratings ~~ //

// get all reviews ~~ sort by movie title

// get all reviews
router.get("/", async (req, res) => {
  try {
    const ratingData = await Rating.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(ratingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get reviews based on user

// add review

// update/edit a review

// delete review

// add a review feed that will display all user reviews based on date added.

// users review page that will load all reviews that user has saved - extra tab on the users profile page - username for profile page, tab for favorites and tab for reviews and tab for all user reviews (defaults to favorites list)

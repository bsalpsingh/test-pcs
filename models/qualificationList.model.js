const mongoose = require("mongoose");

const mongooseLeanVirtuals = require("mongoose-lean-virtuals");

//!slugify the search fields
const qualificationListSchema = new mongoose.Schema(
  {
    qName: { type: String, required: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// productSchema.index({ category: 1 });

// creating virtual field and reference for variant
// productSchema.virtual("variant", {
//   ref: "Variant",
//   foreignField: "productId",
//   localField: "_id",
//   options: { sort: { variantPrice: -1 } },
// });

qualificationListSchema.plugin(mongooseLeanVirtuals);

const QualificationList = new mongoose.model(
  "QualificationList",
  qualificationListSchema
);

module.exports = QualificationList;

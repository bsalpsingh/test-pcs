const mongoose = require("mongoose");

const mongooseLeanVirtuals = require("mongoose-lean-virtuals");

//!slugify the search fields
const qualificationSchema = new mongoose.Schema(
  {
    Employee_id: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "Employee",
      required: true,
    },

    Qid: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "QualificationList",
      required: true,
    },
    marks: { type: Number, required: true },
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

var autoPopulate = function (next) {
  this.populate("Qid");
  next();
};

qualificationSchema.pre("findOne", autoPopulate);
qualificationSchema.pre("find", autoPopulate);

qualificationSchema.plugin(mongooseLeanVirtuals);

const Qualification = new mongoose.model(
  "EMP_QUALIFICATION",
  qualificationSchema
);

module.exports = Qualification;

const mongoose = require("mongoose");

const mongooseLeanVirtuals = require("mongoose-lean-virtuals");

//!slugify the search fields
const employeeSchema = new mongoose.Schema(
  {
    Emp_name: {
      type: String,
      maxlength: [100, "Please give a shorter name"],
      minlength: [3, "name too short "],
      required: true,
      lowercase: true,
      trim: true,
      lowercase: true,
    },
    Dob: { type: Date },
    salary: {
      type: Number,
      required: true,
      min: 0,
    },

    Gender: {
      type: String,
      emum: ["male", "female", "third gender"],
      default: "male",
    },

    entry_by: {
      type: String,
      default: "Bishal Singh",
    },
    entry_date: { type: Date, default: Date.now },

    // productBarCode: { type: String, trim: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// productSchema.index({ category: 1 });

// creating virtual field and reference for variant
employeeSchema.virtual("qualifications", {
  ref: "EMP_QUALIFICATION",
  foreignField: "Employee_id",
  localField: "_id",
});

employeeSchema.plugin(mongooseLeanVirtuals);

const Employee = new mongoose.model("Employee", employeeSchema);

module.exports = Employee;

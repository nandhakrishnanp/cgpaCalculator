"use server";
import mongoose from "mongoose";

import { connectDb } from "../util/database";
import { revalidatePath } from "next/cache";
const departmentSchema = new mongoose.Schema({
  name: String,
  id: String,
  subjects: [
    {
      name: String,
      credits: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const counterSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const Department =
  mongoose.models.Department || mongoose.model("Department", departmentSchema);

const Counter =
  mongoose.models.Counter || mongoose.model("Counter", counterSchema);

export const addDepartment = async (departmentdata: any) => {
  try {
    await connectDb();
    console.log(departmentdata);

    const newDepartment = await new Department(departmentdata[0]);
    await newDepartment.save();
    revalidatePath("/department");
  } catch (error: unknown) {
    console.log(error);

    return error;
  }
};

export const fetchalldepartment = async () => {
  try {
    await connectDb();
    const response = await Department.find().sort({
      createdAt: -1,
    });
    console.log(response);

    return response;
  } catch (error) {
    return error;
  }
};

export const fetchdepartmentById = async (id: string) => {
  try {
    await connectDb();
    await Counter.findOneAndUpdate(
      { name: "departmentFetchCount" },
      { $inc: { count: 1 } },
      { new: true, upsert: true },
    );
    const response = await Department.findOne({ id: id });

    return response;
  } catch (error) {
    return error;
  }
};

export const getCalculationCount = async () => {
  try {
    await connectDb();
    const counter = await Counter.findOne({ name: "departmentFetchCount" });
    return counter?.count ?? 0;
  } catch (error) {
    return 0;
  }
};

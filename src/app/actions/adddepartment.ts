"use server";
import mongoose from "mongoose";
import { connectDb } from "../util/database";
const departmentSchema = new mongoose.Schema({
  name: String,
  id: String,
  subjects: [
    {
      name: String,
      credits: Number,
    },
  ],
});

const Department =
  mongoose.models.Department || mongoose.model("Department", departmentSchema);

export const addDepartment = async (departmentdata: any) => {
  try {
    await connectDb();
    console.log(departmentdata);

    const newDepartment = await new Department(departmentdata[0]);
    await newDepartment.save();
  } catch (error: unknown) {
    console.log(error);

    return error;
  }
};

export const fetchalldepartment = async () => {
  try {
    await connectDb();
    const response = await Department.find();
    console.log(response);

    return response;
  } catch (error) {
    return error;
  }
};

export const fetchdepartmentById = async (id: string) => {
  try {
    await connectDb();
    const response = await Department.findOne({ id: id });

    return response;
  } catch (error) {
    return error;
  }
};

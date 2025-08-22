const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://omchaudhari0003:Chaudhari3@cluster0.ft1pnyk.mongodb.net/"
  )
  .then(() => console.log("Database successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    //  create a new document
    const newUser = await User.create({
      name: "James Doe",
      email: "James@gmail.com",
      age: "21",
      isActive: false,
      tags: ["Sport"],
    });

    // console.log("Created New User", newUser);

    // const newUser = new User({
    //   name: "User 2",
    //   email: "user2@gmail.com",
    //   age: "25",
    //   isActive: true,
    //   tags: ["developer"],
    // });

    // await newUser.save();

    //get all user

    const getAllUser = await User.find({});
    // console.log("All User ->", getAllUser);

    const getUser = await User.find({ isActive: false });
    //console.log(getUser);

    const getJohnDoeUser = await User.findOne({ name: "John Doe" });
    //console.log(getJohnDoeUser);

    // const getLastCreatedUserByUserId = await User.findById(newUser._id);
    // console.log(getLastCreatedUserByUserId, "getLastCreatedUserByUserId");

    const selectedFields = await User.find().select("name email -_id");
    // console.log(selectedFields);

    const limitedUsers = await User.find().limit(5).skip(1);
    // console.log(limitedUsers);

    const sortedUsers = await User.find().sort({ age: 1 });
    //console.log(sortedUsers);

    const countDocuments = await User.countDocuments({ isActive: false });
    //console.log(countDocuments);

    // const deletedUser = await User.findByIdAndDelete(newUser._id);
    // console.log("deleted user ->", deletedUser);

    const updateUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      { new: true }
    );
    console.log("updated user", updateUser);
  } catch (e) {
    console.log("Error -> ", e);
    await mongoose.connection.close();
  }
}

runQueryExamples();

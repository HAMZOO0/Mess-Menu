import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
   name: "menu",
   // Normal days
   initialState: [
      {
         day: 1,
         Breakfast: "Omelette + Paratha",
         Lunch: "Seasonal Vegetable + Pickle + Chapati",
         Dinner: "Chicken Pulao + Raita",
      },
      {
         day: 2,
         Breakfast: "Paratha + Channa + Tea",
         Lunch: "Pakora Kari + Pickle + Chapati",
         Dinner: "Dal Mash", // updated
      },
      {
         day: 3,
         Breakfast: "Aalu Bhujia + Paratha + Tea",
         Lunch: "Dal Mash + Chatni + Chapati",
         Dinner: "Chicken Karahi + Chapati + Sweet Dish (Kheer/Siwayan/Zarda)",
      },
      {
         day: 4,
         Breakfast: "French Toast + Tea", // updated
         Lunch: "Aalu Palak + Pickle + Chapati",
         Dinner: "Chicken Biryani + Raita + Cold Drinks",
      },
      {
         day: 5,
         Breakfast: "Egg, Tomato, Onion + Paratha + Tea",
         Lunch: "White Rice + Pickle + Dal Masoor",
         Dinner: "Kofta + Chapati", // updated
      },
      {
         day: 6,
         Breakfast: "Aalu Paratha + Yogurt + Tea",
         Lunch: "Aalo Gobhi / Bhindi + Pickle + Chapati",
         Dinner: "Aloo Pulao + Raita", // updated
      },
      {
         day: 0,
         Breakfast: "Halwa Puri + Channa + Tea",
         Lunch: "Aloo Salan + Pickle + Chapati", // updated
         Dinner: "Biryani", // updated
      },
   ],
   reducers: {
      weekChange: (state) => {
         state[1].Dinner = "Dal Mash";
         state[3].Breakfast = "Fresh Toast + Tea";
         state[4].Dinner = "Kofta + Chapati";
         state[5].Dinner = "Aloo Pulao + Raita";
         state[6].Lunch = "Aloo Salan + Pickle + Chapati";
         state[6].Dinner = "Biryani";
      },
   },
});

export const { weekChange } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;

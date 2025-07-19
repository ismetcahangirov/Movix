const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;

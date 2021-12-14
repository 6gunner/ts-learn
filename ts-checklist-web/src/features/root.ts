import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import { RootState } from '../store';
import request from '../api/request'
import API from '../api/api';

export interface CheckItem {
  id?: number,
  text: string,
  isChecked: boolean,
}

export interface CheckListState {
  checkList: Array<CheckItem>,
  currCheckItem: CheckItem,
}

const initialState: CheckListState = {
  checkList: [],
  currCheckItem: {
    text: '',
    isChecked: false
  },
}

// 创建一个异步的thunk
export const fetchList = createAsyncThunk<Array<CheckItem>>(
  'root/fetchList', async (arg, { rejectWithValue }) => {
    try {
      const list = await request(API.fetchList, {
        data: {},
        method: 'get',
      });
      return list;
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const fetchItemById = createAsyncThunk<CheckItem, string>(
  'root/fetchItemById', async (itemId, { rejectWithValue }) => {
    try {
      const item = await request(API.fetchItemById, {
        data: {
          id: itemId,
        },
        method: 'get'
      });
      return item;
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const addItem = createAsyncThunk<void, CheckItem>(
  'root/addItem', async (checkItem, { rejectWithValue }) => {
    try {
      return request(API.addItem, {
        data: {
          ...checkItem,
        },
        method: 'get',
      });
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)


export const updateItem = createAsyncThunk<string, CheckItem>(
  'root/updateItem', async (checkItem, { rejectWithValue }) => {
    try {
      return request(API.updateItem + '/' + checkItem.id, {
        data: {
          ...checkItem,
        },
        method: 'put',
      });
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const deleteById = createAsyncThunk<string, number>(
  'root/deleteById', async (id, { rejectWithValue, dispatch }) => {
    try {
      const result = await request(API.deleteById + '/' + id, {
        data: {
        },
        method: 'delete',
      });
      dispatch(fetchList());
      return result;
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)


export const rootSlice = createSlice({
  // namespace
  name: 'root',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.checkList = action.payload;
    })
    builder.addCase(fetchItemById.fulfilled, (state, action) => {
      state.currCheckItem = action.payload;
    })
  }
})

export const { } = rootSlice.actions;

export const selectCheckList = (state: RootState) => state.root.checkList;

export default rootSlice.reducer
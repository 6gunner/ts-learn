import { createSlice, createAsyncThunk, PayloadAction, } from '@reduxjs/toolkit'
import { RootState } from '../store';
import CheckListApi from '../api/CheckListApi'

interface CheckItem {
  id?: number,
  text: string,
  isChecked: boolean,
}

interface CheckListState {
  checkList: Array<CheckItem>
}

const initialState: CheckListState = {
  checkList: [],
}

// 创建一个异步的thunk
export const fetchList = createAsyncThunk<Array<CheckItem>>(
  'root/fetchList', async (arg, { rejectWithValue }) => {
    try {
      const list = await CheckListApi.fetchList();
      return list;
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
    add: (state, action: PayloadAction<CheckItem>) => {
      // const payload = action.payload;
      // todo 调用接口
    },
    update: (state, action) => {
    },
    deleteById: (state, action: PayloadAction<number>) => {
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      debugger
      state.checkList = action.payload;
    })
  }
})

export const { add, update, deleteById } = rootSlice.actions;

export const selectCheckList = (state: RootState) => state.root.checkList;

export default rootSlice.reducer
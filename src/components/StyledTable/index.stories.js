import StyledTable from "./";

export const StyledTableTest = {
  args: {
    title: "title",
    columns: [
      {
        label: "column1",
        key: "1",
      },
      {
        label: "column2",
        key: "2",
      },
    ],
    rows: [
      {
        values: [{ label: "row1_1" }, { label: "row1_2" }],
        key: "1",
      },
      {
        values: [{ label: "row2_1" }, { label: "row2_s2" }],
        key: "2",
      },
    ],
  },
};

export default {
  component: StyledTable,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      default: "title",
    },
  },
};

import React from "react";
import SNETPagination from "./index";
import { useState } from "react";

export default {
    title: "Components/SNETPagination",
    component: SNETPagination,
    argTypes: {
        limit: {
            control: { type: "number" },
            defaultValue: 10,
        },
        offset: {
            control: { type: "number" },
            defaultValue: 0,
        },
        totalCount: {
            control: { type: "number" },
            defaultValue: 100,
        },
        itemsPerPageOptions: {
            control: { type: "array" },
            defaultValue: [
                { value: 5, label: "5" },
                { value: 10, label: "10" },
                { value: 20, label: "20" },
            ],
        },
        itemsPerPage: {
            control: { type: "number" },
            defaultValue: 10,
        },
    },
};

const Template = (args) => {
    const [offset, setOffset] = useState(args.offset);
    const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage);

    const handleItemsPerPageChange = (newItemsPerPage) => {
        setItemsPerPage(newItemsPerPage);
    };

    const handlePageChange = (newOffset) => {
        setOffset(newOffset);
    };

    return (
        <SNETPagination
            {...args}
            offset={offset}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={handleItemsPerPageChange}
            onPageChange={handlePageChange}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    limit: 10,
    offset: 0,
    totalCount: 100,
    itemsPerPageOptions: [
        { value: 5, label: "5" },
        { value: 10, label: "10" },
        { value: 20, label: "20" },
    ],
    itemsPerPage: 10,
};

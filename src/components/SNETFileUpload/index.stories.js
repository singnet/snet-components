import React from "react";
import SNETFileUpload from "./index";
import { BrowserRouter } from "react-router-dom";

export default {
    title: "Components/SNETFileUpload",
    component: SNETFileUpload,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
    argTypes: {
        disabled: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        minSize: {
            control: { type: "number" },
            defaultValue: 0,
        },
        maxSize: {
            control: { type: "number" },
            defaultValue: 10,
        },
        multiple: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        accept: {
            control: { type: "text" },
            defaultValue: ".zip,.tar",
        },
        showFileDetails: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        fileName: {
            control: { type: "text" },
            defaultValue: "",
        },
        fileSize: {
            control: { type: "number" },
            defaultValue: 0,
        },
        fileDownloadURL: {
            control: { type: "text" },
            defaultValue: "",
        },
        uploadSuccess: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        error: {
            control: { type: "text" },
            defaultValue: "",
        },
        helperText: {
            control: { type: "text" },
            defaultValue: null,
        },
    },
};

const Template = (args) => <SNETFileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    minSize: 0,
    maxSize: 10,
    multiple: false,
    accept: ".zip,.tar",
    showFileDetails: false,
    fileName: "",
    fileSize: 0,
    fileDownloadURL: "",
    uploadSuccess: false,
    error: "",
    helperText: null,
};

export const WithFileDetails = Template.bind({});
WithFileDetails.args = {
    ...Default.args,
    showFileDetails: true,
    fileName: "example.zip",
    fileSize: 1024,
    fileDownloadURL: "https://example.com/example.zip",
    uploadSuccess: true,
};

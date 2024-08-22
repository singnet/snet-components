import React, { useState } from "react";
import UpdateNotificationBar from "./index";

export default {
    title: "Components/UpdateNotificationBar",
    component: UpdateNotificationBar,
    argTypes: {
        notificationText: {
            control: { type: "text" },
            defaultValue: "This is a notification message.",
            description: "Text to display in the notification bar.",
        },
        notificationLink: {
            control: { type: "object" },
            defaultValue: {
                link: "https://example.com",
                text: "Learn more",
            },
            description: "Link and text for the notification.",
        },
        showNotification: {
            control: { type: "boolean" },
            defaultValue: true,
            description: "Whether to show the notification bar.",
        },
        onCloseClick: {
            action: "closed",
            description: "Function to handle closing the notification bar.",
        },
    },
};

const Template = (args) => {
    const [showNotification, setShowNotification] = useState(args.showNotification);

    const handleCloseClick = () => {
        setShowNotification(false);
        args.onCloseClick();
    };

    return (
        <UpdateNotificationBar
            {...args}
            showNotification={showNotification}
            onCloseClick={handleCloseClick}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    notificationText: "This is a notification message.",
    notificationLink: {
        link: "https://example.com",
        text: "Learn more",
    },
    showNotification: true,
    onCloseClick: () => {},
};

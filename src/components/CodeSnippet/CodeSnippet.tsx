import React, {FC} from "react";
import { withStyles } from "@mui/styles";
import { useStyles } from "./styles";
import { CodeSnippetProps } from "./CodeSnippet.types";

const CodeSnippet: FC<CodeSnippetProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <section className={classes.codeSnippetContainer}>
            <div className={classes.codeSnippet}>{children}</div>
        </section>
    );
};

export default CodeSnippet;

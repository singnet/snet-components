import React, { FC } from "react";
import isEmpty from "lodash/isEmpty";
import isArray from "lodash/isArray";
import isObject from "lodash/isObject";
import { JSONObject } from "./JSONtoUI.types";

const JSONtoUl: FC<JSONObject> = (obj) => {
  if (isEmpty(obj)) {
    return null;
  }
  return (
    <ul>
      {Object.entries(obj).map(([key, value]) => {
        if (isArray(value)) {
          return (
            <li key={key}>
              <strong>{key}</strong>
              <span>[{value.join(",")}]</span>
            </li>
          );
        } else if (isObject(value)) {
          return JSONtoUl(value);
        }
        return (
          <li key={key}>
            <strong>{key}</strong>
            <span>{`${value}`}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default JSONtoUl;

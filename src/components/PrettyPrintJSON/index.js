import React from "react";
import PropTypes from "prop-types";

const PrettyPrintJson = ({ data, space = 2 }) => (
    <div>
        <pre>{JSON.stringify(data, null, space)}</pre>
    </div>
);

PrettyPrintJson.propTypes = {
    data: PropTypes.object.isRequired,
    space: PropTypes.number,
};

export default PrettyPrintJson;

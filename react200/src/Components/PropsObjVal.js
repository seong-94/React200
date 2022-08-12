import propTypes from "prop-types";

function PropsObjVal(Object_Json) {
  return <div>{JSON.stringify(Object_Json)}</div>;
}

PropsObjVal.propTypes = {
  Object_Json: propTypes.shape({
    name: propTypes.string.isRequired,
    number: propTypes.number.isRequired,
  }),
};

export default PropsObjVal;

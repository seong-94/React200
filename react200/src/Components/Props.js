import propTypes from "prop-types";

function Props({ String, Number, Boolean, Array, Function, Object_Json }) {
  return (
    <div>
      <p>{String}</p>
      <p>{Number}</p>
      <span>{Boolean.toString()}</span>
      <p>{Array}</p>
      <p>Object JsonProps : {JSON.stringify(Object_Json)}</p>
      <p>{Function}</p>
    </div>
  );
}
Props.propTypes = {
  String: propTypes.string,
  Number: propTypes.number,
  Boolean: propTypes.bool,
  Array: propTypes.array,
  Object: propTypes.object,
  Function: propTypes.func,
};

export default Props;

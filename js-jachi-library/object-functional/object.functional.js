const { getType } = require("../get-type-of");

// REMOVE
// REMOVE OBJECT PROPERTY BY PROP NAME, RETURN NEW OBJECT
const removeProperty = (propNameToRemove) => {
  return ({ [propNameToRemove]: _, ...propsToKeep }) => propsToKeep;
};

// REMOVE OBJECT PROPERTIES BY ARRAY OF PROP NAME, RETURN NEW OBJECT
const removeProperties = (propNamesToRemove) => {
  return (object) => {
    let resultObject = { ...object };
    propNamesToRemove.forEach((propNameToRemove) => {
      resultObject = removeProperty(propNameToRemove)(resultObject);
    });
    return resultObject;
  };
};

// EXTRACT
const extractProperty = (propName) => {
  return ({ [propName]: _ }) => (_ ? { [propName]: _ } : {});
};

const extractProperties = (propNames) => {
  return (object) => {
    let _ = {};
    propNames.forEach((propName) => {
      const func = extractProperty(propName);
      _ = { ..._, ...func(object) };
    });
    return _;
  };
};
const extractPropertiesByCondition = (conditionFunction) => {
  return (object) => {
    let _ = {};
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        if (conditionFunction(key, object[key])) {
          _ = { ..._, [key]: object[key] };
        }
      }
    }
    return _;
  };
};
// EXCLUDE
const excludePropertiesByCondition = (conditionFunction) => {
  return (object) => {
    const propsExcluded =
      extractPropertiesByCondition(conditionFunction)(object);
    const propsCleaned = removeProperties(Object.keys(propsExcluded))(object);
    return [propsCleaned, propsExcluded];
  };
};
// UPDATE SUB PROPS
const updatePropsWith = (manipulation) => {
  return (object) =>
    Object.assign(
      {},
      ...Object.keys(object).map((key) => ({
        [key]: manipulation({ ...object[key] }),
      }))
    );
};
const updatePropsWith2 = (manipulation) => {
  return (object) =>
    Object.assign(
      {},
      ...Object.entries(object).map(([key, value]) => ({
        [key]: manipulation(value),
      }))
    );
};

// UPDATE SUB OBJECTS ONLY
const updateSubObjectsOnlyWith = (manipulation) => {
  const isSubObject = (a) => getType.isObject(a);
  const manipulateOnlySubObject = (propValue) =>
    isSubObject(propValue) ? manipulation(propValue) : propValue;
  return (object) => updatePropsWith(manipulateOnlySubObject)(object);
};

module.exports = {
  removeProperty,
  removeProperties,
  extractProperty,
  extractProperties,
  extractPropertiesByCondition,
  excludePropertiesByCondition,
  updatePropsWith,
  updatePropsWith2,
  updateSubObjectsOnlyWith,
};

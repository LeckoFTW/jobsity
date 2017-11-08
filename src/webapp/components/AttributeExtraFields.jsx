/**
 * @author Andres Felipe Gonzalez
 * */
'use strict';

/* Dependencies declaration*/
/* React */
import React from 'react';
/* Components */
import InputFieldWithButton from './common/InputFieldWithButton';
import EnumerationsList from './common/EnumerationsList';
import NumberInput from './common/NumberInput';
import Input from './common/AttributeInput';

/**
 * Component that render format:NONE enumerations or format:NUMBER fields
 * */
const AttributeExtraFields = ({ attribute, changeFieldValue, state }) => {
  const {
    dataType,
    format,
    enumerations,
    min,
    max,
    unitOfMeasurement,
    precision,
    accuracy
  } = attribute;
  if (dataType === 'STRING') {
    if (format === 'NONE') {
      return (
        <div className="row">
          <div className="col-md-6">
            <InputFieldWithButton
              name="Enumerations"
              placeholder="Enter value"
              onChange={(enumeration) => changeFieldValue('enumerations', [
                ...enumerations, enumeration
              ])}
              className="attDescription"
            />
          </div>
          <div className="col-md-6">
            <EnumerationsList
              name="Values"
              enumerations={enumerations}
              onDeleteEnum={selectedEnum => changeFieldValue('enumerations', enumerations.filter(enumeration => enumeration !== selectedEnum))}
            />
          </div>
        </div>
      );
    }
    else if (format === 'NUMBER') return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <NumberInput
              name="Range"
              placeholder="Range Min"
              onChange={(e, min) => changeFieldValue('min', min)}
              value={min}
              required
              errMessage={state.minValidationError || state.rangeValidationError}
            />
          </div>
          <div className="col-md-6">
            <NumberInput
              placeholder="Range Max"
              onChange={(e, max) => changeFieldValue('max', max)}
              value={max}
              required
              errMessage={state.maxValidationError || state.rangeValidationError}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Input
              name="Unit of Measurement"
              placeholder="UoM (eg. mm)"
              onChange={(e, unitOfMeasurement) => changeFieldValue('unitOfMeasurement', unitOfMeasurement)}
              value={unitOfMeasurement}
            />
          </div>
          <div className="col-md-4">
            <NumberInput
              name="Precision"
              placeholder="Precision (eg. 0.5)"
              onChange={(e, precision) => changeFieldValue('precision', precision)}
              value={precision}
              required
              errMessage={state.precisionValidationError}
            />
          </div>
          <div className="col-md-4">
            <NumberInput
              name="Accuracy"
              placeholder="Accuracy (eg. 0.5)"
              onChange={(e, accuracy) => changeFieldValue('accuracy', accuracy)}
              value={accuracy}
              required
              errMessage={state.accuracyValidationError}
            />
          </div>
        </div>
      </div>
    );
    else return null;
  } else return null;
};

export default AttributeExtraFields;

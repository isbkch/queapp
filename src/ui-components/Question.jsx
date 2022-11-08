/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Questions } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function Question(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    question_text: undefined,
    choice_1: undefined,
    choice_2: undefined,
  };
  const [question_text, setQuestion_text] = React.useState(
    initialValues.question_text
  );
  const [choice_1, setChoice_1] = React.useState(initialValues.choice_1);
  const [choice_2, setChoice_2] = React.useState(initialValues.choice_2);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setQuestion_text(initialValues.question_text);
    setChoice_1(initialValues.choice_1);
    setChoice_2(initialValues.choice_2);
    setErrors({});
  };
  const validations = {
    question_text: [],
    choice_1: [],
    choice_2: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="30px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          question_text,
          choice_1,
          choice_2,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Questions(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "Question")}
    >
      <TextField
        label="Your Question"
        isRequired={false}
        isReadOnly={false}
        placeholder="Which is powerful?"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_text: value,
              choice_1,
              choice_2,
            };
            const result = onChange(modelFields);
            value = result?.question_text ?? value;
          }
          if (errors.question_text?.hasError) {
            runValidationTasks("question_text", value);
          }
          setQuestion_text(value);
        }}
        onBlur={() => runValidationTasks("question_text", question_text)}
        errorMessage={errors.question_text?.errorMessage}
        hasError={errors.question_text?.hasError}
        {...getOverrideProps(overrides, "question_text")}
      ></TextField>
      <TextField
        label="Choice 1"
        isRequired={false}
        isReadOnly={false}
        placeholder="Batman"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_text,
              choice_1: value,
              choice_2,
            };
            const result = onChange(modelFields);
            value = result?.choice_1 ?? value;
          }
          if (errors.choice_1?.hasError) {
            runValidationTasks("choice_1", value);
          }
          setChoice_1(value);
        }}
        onBlur={() => runValidationTasks("choice_1", choice_1)}
        errorMessage={errors.choice_1?.errorMessage}
        hasError={errors.choice_1?.hasError}
        {...getOverrideProps(overrides, "choice_1")}
      ></TextField>
      <TextField
        label="Choice 2"
        isRequired={false}
        isReadOnly={false}
        placeholder="Aquaman"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_text,
              choice_1,
              choice_2: value,
            };
            const result = onChange(modelFields);
            value = result?.choice_2 ?? value;
          }
          if (errors.choice_2?.hasError) {
            runValidationTasks("choice_2", value);
          }
          setChoice_2(value);
        }}
        onBlur={() => runValidationTasks("choice_2", choice_2)}
        errorMessage={errors.choice_2?.errorMessage}
        hasError={errors.choice_2?.hasError}
        {...getOverrideProps(overrides, "choice_2")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

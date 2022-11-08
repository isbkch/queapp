/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuestionInputValues = {
    question_text?: string;
    choice_1?: string;
    choice_2?: string;
};
export declare type QuestionValidationValues = {
    question_text?: ValidationFunction<string>;
    choice_1?: ValidationFunction<string>;
    choice_2?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionOverridesProps = {
    QuestionGrid?: FormProps<GridProps>;
    question_text?: FormProps<TextFieldProps>;
    choice_1?: FormProps<TextFieldProps>;
    choice_2?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionProps = React.PropsWithChildren<{
    overrides?: QuestionOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuestionInputValues) => QuestionInputValues;
    onSuccess?: (fields: QuestionInputValues) => void;
    onError?: (fields: QuestionInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: QuestionInputValues) => QuestionInputValues;
    onValidate?: QuestionValidationValues;
}>;
export default function Question(props: QuestionProps): React.ReactElement;

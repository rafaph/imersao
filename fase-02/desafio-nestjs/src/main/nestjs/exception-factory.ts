import { BadRequestException } from "@nestjs/common";
import { ValidationError as CValidationError } from "class-validator";

interface ValidationErrorItem {
  messages?: string[];
  children?: ValidationErrorItem;
}

type ValidationError = Record<string, ValidationErrorItem>;

const mapErrors = (errors: CValidationError[]): ValidationError => {
  const errorObject: ValidationError = {};
  for (const error of errors) {
    const property: ValidationErrorItem = {};

    if (error.constraints) {
      property.messages = Object.values(error.constraints);
    }

    if (error.children && error.children.length > 0) {
      property.children = mapErrors(error.children);
    }

    if (property) {
      errorObject[error.property] = property;
    }
  }
  return errorObject;
};

export const exceptionFactory = (errors: CValidationError[]): BadRequestException => {
  return new BadRequestException({
    message: "Validation error",
    errors: mapErrors(errors),
  });
};

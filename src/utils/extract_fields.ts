interface FieldsObject {
  [key: string]: string | boolean | number | FileList | null | undefined;
}

export const extractFields = (
  modifiedFields: FieldsObject,
  originalObject: FieldsObject,
): FieldsObject => {
  const extractedFields: FieldsObject = {};

  for (const key in modifiedFields) {
    if (modifiedFields[key] === true) {
      extractedFields[key] = originalObject[key];
    }
  }

  return extractedFields;
};

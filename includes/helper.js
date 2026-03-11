
module.exports = {
  clean_portion: (columnName) => `
    REGEXP_REPLACE(
      TRIM(${columnName}),
      R'[^X20-X7E]',
      ''
    )
  `
};
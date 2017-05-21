// this technique (importing and exporting in one line) requires that every imported
// component, to be exported in the file in the form of an object
// instead of the typical: export default ComponentName;
// It has to be like: export { ComponentName: ComponentName } or the
// ES6 shortened version: { ComponentName }

export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Header';
export * from './InputField';
export * from './Spinner';

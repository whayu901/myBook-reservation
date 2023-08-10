/**
 * Wrap type to add  `null | undefined`
 */
type Maybe<T> = T | null | undefined;

/**
 * Add prefix to each keys in Object
 */
type WithPrefix<T, P extends string> = {
  [K in keyof T as K extends string ? `${P}${K}` : never]: T[K];
};

/**
 * Modify the alpha value for defined rgba color strings
 */
interface String {
  withAlpha: (x: number) => string;
}

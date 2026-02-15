// Since @types/compromise is not available, we'll define a minimal interface
// to allow TypeScript to work with the library without full type safety.
declare module 'compromise' {
  interface Doc {
    text(): string;
    sentiment(): {
      score: number;
      positive: { score: number };
      negative: { score: number };
    };
    nouns(): Doc;
    verbs(): Doc;
    adjectives(): Doc;
    topics(): Doc;
    has(match: string): boolean;
    match(match: string): Doc;
    out(format: 'json' | 'text' | 'array'): any;
  }
  function nlp(text: string): Doc;
  export default nlp;
}

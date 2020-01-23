export function parseStringFormat(stringFormat: string): Array<string> {
  const regexp = /\bY{2,4}\b|\bM{1,4}\b|\bD{1,2}\b|\bd{1,2}\b|\bh{1,2}\b|\bH{1,2}\b|\bm{1,2}\b|\bs{1,2}\b/g;
  const matchedFormats = stringFormat.match(regexp) || [];
  return matchedFormats;
}

export class StringManager {
  clean(text: string): string {
    return text.trim();
  }

  isEmpty(text: string): boolean {
    return text.length === 0;
  }
}

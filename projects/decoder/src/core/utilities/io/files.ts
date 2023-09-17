export async function getFileData(blob: Blob): Promise<string | null> {
  const data: string | null = await readFile(blob);

  return data ? data : null;
}

async function readFile(blob: Blob): Promise<string | null> {
  return new Promise<string | null>(resolve => {
    const reader: FileReader = new FileReader();

    reader.readAsText(blob);

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        resolve(null);
      }
    };

    reader.onerror = () => resolve(null);
  });
}

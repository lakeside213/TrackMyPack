export async function readClipboard() {
  try {
    const content = await navigator.clipboard.readText();
    console.log(content);
    return content;
  } catch (e) {}
}

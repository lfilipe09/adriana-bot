function transformTextToHandle(text) {
  // Remover emojis
  const regexEmojis = /[^\p{L}\p{N}\p{P}\p{S}\p{Z}]/gu;
  const textWithoutEmojis = text.replace(regexEmojis, '');

  // Substituir espaços em branco por underline
  const textWithUnderline = textWithoutEmojis.replace(/\s+/g, '_');

  // Remover acentos
  const textWithoutAccents = textWithUnderline.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Remover caracteres especiais
  const textWithoutSpecialChars = textWithoutAccents.replace(/[^a-zA-Z0-9_]/g, '');

  // Converter letras maiúsculas em minúsculas
  const lowerCaseText = textWithoutSpecialChars.toLowerCase();

  // Remover espaços em branco antes e depois da string
  const trimmedText = lowerCaseText.trim();

  // Retornar a URL final
  return trimmedText;
}

module.exports = {transformTextToHandle}
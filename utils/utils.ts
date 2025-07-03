export function processRichText(text: string) {
  if (!text) return ''

  // Escape basic HTML characters
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // Bold: **text**
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

  // Italic: _text_
  html = html.replace(/_(.+?)_/g, '<em>$1</em>')

  // Links: [text](url)
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
  )

  // Lists: - or * at the beginning of a line
  html = html.replace(/(^|\n)[\-\*] (.+)/g, function (_, prefix, item) {
    return prefix + '<li>' + item + '</li>'
  })

  // Manually wrap <li> blocks inside <ul>
  if (html.indexOf('<li>') !== -1) {
    // Use RegExp that works without dotAll
    const listItems = html.match(/<li>[\s\S]*?<\/li>/g)
    if (listItems) {
      html = html.replace(
        listItems.join(''),
        '<ul>' + listItems.join('') + '</ul>',
      )
    }
  }

  // Convert double newlines to paragraphs
  html = html.replace(/\n{2,}/g, '</p><p>')

  // Convert single newlines to <br>
  html = html.replace(/\n/g, '<br>')

  return html
}

export function truncateMiddleText(
  text: string,
  startLength = 6,
  endLength = 4,
) {
  if (text.length <= startLength + endLength + 3) return text

  const start = text.slice(0, startLength)
  const end = text.slice(-endLength)
  return `${start}...${end}`
}

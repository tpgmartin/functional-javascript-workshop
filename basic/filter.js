function getShortMessages(messages) {
    textBody = []
    messages.filter(function (text) { text.message.length < 50 ? textBody.push(text.message) : -1 })
    return textBody
}

module.exports = getShortMessages
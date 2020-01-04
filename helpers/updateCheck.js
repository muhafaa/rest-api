function updateCheck(contactData) {
    let message = false
    if (!contactData.name && !contactData.phone) {
        message = 'name and phone must not empty'
    } else if (!contactData.name) {
        message = 'name must not empty'
    } else if (!contactData.phone) {
        message = 'phone must not empty'
    }
    return message
}

module.exports = updateCheck;
